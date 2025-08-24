'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useGlobalStore } from '@/stores/useGlobalStore';
import ApiService, { getCookie } from '@/backend/userService';
import { lsToken } from '@/common/constants';
import { CANCELLED_REQUEST } from '@/backend/errors.util';
import { showToast } from 'nextjs-toast-notify';
import { useForm } from 'react-hook-form';
import FormInput from '@/components/ui/inputForm';
type FormValues = {
  sender: string;
  wallet: string;
  amount: number;
};
const COMMISSION_RATE = 0.025; // 2.5%

export default function SendPage() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  const { user, isAuthenticated } = useGlobalStore()
  const [amount, setAmount] = useState('');
  const [recipientIdentifier, setRecipientIdentifier] = useState('');
  const [isSending, setIsSending] = useState(false);
  const parsedAmount = parseFloat(amount) || 0;
  const [commission, setCommission] = useState(0);
  const [totalDeducted, setTotalDeducted] = useState(0);
  const updateUser = useGlobalStore((state) => state.updateUser)
  const amountWatch = watch('amount');
  const emailWatch = watch('sender');
  const walletWatch = watch('wallet')
  const [disabled, setDisabled] = useState(true);
  const [tab, setTab] = useState<'orbe_user' | 'external_wallet'>('orbe_user');

  const validateButton = () => {
    const to = tab === 'orbe_user' ? emailWatch : walletWatch
    if (to === '' || isNaN(amountWatch)) {
      setDisabled(true);
    } else {
      const amountbalance = user && user.balanceUSDC && parseFloat(user?.balanceUSDC.toString()) || 0;
      if (totalDeducted > amountbalance) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    }
  }
  const init = async () => {
    try {
      const token = getCookie(lsToken) || '';
      if (token === '' && !isAuthenticated) {
        // router.push('/')
      }

      const response = await ApiService.getUser()
      updateUser(response)
      validateButton()
    } catch (error) {
      if (error != CANCELLED_REQUEST) {
        showToast.error(error?.toString?.() ?? 'Error desconocido');
      }
    }
    return null;
  }

  useEffect(() => {
    init()
  }, [])
  useEffect(() => {
    if (amountWatch) {
      const parsedAmount = parseFloat(amountWatch.toString());
      const commission = amountWatch * COMMISSION_RATE;
      setAmount(parsedAmount.toFixed(2));
      setCommission(commission);
      const totalDeducted = parsedAmount + commission;
      setTotalDeducted(totalDeducted);
      validateButton()
    }
  }, [amountWatch])
  useEffect(() => {
    validateButton()
  }, [emailWatch])
  useEffect(() => {
    validateButton()
  }, [walletWatch])
  const onSubmit = async (data: FormValues) => {
    try {
      const typeSend = tab === 'orbe_user' ? 1 : 0
      const recipientIdentifier = typeSend === 1 ? data.sender : data.wallet
      const amount = data.amount
      if (recipientIdentifier === user?.walletAddress) {
        showToast.error('You cannot send funds to your own wallet');
        return
      }
      if (recipientIdentifier === '') {
        showToast.error('Please enter a wallet address');
        return
      }
      if (isNaN(amount)) {
        showToast.error('Please enter an amount');
        return
      }
      setIsSending(true);

      await ApiService.sendUSDC(recipientIdentifier, totalDeducted, typeSend);
      await init();
      setIsSending(false);
      showToast.success('Funds sent successfully', { position: 'top-center' });
      reset();
    } catch (error) {
      if (error != CANCELLED_REQUEST) {
        showToast.error(error?.toString?.() ?? 'Error desconocido', {
          duration: 10000,
          position: 'top-center',
        });
        setIsSending(false);
      }

    }
  }
  return (
    <div className="flex justify-center items-start pt-10" >
      <Card className="w-full max-w-lg">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

          <CardHeader>
            <CardTitle>Send Funds</CardTitle>
            <CardDescription>
              Send dollars to be received as local currency or to an external wallet. A flat 2.5% fee applies
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <FormInput
                step="0.01"
                label="Amount (USDC)"
                type="number"
                placeholder="0.00"
                name="amount"
                register={register('amount', {
                  required: 'Amount is required',

                })}
                error={errors.amount}
              />
              {/* </div> */}
              <p className="text-xs text-muted-foreground pt-1">
                Available balance: ${user && user.balanceUSDC && user.balanceUSDC.toLocaleString()} USDC
              </p>
            </div>

            {amountWatch > 0 && (
              <div className="space-y-3 rounded-lg border bg-secondary/50 p-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Amount to send</span>
                  <span>${amountWatch}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Fee (2.5%)</span>
                  <span>+ ${commission}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total to be deducted</span>
                  <span>${totalDeducted} USDC</span>
                </div>
              </div>
            )}


            <Tabs defaultValue={tab} className="w-full mt-6" value={tab} onValueChange={(v) => setTab(v as 'orbe_user' | 'external_wallet')}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="orbe_user">To Orbe User</TabsTrigger>
                <TabsTrigger value="external_wallet">External Wallet</TabsTrigger>
              </TabsList>
              <TabsContent value="orbe_user" className="mt-6">
                <FormInput
                  label="Recipient's Email"
                  name="sender"
                  type="email"
                  placeholder="email@example.com"
                  register={register('sender', {
                    required: '',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Invalid email format',
                    }
                  })}
                  error={errors.sender}
                />
              </TabsContent>
              <TabsContent value="external_wallet" className="mt-6">
                <FormInput
                  label="Wallet's Address"
                  name="wallet"
                  type="text"
                  placeholder="0x0...0"
                  register={register('wallet', {
                    required: 'Wallet address is required',
                  })}
                  error={errors.wallet}
                />
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="pt-6">
            <Button
              type="submit"
              className="w-full"
              disabled={!isSending && disabled}
              isLoading={isSending}
            >
              Send USDC
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

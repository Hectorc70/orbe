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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { mockUser } from '@/lib/data';
import { ArrowRight, Wallet } from 'lucide-react';
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
  email: string;
  amount: number;
};
const COMMISSION_RATE = 0.025; // 2.5%

export default function SendPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();
  const { user, isAuthenticated } = useGlobalStore()
  const [amount, setAmount] = useState('');
  const [recipientIdentifier, setRecipientIdentifier] = useState('');
  const [isSending, setIsSending] = useState(false);
  const parsedAmount = parseFloat(amount) || 0;
  const commission = parsedAmount * COMMISSION_RATE;
  const totalDeducted = parsedAmount + commission;
  const updateUser = useGlobalStore((state) => state.updateUser)
  const amountWatch = watch('amount');
  const emailWatch = watch('email');
  const [disabled, setDisabled] = useState(true);

  const validateButton = () => {
    if (emailWatch === '' || isNaN(amountWatch)) {
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
      const commission = amountWatch * COMMISSION_RATE;
      const totalDeducted = parsedAmount + commission;
      setAmount(parsedAmount.toFixed(2));
      validateButton()
    }
  }, [amountWatch])
  useEffect(() => {
    validateButton()
  }, [emailWatch])
  const onSubmit = async (data: FormValues) => {
    try {
      const recipientIdentifier = data.email
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
      await ApiService.sendUSDC(recipientIdentifier, amount, 1);
      setIsSending(false);
      showToast.success('Funds sent successfully');
      await init();
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
    <div className="flex justify-center items-start pt-10">
      <Card className="w-full max-w-lg">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

          <CardHeader>
            <CardTitle>Send Funds</CardTitle>
            <CardDescription>
              Send USDC to another Orbe user or to an external crypto wallet. A 2.5% commission is applied to all sends.
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

            {parsedAmount > 0 && (
              <div className="space-y-3 rounded-lg border bg-secondary/50 p-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Amount to send</span>
                  <span>${parsedAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Fee (2.5%)</span>
                  <span>+ ${commission.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total to be deducted</span>
                  <span>${totalDeducted.toFixed(2)} USDC</span>
                </div>
              </div>
            )}


            <Tabs defaultValue="orbe_user" className="w-full mt-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="orbe_user">To Orbe User</TabsTrigger>
                <TabsTrigger value="external_wallet">External Wallet</TabsTrigger>
              </TabsList>
              <TabsContent value="orbe_user" className="mt-6">
                <FormInput
                  label="Recipient's Email"
                  name="email"
                  type="email"
                  placeholder="email@example.com"
                  register={register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Invalid email format',
                    }
                  })}
                  error={errors.email}
                />
              </TabsContent>
              <TabsContent value="external_wallet" className="mt-6">
                <div className="space-y-2">
                  <Label htmlFor="walletAddress">Recipient's Wallet Address</Label>
                  <Input
                    id="walletAddress"
                    placeholder="0x..."
                    value={recipientIdentifier}
                    onChange={(e) => setRecipientIdentifier(e.target.value)}
                  />
                </div>
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

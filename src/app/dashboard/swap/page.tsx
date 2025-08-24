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
import { useGlobalStore } from '@/stores/useGlobalStore';
import ApiService, { getCookie } from '@/backend/userService';
import { lsToken } from '@/common/constants';
import { CANCELLED_REQUEST } from '@/backend/errors.util';
import { showToast } from 'nextjs-toast-notify';
import { useForm } from 'react-hook-form';
import FormInput from '@/components/ui/inputForm';
import { useRouter } from 'next/navigation';
type FormValues = {
  amount: number;
};

export default function SwapPage() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  const router = useRouter();
  const { user, isAuthenticated } = useGlobalStore()
  const [amount, setAmount] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [totalDeducted, setTotalDeducted] = useState(0);
  const updateUser = useGlobalStore((state) => state.updateUser)
  const amountWatch = watch('amount');
  const [disabled, setDisabled] = useState(true);

  const validateButton = () => {
    if (isNaN(amountWatch)) {
      setDisabled(true);
    } else {
      const amountbalance = user && user.balanceNative && parseFloat(user?.balanceNative.toString()) || 0;
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
        router.push('/')
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
      setAmount(parsedAmount.toFixed(2));
      setTotalDeducted(parsedAmount);
      validateButton()
    }
  }, [amountWatch])

  const onSubmit = async (data: FormValues) => {
    try {
      const amount = data.amount
      if (isNaN(amount)) {
        showToast.error('Please enter an amount');
        return
      }
      setIsSending(true);
      await ApiService.swapNative(totalDeducted);
      setIsSending(false);
      showToast.success('Funds changed successfully', { position: 'top-center' });
      reset();
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
    <div className="flex justify-center items-start pt-10" >
      <Card className="w-full max-w-lg">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

          <CardHeader>
            <CardTitle>Swap Funds</CardTitle>
            <CardDescription>
              Convert your Monad tokens to USDC at a 1:1 rate. Swapped tokens will be available immediately in your wallet balance.
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
                Available balance: ${user && user.balanceNative && user.balanceNative.toLocaleString()} MON
              </p>
            </div>

            {amountWatch > 0 && (
              <div className="space-y-3 rounded-lg border bg-secondary/50 p-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Amount to convert</span>
                  <span>${amountWatch}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total to be deducted&nbsp;</span>
                  <span> ${totalDeducted} MON</span>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="pt-6">
            <Button
              type="submit"
              className="w-full"
              disabled={!isSending && disabled}
              isLoading={isSending}
            >
              Swap to USDC
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

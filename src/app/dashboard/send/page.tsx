'use client';

import { useState } from 'react';
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

const COMMISSION_RATE = 0.025; // 2.5%

export default function SendPage() {
  const [amount, setAmount] = useState('');
  
  const parsedAmount = parseFloat(amount) || 0;
  const commission = parsedAmount * COMMISSION_RATE;
  const totalDeducted = parsedAmount + commission;

  return (
    <div className="flex justify-center items-start pt-10">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Send Funds</CardTitle>
          <CardDescription>
            Send USDC to another Orbe user or to an external crypto wallet.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="orbe_user" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="orbe_user">To Orbe User</TabsTrigger>
              <TabsTrigger value="external_wallet">External Wallet</TabsTrigger>
            </TabsList>
            <TabsContent value="orbe_user" className="mt-6">
                <div className="space-y-6">
                    <div className="space-y-2">
                    <Label htmlFor="recipientId">Recipient's Unique ID</Label>
                    <Input id="recipientId" placeholder="e.g., jane-doe-456" />
                    </div>
                    <div className="space-y-2">
                    <Label htmlFor="amount">Amount (USDC)</Label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">
                        $
                        </span>
                        <Input
                        id="amount"
                        type="number"
                        placeholder="0.00"
                        className="pl-7"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                    <p className="text-xs text-muted-foreground pt-1">
                        Available balance: ${mockUser.balanceUSDC.toLocaleString()} USDC
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
                </div>
                <CardFooter className="px-0 pt-6 pb-0">
                    <Button type="submit" className="w-full" disabled={totalDeducted <= 0 || totalDeducted > mockUser.balanceUSDC}>
                        Send USDC
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </CardFooter>
            </TabsContent>
            <TabsContent value="external_wallet">
                <div className="mt-6 flex flex-col items-center text-center">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
                        <Wallet className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-semibold">Send to an External Wallet</h3>
                    <p className="text-muted-foreground mt-1 max-w-md">
                        Connect your preferred crypto wallet to securely send your USDC balance. A 2.5% fee will be applied.
                    </p>
                    <Button size="lg" className="mt-6">Connect Wallet</Button>
                </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

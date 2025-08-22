import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { mockUser } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export default function SendPage() {
  return (
    <div className="flex justify-center items-start pt-10">
        <Card className="w-full max-w-lg">
            <CardHeader>
                <CardTitle>Send Funds</CardTitle>
                <CardDescription>Enter recipient ID and amount to send USDC.</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="recipientId">Recipient's Unique ID</Label>
                        <Input id="recipientId" placeholder="e.g., jane-doe-456" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="amount">Amount (USDC)</Label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">$</span>
                            <Input id="amount" type="number" placeholder="0.00" className="pl-7" />
                        </div>
                         <p className="text-xs text-muted-foreground pt-1">
                            Available balance: ${mockUser.balanceUSDC.toLocaleString()} USDC
                        </p>
                    </div>
                    <Button type="submit" className="w-full">
                        Send USDC
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </form>
            </CardContent>
        </Card>
    </div>
  );
}

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ClipboardCopy, Banknote, Landmark, ArrowUpCircle, ArrowDownCircle, DollarSign, CalendarDays, Clock } from 'lucide-react';
import { mockUser, mockTransactions } from '@/lib/data';

export default function WalletPage() {
  const accountDetails = [
    { label: 'Bank Name', value: 'Orbe Bank, N.A.' },
    { label: 'Routing Number', value: '021000021' },
    { label: 'Account Number', value: '892345712' },
    { label: 'Account Type', value: 'Checking' },
    { label: 'Beneficiary Name', value: mockUser.name },
  ];

  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="bg-primary/10 text-primary p-3 rounded-full">
                <Landmark className="h-6 w-6" />
            </div>
            <div>
                <CardTitle>Fund Your USD Balance</CardTitle>
                <CardDescription>
                Use these details to deposit USD from your US bank account.
                </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 space-y-3">
                {accountDetails.map(detail => (
                     <div key={detail.label} className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">{detail.label}</span>
                        <div className="flex items-center gap-2">
                            <span className="font-mono">{detail.value}</span>
                            <Button variant="ghost" size="icon" className="h-7 w-7">
                                <ClipboardCopy className="h-4 w-4" />
                            </Button>
                        </div>
                     </div>
                ))}
            </div>
             <p className="text-xs text-muted-foreground pt-2 text-center">
              This is a simulation. Do not use these details for real transactions.
            </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
            <div className="flex items-center gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-full">
                    <Banknote className="h-6 w-6" />
                </div>
                <div>
                    <CardTitle>Receive Funds in Orbe</CardTitle>
                    <CardDescription>
                    Share your Unique ID with other Orbe users to receive USDC.
                    </CardDescription>
                </div>
            </div>
        </CardHeader>
        <CardContent className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Your Unique ID</p>
            <Badge variant="secondary" className="text-lg font-mono py-2 px-4">
                {mockUser.uniqueId}
            </Badge>
        </CardContent>
         <CardFooter className="justify-center">
            <Button variant="outline">
                <ClipboardCopy className="mr-2 h-4 w-4" />
                Copy my ID
            </Button>
         </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="bg-primary/10 text-primary p-3 rounded-full">
                <Banknote className="h-6 w-6" />
            </div>
            <div>
                <CardTitle>Your USDC Wallet</CardTitle>
                <CardDescription>
                Your current USDC balance and recent transactions.
                </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Current Balance</span>
            <span className="text-2xl font-bold">{mockUser.balanceUSDC.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium leading-none">Recent Transactions</h4>
            <div className="grid gap-4">
              {mockTransactions.map(transaction => (
                <div key={transaction.id} className="flex items-center gap-4">
                  <div className={`p-2 rounded-full ${transaction.type === 'sent' ? 'bg-red-100 text-red-600' : transaction.type === 'received' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                    {transaction.type === 'sent' && <ArrowUpCircle className="h-5 w-5" />}
                    {transaction.type === 'received' && <ArrowDownCircle className="h-5 w-5" />}
                    {transaction.type === 'top-up' && <DollarSign className="h-5 w-5" />}
                  </div>
                  <div className="grid gap-1.5">
                    <p className="text-sm font-medium leading-none">
                      {transaction.type === 'sent' && 'Sent'}
                      {transaction.type === 'received' && 'Received'}
                      {transaction.type === 'top-up' && 'Top-up'}
                    </p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <CalendarDays className="h-3 w-3" /> {new Date(transaction.date).toLocaleDateString()}
                      <Clock className="h-3 w-3 ml-2" /> {new Date(transaction.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                  <div className="ml-auto text-sm font-medium">{transaction.amountUSDC.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</div>
                  <Badge variant={transaction.status === 'Completed' ? 'default' : transaction.status === 'Pending' ? 'secondary' : 'destructive'}>{transaction.status}</Badge>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

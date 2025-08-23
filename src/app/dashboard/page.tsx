import Link from 'next/link';
import { ArrowUpRight, PlusCircle, ArrowDownToDot, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { mockTransactions, mockUser } from '@/lib/data';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

const USDC_TO_MXN_RATE = 16.50;

export default function DashboardPage() {
  const recentTransactions = mockTransactions.slice(0, 5);
  const balanceMXN = mockUser.balanceUSDC * USDC_TO_MXN_RATE;

  const getStatusBadgeVariant = (status: 'Completed' | 'Pending' | 'Failed') => {
    switch (status) {
      case 'Completed':
        return 'default';
      case 'Pending':
        return 'secondary';
      case 'Failed':
        return 'destructive';
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">USDC Balance</CardTitle>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-muted-foreground"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v4m0 4v2"></path></svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${mockUser.balanceUSDC.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <p className="text-xs text-muted-foreground">
                ~ ${balanceMXN.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} MXN
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">USD Balance</CardTitle>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-muted-foreground"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${mockUser.balanceUSD.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
            <p className="text-xs text-muted-foreground">Available to convert to USDC</p>
          </CardContent>
        </Card>
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow flex items-center">
            <div className="w-full grid grid-cols-3 gap-2">
              <Button asChild variant="outline" size="sm" className="flex-col h-auto py-2">
                <Link href="/dashboard/send">
                  <ArrowUpRight className="h-5 w-5 mb-1" />
                  <span>Send</span>
                </Link>
              </Button>
               <Button asChild variant="outline" size="sm" className="flex-col h-auto py-2">
                <Link href="/dashboard/wallet">
                  <Download className="h-5 w-5 mb-1" />
                  <span>Receive</span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="flex-col h-auto py-2">
                <Link href="/dashboard/wallet">
                  <PlusCircle className="h-5 w-5 mb-1" />
                 <span>Add Funds</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>A list of your most recent transactions.</CardDescription>
            </div>
            <Button asChild variant="outline" size="sm">
                <Link href="/dashboard/transactions">View all</Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Counterparty</TableHead>
                <TableHead className="text-right">Amount (USDC)</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentTransactions.map((tx) => (
                <TableRow key={tx.id}>
                  <TableCell className="font-medium capitalize">{tx.type}</TableCell>
                  <TableCell>{tx.type === 'sent' ? tx.to : tx.from}</TableCell>
                  <TableCell className={cn("text-right font-mono", tx.type === 'received' || tx.type === 'top-up' ? 'text-green-600' : 'text-red-600')}>
                    {tx.type === 'received' || tx.type === 'top-up' ? '+' : '-'} ${tx.amountUSDC.toFixed(2)}
                  </TableCell>
                  <TableCell>{format(new Date(tx.date), 'MMM d, yyyy')}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusBadgeVariant(tx.status)}>{tx.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

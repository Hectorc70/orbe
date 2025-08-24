import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { mockTransactions } from '@/lib/data';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

export default function TransactionsPage() {
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
    <Card>
      <CardHeader>
        <CardTitle>Transaction History</CardTitle>
        <CardDescription>A complete list of all your transactions.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Details</TableHead>
              <TableHead className="text-right">Amount (USDC)</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockTransactions.map((tx) => (
              <TableRow key={tx.id}>
                <TableCell className="font-medium capitalize">{tx.type}</TableCell>
                <TableCell>
                  <div className="font-medium">{tx.type === 'sent' ? `To: ${tx.to}` : `From: ${tx.from}`}</div>
                  <div className="text-sm text-muted-foreground">ID: {tx.id}</div>
                </TableCell>
                <TableCell className={cn("text-right font-mono", tx.type === 'received' || tx.type === 'top-up' ? 'text-green-600' : 'text-red-600')}>
                  {tx.type === 'received' || tx.type === 'top-up' ? '+' : '-'} ${tx.amountUSDC.toFixed(2)}
                </TableCell>
                <TableCell>{format(new Date(tx.date), 'PPpp')}</TableCell>
                <TableCell>
                  <Badge variant={getStatusBadgeVariant(tx.status)}>{tx.status}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

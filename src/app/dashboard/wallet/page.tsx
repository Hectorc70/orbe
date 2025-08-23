import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ClipboardCopy, Banknote, Landmark } from 'lucide-react';
import { mockUser } from '@/lib/data';

export default function WalletPage() {
  const accountDetails = [
    { label: 'Bank Name', value: 'Orbe Bank, N.A.' },
    { label: 'Routing Number', value: '021000021' },
    { label: 'Account Number', value: '892345712' },
    { label: 'Account Type', value: 'Checking' },
    { label: 'Beneficiary Name', value: mockUser.name },
  ];
  
  const usdcWalletAddress = "0x1234...abcd"; // Example wallet address

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
                    <CardTitle>Receive USDC</CardTitle>
                    <CardDescription>
                    Share your Unique ID or Wallet Address to receive USDC.
                    </CardDescription>
                </div>
            </div>
        </CardHeader>
        <CardContent className="space-y-6">
            <div className='text-center'>
              <p className="text-sm text-muted-foreground mb-2">Your Unique ID</p>
              <Badge variant="secondary" className="text-lg font-mono py-2 px-4">
                  {mockUser.uniqueId}
              </Badge>
            </div>
             <div className='text-center'>
              <p className="text-sm text-muted-foreground mb-2">Your USDC Wallet Address</p>
              <Badge variant="secondary" className="text-lg font-mono py-2 px-4 whitespace-nowrap overflow-hidden text-ellipsis">
                  {usdcWalletAddress}
              </Badge>
            </div>
        </CardContent>
         <CardFooter className="justify-center">
            <Button variant="outline">
                <ClipboardCopy className="mr-2 h-4 w-4" />
                Copy Address
            </Button>
         </CardFooter>
      </Card>
    </div>
  );
}
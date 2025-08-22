import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Wallet } from 'lucide-react';

export default function WalletPage() {
  return (
    <div className="flex justify-center items-start pt-10">
      <Card className="w-full max-w-2xl text-center">
        <CardHeader>
          <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full">
            <Wallet className="h-8 w-8" />
          </div>
          <CardTitle className="!mt-4">Connect External Wallet</CardTitle>
          <CardDescription>
            Add funds to your Orbe Lite account by connecting your external crypto wallet. We use WalletConnect to ensure a secure connection.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center space-y-4">
            <p className="text-sm text-muted-foreground">
              By clicking 'Connect', you will be redirected to WalletConnect to approve the connection.
            </p>
            <Button className="w-full max-w-xs">
              Connect with WalletConnect
            </Button>
            <p className="text-xs text-muted-foreground pt-4">
              This is a simulated integration. No real wallet connection will be made.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

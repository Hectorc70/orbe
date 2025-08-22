import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { mockUser } from '@/lib/data';
import { CheckCircle2, AlertCircle, XCircle } from 'lucide-react';

const kycComponents = {
  Verified: {
    Icon: CheckCircle2,
    variant: 'default' as const,
    text: 'Your identity has been successfully verified.',
    className: 'text-green-600',
    badgeClass: 'bg-green-100 text-green-800',
  },
  Pending: {
    Icon: AlertCircle,
    variant: 'secondary' as const,
    text: 'Your verification is pending. This usually takes 24-48 hours.',
    className: 'text-yellow-600',
    badgeClass: 'bg-yellow-100 text-yellow-800',
  },
  Unverified: {
    Icon: XCircle,
    variant: 'destructive' as const,
    text: 'Your account is unverified. Please complete KYC to access all features.',
    className: 'text-red-600',
    badgeClass: 'bg-red-100 text-red-800',
  }
};

export default function ProfilePage() {
  const kycInfo = kycComponents[mockUser.kycStatus];

  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>Manage your personal information.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" defaultValue={mockUser.name} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" defaultValue={mockUser.email} disabled />
            </div>
            <div className="space-y-2">
              <Label htmlFor="uniqueId">Unique ID</Label>
              <Input id="uniqueId" defaultValue={mockUser.uniqueId} disabled />
            </div>
          </form>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Identity Verification (KYC)</CardTitle>
          <CardDescription>Your account verification status.</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center gap-4">
          <kycInfo.Icon className={`w-10 h-10 ${kycInfo.className}`} />
          <div>
            <Badge variant={kycInfo.variant} className={`mb-2 ${kycInfo.badgeClass}`}>{mockUser.kycStatus}</Badge>
            <p className="text-sm text-muted-foreground">{kycInfo.text}</p>
          </div>
        </CardContent>
        {mockUser.kycStatus === 'Unverified' && (
            <CardFooter className="border-t pt-4">
                <Button>Start Verification Process</Button>
            </CardFooter>
        )}
      </Card>
    </div>
  );
}

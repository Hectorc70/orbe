import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { mockUser } from '@/lib/data';
import { ArrowRight, Banknote } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const USDC_TO_MXN_RATE = 16.50;

export default function WithdrawPage() {
  const estimatedMXN = mockUser.balanceUSDC * USDC_TO_MXN_RATE;

  return (
    <div className="flex justify-center items-start pt-10">
        <Card className="w-full max-w-2xl">
            <CardHeader>
                <CardTitle>Withdraw Funds</CardTitle>
                <CardDescription>Convert your USDC to MXN and send it to your bank account.</CardDescription>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="withdraw_mxn" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="withdraw_mxn">Withdraw to MXN</TabsTrigger>
                        <TabsTrigger value="add_account">Add Bank Account</TabsTrigger>
                    </TabsList>
                    <TabsContent value="withdraw_mxn">
                        <form className="space-y-6 mt-6">
                            <div className="space-y-2">
                                <Label htmlFor="amount">Amount to Withdraw (USDC)</Label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">$</span>
                                    <Input id="amount" type="number" placeholder="0.00" className="pl-7" defaultValue={mockUser.balanceUSDC.toFixed(2)} />
                                </div>
                                <p className="text-xs text-muted-foreground pt-1">
                                    Available balance: ${mockUser.balanceUSDC.toLocaleString()} USDC
                                </p>
                            </div>
                            
                            <div className="p-4 rounded-lg bg-secondary/70">
                                <p className="text-sm text-muted-foreground">You will receive (approximately)</p>
                                <p className="text-2xl font-semibold">
                                    ${estimatedMXN.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} MXN
                                </p>
                                <p className="text-xs text-muted-foreground">Exchange Rate: 1 USDC ≈ {USDC_TO_MXN_RATE} MXN</p>
                            </div>

                            <div>
                                <h3 className="text-md font-medium mb-2">Select Destination Account</h3>
                                <div className="border rounded-md p-4 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Banknote className="w-6 h-6 text-primary"/>
                                        <div>
                                            <p className="font-semibold">Banorte **** 1234</p>
                                            <p className="text-sm text-muted-foreground">CLABE: ••••1234</p>
                                        </div>
                                    </div>
                                    <Button variant="outline" size="sm">Change</Button>
                                </div>
                            </div>
                           
                            <Button type="submit" className="w-full" size="lg">
                                Withdraw Funds
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </form>
                    </TabsContent>
                    <TabsContent value="add_account">
                         <form className="space-y-6 mt-6">
                            <div className="space-y-2">
                                <Label htmlFor="bankName">Bank Name</Label>
                                <Input id="bankName" placeholder="e.g., BBVA México, Banorte" />
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="accountHolder">Account Holder Name</Label>
                                <Input id="accountHolder" defaultValue={mockUser.name} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="clabe">CLABE</Label>
                                <Input id="clabe" placeholder="18-digit CLABE account number" />
                            </div>
                             <Button type="submit" className="w-full">
                                Add Bank Account
                            </Button>
                        </form>
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    </div>
  );
}

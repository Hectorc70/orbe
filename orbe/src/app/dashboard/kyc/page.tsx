import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { FileUp, Landmark, ScanFace } from 'lucide-react';

export default function KYCPage() {
    return (
        <div className="flex justify-center items-start pt-10">
            <Card className="w-full max-w-2xl">
                <CardHeader>
                    <CardTitle>Identity Verification (KYC)</CardTitle>
                    <CardDescription>To comply with regulations and ensure security, we need to verify your identity.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                            <FileUp className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Step 1: Document Upload</h3>
                            <p className="text-muted-foreground mt-1">Please upload a clear, color photo of your government-issued identification. (e.g., INE, Passport).</p>
                            <Button className="mt-3">Upload Document</Button>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                            <ScanFace className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Step 2: Liveness Check</h3>
                            <p className="text-muted-foreground mt-1">We'll need to take a short video of your face to confirm you're a real person.</p>
                            <Button className="mt-3">Start Liveness Check</Button>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                            <Landmark className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Step 3: Proof of Address</h3>
                            <p className="text-muted-foreground mt-1">Upload a recent utility bill or bank statement showing your name and address.</p>
                            <Button className="mt-3">Upload Proof of Address</Button>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                    <Button size="lg">Submit for Review</Button>
                </CardFooter>
            </Card>
        </div>
    );
}

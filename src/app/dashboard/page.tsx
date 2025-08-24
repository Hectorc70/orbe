'use client'

import Link from 'next/link';
import { ArrowUpRight, PlusCircle, ArrowDownToDot, Download, TrendingUp, Wallet, RefreshCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { mockTransactions, mockUser } from '@/lib/data';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { CANCELLED_REQUEST } from '@/backend/errors.util';
import { useEffect, useState } from 'react';
import { IUser } from '@/models/userModel';
import ApiService, { getCookie } from '@/backend/userService';
import { lsId, lsToken } from '@/common/constants';
import { showToast } from 'nextjs-toast-notify';
import { useGlobalStore } from '@/stores/useGlobalStore';
import { useRouter } from 'next/navigation';

const USDC_TO_MXN_RATE = 16.50;

export default function DashboardPage() {
  const router = useRouter();
  const { user, isAuthenticated } = useGlobalStore()
  const updateUser = useGlobalStore((state) => state.updateUser)

  const init = async () => {
    try {
      const token = getCookie(lsToken) || '';
      if (token === '' && !isAuthenticated) {
        router.push('/')
      }

      const response = await ApiService.getUser()
      updateUser(response)
    } catch (error) {
      if (error != CANCELLED_REQUEST) {
        showToast.error(error?.toString?.() ?? 'Error desconocido');
      }
    }
    return null;
  }
  useEffect(() => {
    init()
  }, [])
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
    <div className="flex flex-col gap-4 px-4 md:px-6">
      {/* Header Balance Section - Mobile First */}
      <div className="space-y-4">
        <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <Wallet className="h-5 w-5 opacity-90" />
              <span className="text-sm opacity-90">Principal Balance</span>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold">
                ${user && user!.balanceUSDC && user.balanceUSDC.toLocaleString()} USDC
              </div>
              <div className="text-lg opacity-90">
                ${balanceMXN.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} MXN
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Monad Balance - Smaller card */}
        <Card className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm">Monad Balance</span>
              </div>
              <div className="text-xl font-semibold">
                ${user && user!.balanceNative && user?.balanceNative.toLocaleString()}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions - Mobile optimized */}
      <Card className="shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="pb-6">
          <div className="grid grid-cols-3 gap-3">
            <Link href="/dashboard/send" className="block">
              <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
                <div className="p-3 bg-blue-500 rounded-full">
                  <ArrowUpRight className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-medium text-blue-700">Send</span>
              </div>
            </Link>

            <Link href="/dashboard/wallet" className="block">
              <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-green-50 hover:bg-green-100 transition-colors">
                <div className="p-3 bg-green-500 rounded-full">
                  <Download className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-medium text-green-700">Receive</span>
              </div>
            </Link>

            <Link href="/dashboard/swap" className="block">
              <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors">
                <div className="p-3 bg-purple-500 rounded-full">
                  <RefreshCcw className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-medium text-purple-700">Swap</span>
              </div>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Transactions Section - Mobile optimized */}
      <Card className="shadow-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg">Transacctions</CardTitle>
              <CardDescription className="text-sm">Last transactions</CardDescription>
            </div>
            <Link href="/dashboard/transactions">
              <Button variant="ghost" size="sm" className="text-blue-600">
                View all
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent className="px-0">
          {/* Mobile: Card-based layout */}
          <div className="block md:hidden space-y-3 px-6">
            {recentTransactions.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "p-2 rounded-full",
                    tx.type === 'received' || tx.type === 'top-up' ? 'bg-green-100' : 'bg-red-100'
                  )}>
                    <ArrowUpRight className={cn(
                      "h-4 w-4",
                      tx.type === 'received' || tx.type === 'top-up' ? 'text-green-600 rotate-180' : 'text-red-600'
                    )} />
                  </div>
                  <div>
                    <div className="font-medium text-sm capitalize">{tx.type === 'sent' ? 'Enviado' : tx.type === 'received' ? 'Recibido' : 'Recarga'}</div>
                    <div className="text-xs text-gray-500">
                      {tx.type === 'sent' ? `A ${tx.to}` : `De ${tx.from}`}
                    </div>
                    <div className="text-xs text-gray-400">{format(new Date(tx.date), 'MMM d')}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={cn(
                    "font-semibold text-sm",
                    tx.type === 'received' || tx.type === 'top-up' ? 'text-green-600' : 'text-red-600'
                  )}>
                    {tx.type === 'received' || tx.type === 'top-up' ? '+' : '-'}${tx.amountUSDC.toFixed(2)}
                  </div>
                  <Badge
                    variant={getStatusBadgeVariant(tx.status)}
                    className="text-xs mt-1"
                  >
                    {tx.status === 'Completed' ? 'Completado' : tx.status === 'Pending' ? 'Pendiente' : 'Fallido'}
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Table layout */}
          <div className="hidden md:block">
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
          </div>
        </CardContent>
      </Card>
    </div >
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowDownToDot, ArrowRightLeft, History, LayoutDashboard, User, Wallet } from 'lucide-react';
import { Logo } from '@/components/logo';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';
import { UserNav } from '@/components/user-nav';
import { Button } from '@/components/ui/button';

const navItems = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/dashboard/send', icon: ArrowRightLeft, label: 'Send Funds' },
  { href: '/dashboard/withdraw', icon: ArrowDownToDot, label: 'Withdraw Funds' },
  { href: '/dashboard/transactions', icon: History, label: 'Transactions' },
  { href: '/dashboard/wallet', icon: Wallet, label: 'Wallet' },
  { href: '/dashboard/profile', icon: User, label: 'Profile' },
];

function DashboardHeader() {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-card px-4 lg:h-[60px] lg:px-6 sticky top-0 z-30">
        <SidebarTrigger className="md:hidden"/>
        <div className="w-full flex-1">
           <SidebarTrigger className="hidden md:block"/>
        </div>
      <UserNav />
    </header>
  );
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
        <div className="flex min-h-screen">
            <Sidebar side="left" variant="sidebar" collapsible="icon">
                <SidebarHeader className="flex items-center justify-between">
                    <Logo />
                    <div className="md:hidden">
                    <SidebarTrigger />
                    </div>
                </SidebarHeader>
                <SidebarContent>
                    <SidebarMenu>
                    {navItems.map((item) => (
                        <SidebarMenuItem key={item.href}>
                        <Link href={item.href}>
                            <SidebarMenuButton isActive={pathname === item.href} tooltip={item.label}>
                            <item.icon />
                            <span>{item.label}</span>
                            </SidebarMenuButton>
                        </Link>
                        </SidebarMenuItem>
                    ))}
                    </SidebarMenu>
                </SidebarContent>
            </Sidebar>
            <div className='flex-1 flex flex-col'>
                <DashboardHeader />
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-background">
                    {children}
                </main>
            </div>
        </div>
    </SidebarProvider>
  );
}

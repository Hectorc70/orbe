export type User = {
  id: string;
  name: string;
  email: string;
  uniqueId: string;
  balanceUSD: number;
  balanceUSDC: number;
  kycStatus: 'Verified' | 'Pending' | 'Unverified';
};

export type Transaction = {
  id: string;
  type: 'sent' | 'received' | 'top-up';
  amountUSDC: number;
  date: string;
  from: string;
  to: string;
  status: 'Completed' | 'Pending' | 'Failed';
};

export const mockUser: User = {
  id: 'usr_1',
  name: 'Alex Doe',
  email: 'alex.doe@example.com',
  uniqueId: 'alex-doe-123',
  balanceUSD: 1000.00,
  balanceUSDC: 5420.50,
  kycStatus: 'Verified',
};

export const mockTransactions: Transaction[] = [
  {
    id: 'txn_1',
    type: 'received',
    amountUSDC: 250.00,
    date: new Date(new Date().setDate(new Date().getDate() - 1)).toISOString(),
    from: 'Jane Smith',
    to: 'Alex Doe',
    status: 'Completed',
  },
  {
    id: 'txn_2',
    type: 'sent',
    amountUSDC: 100.00,
    date: new Date(new Date().setDate(new Date().getDate() - 2)).toISOString(),
    from: 'Alex Doe',
    to: 'John Appleseed',
    status: 'Completed',
  },
  {
    id: 'txn_3',
    type: 'top-up',
    amountUSDC: 500.00,
    date: new Date(new Date().setDate(new Date().getDate() - 3)).toISOString(),
    from: 'External Wallet',
    to: 'Alex Doe',
    status: 'Completed',
  },
  {
    id: 'txn_4',
    type: 'sent',
    amountUSDC: 75.50,
    date: new Date(new Date().setDate(new Date().getDate() - 4)).toISOString(),
    from: 'Alex Doe',
    to: 'Maria Garcia',
    status: 'Pending',
  },
  {
    id: 'txn_5',
    type: 'received',
    amountUSDC: 1200.00,
    date: new Date(new Date().setDate(new Date().getDate() - 5)).toISOString(),
    from: 'Satoshi Nakamoto',
    to: 'Alex Doe',
    status: 'Completed',
  },
    {
    id: 'txn_6',
    type: 'sent',
    amountUSDC: 300.00,
    date: new Date(new Date().setDate(new Date().getDate() - 6)).toISOString(),
    from: 'Alex Doe',
    to: 'Vitalik Buterin',
    status: 'Failed',
  },
];

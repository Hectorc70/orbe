export interface IUser extends Document {
  id: string;
  username: string;
  email: string;
  password: string;
  walletAddress?: string;
  balanceUSDC?: string;
  balanceNative?: string;
}
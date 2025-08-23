import { ethers } from 'ethers';

/**
 * Generates a new random wallet for Monad Testnet.
 * @returns An object containing the wallet's address, privateKey, and mnemonic phrase.
 */
export function createMonadWallet() {
  try {
    // Generate a new random wallet
    const wallet = ethers.Wallet.createRandom();

    // Return the wallet details
    return {
      address: wallet.address,
      privateKey: wallet.privateKey,
      mnemonic: wallet.mnemonic.phrase,
    };
  } catch (error) {
    console.error('Error creating Monad wallet:', error);
    throw error; // Rethrow the error for handling in the calling code
  }
}

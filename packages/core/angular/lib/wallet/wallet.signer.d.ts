import { MessageSignerWalletAdapter, SignerWalletAdapter } from '@solana/wallet-adapter-base';
import { Transaction } from '@solana/web3.js';
import { Observable, Subject } from 'rxjs';
export declare const signMessage: (adapter: MessageSignerWalletAdapter, connected: boolean, errorSubject: Subject<unknown>) => (message: Uint8Array) => Observable<Uint8Array>;
export declare const signTransaction: (adapter: SignerWalletAdapter, connected: boolean, errorSubject: Subject<unknown>) => (transaction: Transaction) => Observable<Transaction>;
export declare const signAllTransactions: (adapter: SignerWalletAdapter, connected: boolean, errorSubject: Subject<unknown>) => (transactions: Transaction[]) => Observable<Transaction[]>;

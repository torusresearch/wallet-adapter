import { WalletAdapter, WalletAdapterEvents } from '@solana/wallet-adapter-base';
import { Observable } from 'rxjs';
export declare const fromAdapterEvent: <T>(adapter: WalletAdapter, eventName: keyof WalletAdapterEvents) => Observable<T>;

import * as i0 from '@angular/core';
import { InjectionToken, Injectable, Optional, Inject } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Connection } from '@solana/web3.js';
import { map, filter, tap, concatMap, catchError, finalize, withLatestFrom, switchMap, first } from 'rxjs/operators';
import { WalletError, WalletNotConnectedError, WalletNotReadyError } from '@solana/wallet-adapter-base';
import { fromEventPattern, throwError, from, defer, Subject, combineLatest, of, EMPTY } from 'rxjs';

const CONNECTION_CONFIG = new InjectionToken('connectionConfig');

const CONNECTION_DEFAULT_CONFIG = { commitment: 'confirmed' };
class ConnectionStore extends ComponentStore {
    constructor(_config) {
        super();
        this._config = _config;
        this.connection$ = this.state$.pipe(map((state) => state.connection));
        this.setEndpoint = this.updater((state, endpoint) => (Object.assign(Object.assign({}, state), { connection: new Connection(endpoint, this._config) })));
        this._config = Object.assign(Object.assign({}, CONNECTION_DEFAULT_CONFIG), this._config);
        this.setState({ connection: null });
    }
}
ConnectionStore.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: ConnectionStore, deps: [{ token: CONNECTION_CONFIG, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
ConnectionStore.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: ConnectionStore });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: ConnectionStore, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [CONNECTION_CONFIG]
                }] }]; } });

class WalletNotSelectedError extends WalletError {
    constructor() {
        super(...arguments);
        this.name = 'WalletNotSelectedError';
    }
}

const WALLET_CONFIG = new InjectionToken('walletConfig');

const fromAdapterEvent = (adapter, eventName) => fromEventPattern((addHandler) => adapter.on(eventName, addHandler), (removeHandler) => adapter.off(eventName, removeHandler));

const isNotNull = (source) => source.pipe(filter((item) => item !== null));

class LocalStorageService {
    constructor(_key, _defaultValue) {
        this._key = _key;
        this._defaultValue = _defaultValue;
        this._value = this._defaultValue;
    }
    get value() {
        if (this._value)
            return this._value;
        try {
            const value = localStorage.getItem(this._key);
            if (value) {
                this._value = JSON.parse(value);
                return this._value;
            }
        }
        catch (error) {
            console.error(error);
        }
        return this._defaultValue;
    }
    setItem(newValue) {
        if (newValue === this.value)
            return;
        this._value = newValue;
        try {
            if (newValue === null) {
                localStorage.removeItem(this._key);
            }
            else {
                localStorage.setItem(this._key, JSON.stringify(newValue));
            }
        }
        catch (error) {
            console.error(error);
        }
    }
}

const signMessage = (adapter, connected, errorSubject) => {
    return (message) => {
        if (!connected) {
            const error = new WalletNotConnectedError();
            errorSubject.next(error);
            return throwError(error);
        }
        return from(defer(() => adapter.signMessage(message)));
    };
};
const signTransaction = (adapter, connected, errorSubject) => {
    return (transaction) => {
        if (!connected) {
            const error = new WalletNotConnectedError();
            errorSubject.next(error);
            return throwError(error);
        }
        return from(defer(() => adapter.signTransaction(transaction)));
    };
};
const signAllTransactions = (adapter, connected, errorSubject) => {
    return (transactions) => {
        if (!connected) {
            const error = new WalletNotConnectedError();
            errorSubject.next(error);
            return throwError(error);
        }
        return from(defer(() => adapter.signAllTransactions(transactions)));
    };
};

const WALLET_DEFAULT_CONFIG = {
    wallets: [],
    autoConnect: false,
    localStorageKey: 'walletName',
};
const initialState = {
    wallet: null,
    adapter: null,
    ready: false,
    connected: false,
    publicKey: null,
};
class WalletStore extends ComponentStore {
    constructor(_config) {
        var _a, _b, _c;
        super();
        this._config = _config;
        this._error = new Subject();
        this._localStorage = new LocalStorageService(((_a = this._config) === null || _a === void 0 ? void 0 : _a.localStorageKey) || 'walletName', null);
        this.wallets$ = this.select((state) => state.wallets);
        this.autoConnect$ = this.select((state) => state.autoConnect);
        this.wallet$ = this.select((state) => state.wallet);
        this.adapter$ = this.select((state) => state.adapter);
        this.publicKey$ = this.select((state) => state.publicKey);
        this.ready$ = this.select((state) => state.ready);
        this.connecting$ = this.select((state) => state.connecting);
        this.disconnecting$ = this.select((state) => state.disconnecting);
        this.connected$ = this.select((state) => state.connected);
        this.name$ = this.select((state) => state.name);
        this.error$ = this._error.asObservable();
        this.anchorWallet$ = this.select(this.publicKey$, this.adapter$, this.connected$, (publicKey, adapter, connected) => {
            const adapterSignTransaction = adapter && 'signTransaction' in adapter ? signTransaction(adapter, connected, this._error) : undefined;
            const adapterSignAllTransactions = adapter && 'signAllTransactions' in adapter
                ? signAllTransactions(adapter, connected, this._error)
                : undefined;
            return publicKey && adapterSignTransaction && adapterSignAllTransactions
                ? {
                    publicKey,
                    signTransaction: (transaction) => adapterSignTransaction(transaction).toPromise(),
                    signAllTransactions: (transactions) => adapterSignAllTransactions(transactions).toPromise(),
                }
                : undefined;
        }, { debounce: true });
        // Map of wallet names to wallets
        this._walletsByName$ = this.select(this.wallets$, (wallets) => wallets.reduce((walletsByName, wallet) => {
            walletsByName[wallet.name] = wallet;
            return walletsByName;
        }, {}));
        // When the selected wallet changes, initialize the state
        this.onWalletChanged = this.effect(() => combineLatest([this.name$, this._walletsByName$]).pipe(tap(([name, walletsByName]) => {
            const wallet = (name && walletsByName[name]) || null;
            const adapter = wallet && wallet.adapter;
            if (adapter) {
                const { publicKey, connected } = adapter;
                this.patchState({
                    name,
                    adapter,
                    wallet,
                    publicKey,
                    connected,
                    ready: false,
                });
                // FIXME: Asynchronously update the ready state
            }
            else {
                this.patchState(initialState);
            }
        })));
        // If autoConnect is enabled, try to connect when the adapter changes and is ready
        this.autoConnect = this.effect(() => {
            return combineLatest([
                this.autoConnect$,
                this.adapter$.pipe(isNotNull),
                this.ready$,
                this.connecting$,
                this.connected$,
            ]).pipe(filter(([autoConnect, , ready, connecting, connected]) => autoConnect && ready && !connecting && !connected), concatMap(([, adapter]) => {
                this.patchState({ connecting: true });
                return from(defer(() => adapter.connect())).pipe(catchError(() => {
                    // Clear the selected wallet
                    this.patchState({ name: null });
                    // Don't throw error, but onError will still be called
                    return of(null);
                }), finalize(() => this.patchState({ connecting: false })));
            }));
        });
        // Select a wallet by name
        this.selectWallet = this.effect((newName$) => {
            return newName$.pipe(concatMap((action) => of(action).pipe(withLatestFrom(this.name$, this.adapter$))), filter(([newName, name]) => newName !== name), concatMap(([newName, , adapter]) => {
                if (!adapter) {
                    return of(newName);
                }
                else {
                    return from(defer(() => adapter.disconnect())).pipe(map(() => newName));
                }
            }), tap((newName) => {
                this._localStorage.setItem(newName);
                this.patchState({ name: newName });
            }));
        });
        // Handle the adapter's connect event
        this.onConnect = this.effect(() => {
            return this.adapter$.pipe(isNotNull, switchMap((adapter) => fromAdapterEvent(adapter, 'connect').pipe(tap(() => {
                const { connected, publicKey } = adapter;
                this.patchState({
                    connected,
                    publicKey,
                });
            }))));
        });
        // Handle the adapter's disconnect event
        this.onDisconnect = this.effect(() => {
            return this.adapter$.pipe(isNotNull, switchMap((adapter) => fromAdapterEvent(adapter, 'disconnect').pipe(tap(() => this.patchState({ name: null })))));
        });
        // Handle the adapter's error event
        this.onError = this.effect(() => {
            return this.adapter$.pipe(isNotNull, switchMap((adapter) => fromAdapterEvent(adapter, 'error').pipe(tap((error) => this._error.next(error)))));
        });
        this._config = Object.assign(Object.assign({}, WALLET_DEFAULT_CONFIG), this._config);
        this.setState(Object.assign(Object.assign({}, initialState), { wallets: ((_b = this._config) === null || _b === void 0 ? void 0 : _b.wallets) || [], name: this._localStorage.value, connecting: false, disconnecting: false, autoConnect: ((_c = this._config) === null || _c === void 0 ? void 0 : _c.autoConnect) || false }));
    }
    // Connect the adapter to the wallet
    connect() {
        return combineLatest([
            this.connecting$,
            this.disconnecting$,
            this.connected$,
            this.wallet$,
            this.adapter$,
            this.ready$,
        ]).pipe(first(), filter(([connecting, disconnecting, connected]) => !connected && !connecting && !disconnecting), concatMap(([, , , wallet, adapter, ready]) => {
            if (!wallet || !adapter) {
                const error = new WalletNotSelectedError();
                this._error.next(error);
                return throwError(error);
            }
            if (!ready) {
                this.patchState({ name: null });
                if (typeof window !== 'undefined') {
                    window.open(wallet.url, '_blank');
                }
                const error = new WalletNotReadyError();
                this._error.next(error);
                return throwError(error);
            }
            this.patchState({ connecting: true });
            return from(defer(() => adapter.connect())).pipe(catchError((error) => {
                this.patchState({ name: null });
                return throwError(error);
            }), finalize(() => this.patchState({ connecting: false })));
        }));
    }
    // Disconnect the adapter from the wallet
    disconnect() {
        return combineLatest([this.disconnecting$, this.adapter$]).pipe(first(), filter(([disconnecting]) => !disconnecting), concatMap(([, adapter]) => {
            if (!adapter) {
                this.patchState({ name: null });
                return EMPTY;
            }
            else {
                this.patchState({ disconnecting: true });
                return from(defer(() => adapter.disconnect())).pipe(finalize(() => this.patchState({ disconnecting: false, name: null })));
            }
        }));
    }
    // Send a transaction using the provided connection
    sendTransaction(transaction, connection, options) {
        return combineLatest([this.adapter$, this.connected$]).pipe(first(), concatMap(([adapter, connected]) => {
            if (!adapter) {
                const error = new WalletNotSelectedError();
                this._error.next(error);
                return throwError(error);
            }
            if (!connected) {
                const error = new WalletNotConnectedError();
                this._error.next(error);
                return throwError(error);
            }
            return from(defer(() => adapter.sendTransaction(transaction, connection, options)));
        }));
    }
    // Sign a transaction if the wallet supports it
    signTransaction(transaction) {
        const { adapter, connected } = this.get();
        return adapter && 'signTransaction' in adapter
            ? signTransaction(adapter, connected, this._error)(transaction)
            : undefined;
    }
    // Sign multiple transactions if the wallet supports it
    signAllTransactions(transactions) {
        const { adapter, connected } = this.get();
        return adapter && 'signAllTransactions' in adapter
            ? signAllTransactions(adapter, connected, this._error)(transactions)
            : undefined;
    }
    // Sign an arbitrary message if the wallet supports it
    signMessage(message) {
        const { adapter, connected } = this.get();
        return adapter && 'signMessage' in adapter ? signMessage(adapter, connected, this._error)(message) : undefined;
    }
}
WalletStore.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: WalletStore, deps: [{ token: WALLET_CONFIG, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
WalletStore.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: WalletStore });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0, type: WalletStore, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [WALLET_CONFIG]
                }] }]; } });

/**
 * Generated bundle index. Do not edit.
 */

export { CONNECTION_CONFIG, CONNECTION_DEFAULT_CONFIG, ConnectionStore, WALLET_CONFIG, WALLET_DEFAULT_CONFIG, WalletNotSelectedError, WalletStore };
//# sourceMappingURL=solana-wallet-adapter-angular.js.map

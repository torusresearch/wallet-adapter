import { ComponentStore } from '@ngrx/component-store';
import { Connection, ConnectionConfig } from '@solana/web3.js';
import { ConnectionState } from './connection.types';
import * as i0 from "@angular/core";
export declare const CONNECTION_DEFAULT_CONFIG: ConnectionConfig;
export declare class ConnectionStore extends ComponentStore<ConnectionState> {
    private _config;
    connection$: import("rxjs").Observable<Connection | null>;
    constructor(_config: ConnectionConfig);
    readonly setEndpoint: (observableOrValue: string | import("rxjs").Observable<string>) => import("rxjs").Subscription;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConnectionStore, [{ optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ConnectionStore>;
}

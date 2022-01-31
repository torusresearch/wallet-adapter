(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ngrx/component-store'), require('@solana/web3.js'), require('rxjs/operators'), require('@solana/wallet-adapter-base'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@solana/wallet-adapter-angular', ['exports', '@angular/core', '@ngrx/component-store', '@solana/web3.js', 'rxjs/operators', '@solana/wallet-adapter-base', 'rxjs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.solana = global.solana || {}, global.solana["wallet-adapter-angular"] = {}), global.ng.core, global["@ngrx/component-store"], global["@solana/web3"].js, global.rxjs.operators, global["@solana/wallet-adapter-base"], global.rxjs));
})(this, (function (exports, i0, componentStore, web3_js, operators, walletAdapterBase, rxjs) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var CONNECTION_CONFIG = new i0.InjectionToken('connectionConfig');

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var CONNECTION_DEFAULT_CONFIG = { commitment: 'confirmed' };
    var ConnectionStore = /** @class */ (function (_super) {
        __extends(ConnectionStore, _super);
        function ConnectionStore(_config) {
            var _this = _super.call(this) || this;
            _this._config = _config;
            _this.connection$ = _this.state$.pipe(operators.map(function (state) { return state.connection; }));
            _this.setEndpoint = _this.updater(function (state, endpoint) { return (Object.assign(Object.assign({}, state), { connection: new web3_js.Connection(endpoint, _this._config) })); });
            _this._config = Object.assign(Object.assign({}, CONNECTION_DEFAULT_CONFIG), _this._config);
            _this.setState({ connection: null });
            return _this;
        }
        return ConnectionStore;
    }(componentStore.ComponentStore));
    ConnectionStore.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: ConnectionStore, deps: [{ token: CONNECTION_CONFIG, optional: true }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    ConnectionStore.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: ConnectionStore });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: ConnectionStore, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Inject,
                            args: [CONNECTION_CONFIG]
                        }] }];
        } });

    var WalletNotSelectedError = /** @class */ (function (_super) {
        __extends(WalletNotSelectedError, _super);
        function WalletNotSelectedError() {
            var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
            _this.name = 'WalletNotSelectedError';
            return _this;
        }
        return WalletNotSelectedError;
    }(walletAdapterBase.WalletError));

    var WALLET_CONFIG = new i0.InjectionToken('walletConfig');

    var fromAdapterEvent = function (adapter, eventName) { return rxjs.fromEventPattern(function (addHandler) { return adapter.on(eventName, addHandler); }, function (removeHandler) { return adapter.off(eventName, removeHandler); }); };

    var isNotNull = function (source) { return source.pipe(operators.filter(function (item) { return item !== null; })); };

    var LocalStorageService = /** @class */ (function () {
        function LocalStorageService(_key, _defaultValue) {
            this._key = _key;
            this._defaultValue = _defaultValue;
            this._value = this._defaultValue;
        }
        Object.defineProperty(LocalStorageService.prototype, "value", {
            get: function () {
                if (this._value)
                    return this._value;
                try {
                    var value = localStorage.getItem(this._key);
                    if (value) {
                        this._value = JSON.parse(value);
                        return this._value;
                    }
                }
                catch (error) {
                    console.error(error);
                }
                return this._defaultValue;
            },
            enumerable: false,
            configurable: true
        });
        LocalStorageService.prototype.setItem = function (newValue) {
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
        };
        return LocalStorageService;
    }());

    var signMessage = function (adapter, connected, errorSubject) {
        return function (message) {
            if (!connected) {
                var error = new walletAdapterBase.WalletNotConnectedError();
                errorSubject.next(error);
                return rxjs.throwError(error);
            }
            return rxjs.from(rxjs.defer(function () { return adapter.signMessage(message); }));
        };
    };
    var signTransaction = function (adapter, connected, errorSubject) {
        return function (transaction) {
            if (!connected) {
                var error = new walletAdapterBase.WalletNotConnectedError();
                errorSubject.next(error);
                return rxjs.throwError(error);
            }
            return rxjs.from(rxjs.defer(function () { return adapter.signTransaction(transaction); }));
        };
    };
    var signAllTransactions = function (adapter, connected, errorSubject) {
        return function (transactions) {
            if (!connected) {
                var error = new walletAdapterBase.WalletNotConnectedError();
                errorSubject.next(error);
                return rxjs.throwError(error);
            }
            return rxjs.from(rxjs.defer(function () { return adapter.signAllTransactions(transactions); }));
        };
    };

    var WALLET_DEFAULT_CONFIG = {
        wallets: [],
        autoConnect: false,
        localStorageKey: 'walletName',
    };
    var initialState = {
        wallet: null,
        adapter: null,
        ready: false,
        connected: false,
        publicKey: null,
    };
    var WalletStore = /** @class */ (function (_super) {
        __extends(WalletStore, _super);
        function WalletStore(_config) {
            var _this = this;
            var _a, _b, _c;
            _this = _super.call(this) || this;
            _this._config = _config;
            _this._error = new rxjs.Subject();
            _this._localStorage = new LocalStorageService(((_a = _this._config) === null || _a === void 0 ? void 0 : _a.localStorageKey) || 'walletName', null);
            _this.wallets$ = _this.select(function (state) { return state.wallets; });
            _this.autoConnect$ = _this.select(function (state) { return state.autoConnect; });
            _this.wallet$ = _this.select(function (state) { return state.wallet; });
            _this.adapter$ = _this.select(function (state) { return state.adapter; });
            _this.publicKey$ = _this.select(function (state) { return state.publicKey; });
            _this.ready$ = _this.select(function (state) { return state.ready; });
            _this.connecting$ = _this.select(function (state) { return state.connecting; });
            _this.disconnecting$ = _this.select(function (state) { return state.disconnecting; });
            _this.connected$ = _this.select(function (state) { return state.connected; });
            _this.name$ = _this.select(function (state) { return state.name; });
            _this.error$ = _this._error.asObservable();
            _this.anchorWallet$ = _this.select(_this.publicKey$, _this.adapter$, _this.connected$, function (publicKey, adapter, connected) {
                var adapterSignTransaction = adapter && 'signTransaction' in adapter ? signTransaction(adapter, connected, _this._error) : undefined;
                var adapterSignAllTransactions = adapter && 'signAllTransactions' in adapter
                    ? signAllTransactions(adapter, connected, _this._error)
                    : undefined;
                return publicKey && adapterSignTransaction && adapterSignAllTransactions
                    ? {
                        publicKey: publicKey,
                        signTransaction: function (transaction) { return adapterSignTransaction(transaction).toPromise(); },
                        signAllTransactions: function (transactions) { return adapterSignAllTransactions(transactions).toPromise(); },
                    }
                    : undefined;
            }, { debounce: true });
            // Map of wallet names to wallets
            _this._walletsByName$ = _this.select(_this.wallets$, function (wallets) { return wallets.reduce(function (walletsByName, wallet) {
                walletsByName[wallet.name] = wallet;
                return walletsByName;
            }, {}); });
            // When the selected wallet changes, initialize the state
            _this.onWalletChanged = _this.effect(function () { return rxjs.combineLatest([_this.name$, _this._walletsByName$]).pipe(operators.tap(function (_d) {
                var _e = __read(_d, 2), name = _e[0], walletsByName = _e[1];
                var wallet = (name && walletsByName[name]) || null;
                var adapter = wallet && wallet.adapter;
                if (adapter) {
                    var publicKey = adapter.publicKey, connected = adapter.connected;
                    _this.patchState({
                        name: name,
                        adapter: adapter,
                        wallet: wallet,
                        publicKey: publicKey,
                        connected: connected,
                        ready: false,
                    });
                    // FIXME: Asynchronously update the ready state
                }
                else {
                    _this.patchState(initialState);
                }
            })); });
            // If autoConnect is enabled, try to connect when the adapter changes and is ready
            _this.autoConnect = _this.effect(function () {
                return rxjs.combineLatest([
                    _this.autoConnect$,
                    _this.adapter$.pipe(isNotNull),
                    _this.ready$,
                    _this.connecting$,
                    _this.connected$,
                ]).pipe(operators.filter(function (_d) {
                    var _e = __read(_d, 5), autoConnect = _e[0], ready = _e[2], connecting = _e[3], connected = _e[4];
                    return autoConnect && ready && !connecting && !connected;
                }), operators.concatMap(function (_d) {
                    var _e = __read(_d, 2), adapter = _e[1];
                    _this.patchState({ connecting: true });
                    return rxjs.from(rxjs.defer(function () { return adapter.connect(); })).pipe(operators.catchError(function () {
                        // Clear the selected wallet
                        _this.patchState({ name: null });
                        // Don't throw error, but onError will still be called
                        return rxjs.of(null);
                    }), operators.finalize(function () { return _this.patchState({ connecting: false }); }));
                }));
            });
            // Select a wallet by name
            _this.selectWallet = _this.effect(function (newName$) {
                return newName$.pipe(operators.concatMap(function (action) { return rxjs.of(action).pipe(operators.withLatestFrom(_this.name$, _this.adapter$)); }), operators.filter(function (_d) {
                    var _e = __read(_d, 2), newName = _e[0], name = _e[1];
                    return newName !== name;
                }), operators.concatMap(function (_d) {
                    var _e = __read(_d, 3), newName = _e[0], adapter = _e[2];
                    if (!adapter) {
                        return rxjs.of(newName);
                    }
                    else {
                        return rxjs.from(rxjs.defer(function () { return adapter.disconnect(); })).pipe(operators.map(function () { return newName; }));
                    }
                }), operators.tap(function (newName) {
                    _this._localStorage.setItem(newName);
                    _this.patchState({ name: newName });
                }));
            });
            // Handle the adapter's connect event
            _this.onConnect = _this.effect(function () {
                return _this.adapter$.pipe(isNotNull, operators.switchMap(function (adapter) { return fromAdapterEvent(adapter, 'connect').pipe(operators.tap(function () {
                    var connected = adapter.connected, publicKey = adapter.publicKey;
                    _this.patchState({
                        connected: connected,
                        publicKey: publicKey,
                    });
                })); }));
            });
            // Handle the adapter's disconnect event
            _this.onDisconnect = _this.effect(function () {
                return _this.adapter$.pipe(isNotNull, operators.switchMap(function (adapter) { return fromAdapterEvent(adapter, 'disconnect').pipe(operators.tap(function () { return _this.patchState({ name: null }); })); }));
            });
            // Handle the adapter's error event
            _this.onError = _this.effect(function () {
                return _this.adapter$.pipe(isNotNull, operators.switchMap(function (adapter) { return fromAdapterEvent(adapter, 'error').pipe(operators.tap(function (error) { return _this._error.next(error); })); }));
            });
            _this._config = Object.assign(Object.assign({}, WALLET_DEFAULT_CONFIG), _this._config);
            _this.setState(Object.assign(Object.assign({}, initialState), { wallets: ((_b = _this._config) === null || _b === void 0 ? void 0 : _b.wallets) || [], name: _this._localStorage.value, connecting: false, disconnecting: false, autoConnect: ((_c = _this._config) === null || _c === void 0 ? void 0 : _c.autoConnect) || false }));
            return _this;
        }
        // Connect the adapter to the wallet
        WalletStore.prototype.connect = function () {
            var _this = this;
            return rxjs.combineLatest([
                this.connecting$,
                this.disconnecting$,
                this.connected$,
                this.wallet$,
                this.adapter$,
                this.ready$,
            ]).pipe(operators.first(), operators.filter(function (_d) {
                var _e = __read(_d, 3), connecting = _e[0], disconnecting = _e[1], connected = _e[2];
                return !connected && !connecting && !disconnecting;
            }), operators.concatMap(function (_d) {
                var _e = __read(_d, 6), wallet = _e[3], adapter = _e[4], ready = _e[5];
                if (!wallet || !adapter) {
                    var error = new WalletNotSelectedError();
                    _this._error.next(error);
                    return rxjs.throwError(error);
                }
                if (!ready) {
                    _this.patchState({ name: null });
                    if (typeof window !== 'undefined') {
                        window.open(wallet.url, '_blank');
                    }
                    var error = new walletAdapterBase.WalletNotReadyError();
                    _this._error.next(error);
                    return rxjs.throwError(error);
                }
                _this.patchState({ connecting: true });
                return rxjs.from(rxjs.defer(function () { return adapter.connect(); })).pipe(operators.catchError(function (error) {
                    _this.patchState({ name: null });
                    return rxjs.throwError(error);
                }), operators.finalize(function () { return _this.patchState({ connecting: false }); }));
            }));
        };
        // Disconnect the adapter from the wallet
        WalletStore.prototype.disconnect = function () {
            var _this = this;
            return rxjs.combineLatest([this.disconnecting$, this.adapter$]).pipe(operators.first(), operators.filter(function (_d) {
                var _e = __read(_d, 1), disconnecting = _e[0];
                return !disconnecting;
            }), operators.concatMap(function (_d) {
                var _e = __read(_d, 2), adapter = _e[1];
                if (!adapter) {
                    _this.patchState({ name: null });
                    return rxjs.EMPTY;
                }
                else {
                    _this.patchState({ disconnecting: true });
                    return rxjs.from(rxjs.defer(function () { return adapter.disconnect(); })).pipe(operators.finalize(function () { return _this.patchState({ disconnecting: false, name: null }); }));
                }
            }));
        };
        // Send a transaction using the provided connection
        WalletStore.prototype.sendTransaction = function (transaction, connection, options) {
            var _this = this;
            return rxjs.combineLatest([this.adapter$, this.connected$]).pipe(operators.first(), operators.concatMap(function (_d) {
                var _e = __read(_d, 2), adapter = _e[0], connected = _e[1];
                if (!adapter) {
                    var error = new WalletNotSelectedError();
                    _this._error.next(error);
                    return rxjs.throwError(error);
                }
                if (!connected) {
                    var error = new walletAdapterBase.WalletNotConnectedError();
                    _this._error.next(error);
                    return rxjs.throwError(error);
                }
                return rxjs.from(rxjs.defer(function () { return adapter.sendTransaction(transaction, connection, options); }));
            }));
        };
        // Sign a transaction if the wallet supports it
        WalletStore.prototype.signTransaction = function (transaction) {
            var _d = this.get(), adapter = _d.adapter, connected = _d.connected;
            return adapter && 'signTransaction' in adapter
                ? signTransaction(adapter, connected, this._error)(transaction)
                : undefined;
        };
        // Sign multiple transactions if the wallet supports it
        WalletStore.prototype.signAllTransactions = function (transactions) {
            var _d = this.get(), adapter = _d.adapter, connected = _d.connected;
            return adapter && 'signAllTransactions' in adapter
                ? signAllTransactions(adapter, connected, this._error)(transactions)
                : undefined;
        };
        // Sign an arbitrary message if the wallet supports it
        WalletStore.prototype.signMessage = function (message) {
            var _d = this.get(), adapter = _d.adapter, connected = _d.connected;
            return adapter && 'signMessage' in adapter ? signMessage(adapter, connected, this._error)(message) : undefined;
        };
        return WalletStore;
    }(componentStore.ComponentStore));
    WalletStore.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: WalletStore, deps: [{ token: WALLET_CONFIG, optional: true }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    WalletStore.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: WalletStore });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: WalletStore, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Inject,
                            args: [WALLET_CONFIG]
                        }] }];
        } });

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CONNECTION_CONFIG = CONNECTION_CONFIG;
    exports.CONNECTION_DEFAULT_CONFIG = CONNECTION_DEFAULT_CONFIG;
    exports.ConnectionStore = ConnectionStore;
    exports.WALLET_CONFIG = WALLET_CONFIG;
    exports.WALLET_DEFAULT_CONFIG = WALLET_DEFAULT_CONFIG;
    exports.WalletNotSelectedError = WalletNotSelectedError;
    exports.WalletStore = WalletStore;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=solana-wallet-adapter-angular.umd.js.map

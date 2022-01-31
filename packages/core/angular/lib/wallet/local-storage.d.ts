export declare class LocalStorageService<T> {
    private _key;
    private _defaultValue;
    private _value;
    constructor(_key: string, _defaultValue: T);
    get value(): T;
    setItem(newValue: T): void;
}

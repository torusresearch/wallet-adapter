import { Inject, Injectable, Optional } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Connection } from '@solana/web3.js';
import { map } from 'rxjs/operators';
import { CONNECTION_CONFIG } from './connection.tokens';
import * as i0 from "@angular/core";
export const CONNECTION_DEFAULT_CONFIG = { commitment: 'confirmed' };
export class ConnectionStore extends ComponentStore {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdGlvbi5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb25uZWN0aW9uL2Nvbm5lY3Rpb24uc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsVUFBVSxFQUFvQixNQUFNLGlCQUFpQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFHeEQsTUFBTSxDQUFDLE1BQU0seUJBQXlCLEdBQXFCLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxDQUFDO0FBR3ZGLE1BQU0sT0FBTyxlQUFnQixTQUFRLGNBQStCO0lBR2hFLFlBR1ksT0FBeUI7UUFFakMsS0FBSyxFQUFFLENBQUM7UUFGQSxZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUxyQyxnQkFBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFpQnhELGdCQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxRQUFnQixFQUFFLEVBQUUsQ0FBQyxpQ0FDMUQsS0FBSyxLQUNSLFVBQVUsRUFBRSxJQUFJLFVBQVUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUNwRCxDQUFDLENBQUM7UUFYQSxJQUFJLENBQUMsT0FBTyxtQ0FDTCx5QkFBeUIsR0FDekIsSUFBSSxDQUFDLE9BQU8sQ0FDbEIsQ0FBQztRQUVGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs2R0FoQlEsZUFBZSxrQkFLWixpQkFBaUI7aUhBTHBCLGVBQWU7NEZBQWYsZUFBZTtrQkFEM0IsVUFBVTs7MEJBS0YsUUFBUTs7MEJBQ1IsTUFBTTsyQkFBQyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnRTdG9yZSB9IGZyb20gJ0BuZ3J4L2NvbXBvbmVudC1zdG9yZSc7XG5pbXBvcnQgeyBDb25uZWN0aW9uLCBDb25uZWN0aW9uQ29uZmlnIH0gZnJvbSAnQHNvbGFuYS93ZWIzLmpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQ09OTkVDVElPTl9DT05GSUcgfSBmcm9tICcuL2Nvbm5lY3Rpb24udG9rZW5zJztcbmltcG9ydCB7IENvbm5lY3Rpb25TdGF0ZSB9IGZyb20gJy4vY29ubmVjdGlvbi50eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBDT05ORUNUSU9OX0RFRkFVTFRfQ09ORklHOiBDb25uZWN0aW9uQ29uZmlnID0geyBjb21taXRtZW50OiAnY29uZmlybWVkJyB9O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29ubmVjdGlvblN0b3JlIGV4dGVuZHMgQ29tcG9uZW50U3RvcmU8Q29ubmVjdGlvblN0YXRlPiB7XG4gICAgY29ubmVjdGlvbiQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcCgoc3RhdGUpID0+IHN0YXRlLmNvbm5lY3Rpb24pKTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBAT3B0aW9uYWwoKVxuICAgICAgICBASW5qZWN0KENPTk5FQ1RJT05fQ09ORklHKVxuICAgICAgICBwcml2YXRlIF9jb25maWc6IENvbm5lY3Rpb25Db25maWdcbiAgICApIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLl9jb25maWcgPSB7XG4gICAgICAgICAgICAuLi5DT05ORUNUSU9OX0RFRkFVTFRfQ09ORklHLFxuICAgICAgICAgICAgLi4udGhpcy5fY29uZmlnLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb25uZWN0aW9uOiBudWxsIH0pO1xuICAgIH1cblxuICAgIHJlYWRvbmx5IHNldEVuZHBvaW50ID0gdGhpcy51cGRhdGVyKChzdGF0ZSwgZW5kcG9pbnQ6IHN0cmluZykgPT4gKHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNvbm5lY3Rpb246IG5ldyBDb25uZWN0aW9uKGVuZHBvaW50LCB0aGlzLl9jb25maWcpLFxuICAgIH0pKTtcbn1cbiJdfQ==
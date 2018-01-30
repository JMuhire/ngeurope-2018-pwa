import {Injectable} from '@angular/core';
import {SwPush} from '@angular/service-worker';
import {Observable} from 'rxjs/Observable';
import {ApiService} from './base/api.service';
import {of} from 'rxjs/observable/of';
import {fromPromise} from 'rxjs/observable/fromPromise';

@Injectable()
export class PushNotificationService {
    private _pushSubscription: PushSubscription;

    constructor(private _swPush: SwPush, private _apiService: ApiService) {
    }

    public register(): void {
        if (!this._swPush.isEnabled) {
            console.log('Push: ', this._swPush.isEnabled);
            return;
        }

        // Key generation: https://web-push-codelab.glitch.me/
        // TODO
    }

    public unregister(): Observable<boolean> {
        if (this._pushSubscription) {
            return fromPromise(this._pushSubscription.unsubscribe());
        }

        return of(true);
    }
}

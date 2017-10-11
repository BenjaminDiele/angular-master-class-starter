import { Injectable, OnInit } from '@angular/core';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subject } from 'rxjs/Subject';

interface EventBusArgs {
    type: string;
    data: any;
}

@Injectable()
export class EventBusService implements OnInit {

    private _messages$ : Subject<EventBusArgs> = new Subject<EventBusArgs>();

    public ngOnInit(): void {
        //throw new Error('Not implemented yet.');
    }

    public emit(eventType: string, data: any)
    {
        this._messages$.next({ type: eventType, data: data});
    }

    public observe(eventType: string) : Observable<any>
    {
        return this._messages$
            .filter(args => args.type === eventType)
            .map(args => args.data);
    }
}
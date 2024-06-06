import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  private _idProductEventEmitter: EventEmitter<number> = new EventEmitter();


  constructor() { }

  get IdProductEventEmitter() {
    return this._idProductEventEmitter;
  }
}

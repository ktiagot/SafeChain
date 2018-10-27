import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LojistaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LojistaProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LojistaProvider Provider');
  }

}

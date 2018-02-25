import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { Currency } from "../models/Currency";

// import { map} from "rxjs/operators";
import "rxjs/add/operator/map"
import "rxjs/add/operator/catch"

import { Response } from '@angular/http/';


@Injectable()
export class CryptoService {
  
  private api: string = ' https://api.coinmarketcap.com/v1/';

  constructor(private httpClient: HttpClient, private httpHeaders: HttpHeaders) { 

  }
  /**
   * Wow, this was tricky !!!
   */
  ticker(): Observable<Currency[]> {
    return this.httpClient.get(this.api+'ticker')
      .map((response: Response) => response.json())
        .catch((error:any)=> Observable.throw(error.json().error || 'Server Error'));
  }

}

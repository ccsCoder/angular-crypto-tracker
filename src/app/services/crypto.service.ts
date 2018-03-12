import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { Currency } from "../models/Currency";
import { Asset } from "../models/Assets";

import "rxjs/add/operator/map"
import "rxjs/add/operator/catch"

import { Response } from '@angular/http/';
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class CryptoService {
  
  private api: string = ' https://rest.coinapi.io/v1/';
  private headers = {
    headers: new HttpHeaders({
      'X-CoinAPI-Key':'28518345-4619-48C0-A6D8-84C804A281A3',
      'Accept' : 'application/json'

    })
  };

  constructor(private httpClient: HttpClient) { 

  }
  /**
   * Wow, this was tricky !!!
   */
  getAllAssets(): Observable<Asset[]> {
    return this.httpClient.get<Asset[]>(this.api+'assets', this.headers);
  }

}

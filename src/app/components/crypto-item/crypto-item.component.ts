import { Component, OnInit } from '@angular/core';
import { Currency } from '../../models/Currency';
import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-crypto-item',
  templateUrl: './crypto-item.component.html',
  styleUrls: ['./crypto-item.component.css']
})
export class CryptoItemComponent implements OnInit {

  constructor(private cryptoService: CryptoService) { }

  currencies : Currency[];


  ngOnInit() {
    this.getCurrencies();
  }

  public getCurrencies(): void {
    this.cryptoService.ticker().subscribe(jsonData=>{
      return new Currency().fromJson(jsonData);
    });
  }

}

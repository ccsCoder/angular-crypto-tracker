import { Component, OnInit, Input } from '@angular/core';
import { Asset } from '../../models/Assets';
import { ActivatedRoute } from '@angular/router';
import { Currency } from "../../models/Currency";

@Component({
  selector: 'app-crypto-details',
  templateUrl: './crypto-details.component.html',
  styleUrls: ['./crypto-details.component.css']
})
export class CryptoDetailsComponent implements OnInit {

  cryptoDetail: Currency;
  
  constructor(private route: ActivatedRoute) { }

  
    
  ngOnInit() {
    this.getCurrency();
  }

  getCurrency(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.cryptoDetail = new Currency (id, id, 6000);
    
      
  }

}

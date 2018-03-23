import { Component, OnInit } from '@angular/core';
import { Asset } from '../../models/Assets';
import { CryptoService } from '../../services/crypto.service';
import { CryptoList } from "../../models/ApplicableCryptos";

@Component({
  selector: 'app-crypto-item',
  templateUrl: './crypto-item.component.html',
  styleUrls: ['./crypto-item.component.css']
})
export class CryptoItemComponent implements OnInit {

  constructor(private cryptoService: CryptoService) { }

  assets : Asset[];

  ngOnInit() {
    this.getCurrencies();
  }

  public onSelectCrypto(asset): void {
    // this.showDetails = !this.showDetails;
    // console.log(this.showDetails);
  }

  public getCurrencies(): void {
    this.cryptoService.getAllAssets().subscribe(assetData=> {
      this.assets =[];

      assetData.map(asset_datum => { 
        let tempAsset = new Asset(asset_datum);
        if(tempAsset.isCrypto && CryptoList.getCryptoList().indexOf(tempAsset.symbol) > -1) {
          this.assets.push (tempAsset);
          
        }
      });
    });
  }

}

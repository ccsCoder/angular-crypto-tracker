import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CryptoService } from './services/crypto.service';
import { CryptoItemComponent } from './components/crypto-item/crypto-item.component';


@NgModule({
  declarations: [
    AppComponent,
    CryptoItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CryptoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
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
    BrowserModule,
    HttpModule,
    HttpClientModule
    
  ],
  providers: [CryptoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CryptoService } from './services/crypto.service';
import { CryptoItemComponent } from './components/crypto-item/crypto-item.component';
import { CryptoDetailsComponent } from './components/crypto-details/crypto-details.component';
import { AppRoutingModule } from './/app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    CryptoItemComponent,
    CryptoDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [CryptoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

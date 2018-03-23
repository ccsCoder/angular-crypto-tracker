import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CryptoItemComponent } from './components/crypto-item/crypto-item.component';
import { CryptoDetailsComponent } from "./components/crypto-details/crypto-details.component";

const routes: Routes = [

  { path: '', redirectTo: '/cryptolist', pathMatch:'full'},
  { path:'cryptolist', component: CryptoItemComponent },
  { path: 'currdetails/:id', component: CryptoDetailsComponent, outlet: 'currency-details-outlet' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

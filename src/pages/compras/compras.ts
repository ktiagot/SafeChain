import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EstandePage } from '../estande/estande';
@Component({
  selector: 'page-compras',
  templateUrl: 'compras.html'
})
export class ComprasPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }

  goToEstande(id){
    if (!id) id = {};
    this.navCtrl.push(EstandePage);
  }
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-pr-ximos-eventos',
  templateUrl: 'pr-ximos-eventos.html'
})
export class PrXimosEventosPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
}

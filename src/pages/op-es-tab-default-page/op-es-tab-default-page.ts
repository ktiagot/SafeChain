import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-op-es-tab-default-page',
  templateUrl: 'op-es-tab-default-page.html'
})
export class OpEsTabDefaultPagePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  
}

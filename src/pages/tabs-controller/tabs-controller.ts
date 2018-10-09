import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ComprarPage } from '../comprar/comprar';
import { PrXimosEventosPage } from '../pr-ximos-eventos/pr-ximos-eventos';
import { OpEsTabDefaultPagePage } from '../op-es-tab-default-page/op-es-tab-default-page';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = ComprarPage;
  tab3Root: any = PrXimosEventosPage;
  tab4Root: any = OpEsTabDefaultPagePage;
  tab5Root: any = LoginPage;
  constructor(public navCtrl: NavController) {
  }
  
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import { ProdutosPage } from '../produtos/produtos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController) {
    this.navCtrl.setRoot(TabsControllerPage);
  }
  goToProdutos(params){
    if (!params) params = {};
    this.navCtrl.push(ProdutosPage);
  }
  
}
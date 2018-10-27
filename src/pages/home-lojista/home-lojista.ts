import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutosPage } from '../produtos/produtos';
import { TabsControllerLojistaPage } from '../tabs-controller-lojista/tabs-controller-lojista';

/**
 * Generated class for the HomeLojistaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-lojista',
  templateUrl: 'home-lojista.html',
})
export class HomeLojistaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.navCtrl.setRoot(TabsControllerLojistaPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeLojistaPage');
  }
  goToProdutos(params){
    if (!params) params = {};
    this.navCtrl.push(ProdutosPage);
  }
}

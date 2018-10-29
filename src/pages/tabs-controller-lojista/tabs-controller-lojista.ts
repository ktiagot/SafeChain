import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the TabsControllerLojistaPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs-controller-lojista',
  templateUrl: 'tabs-controller-lojista.html'
})
export class TabsControllerLojistaPage {

  homeRoot = 'HomePage'
  operacoesRoot = 'OperacoesPage'
  produtosRoot = 'ProdutosPage'
  opcoesRoot = 'OpcoesPage'


  constructor(public navCtrl: NavController) {}

}

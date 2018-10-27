import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the TabsControllerOrganizadorPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs-controller-organizador',
  templateUrl: 'tabs-controller-organizador.html'
})
export class TabsControllerOrganizadorPage {

  homeRoot = 'HomePage'
  operacoesRoot = 'OperacoesPage'
  eventosRoot = 'EventosPage'
  opcoesRoot = 'OpcoesPage'


  constructor(public navCtrl: NavController) {}

}

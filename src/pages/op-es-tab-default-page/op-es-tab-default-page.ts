import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { OrganizadorLista, OrganizadorProvider } from '../../providers/organizador/organizador';

@Component({
  selector: 'page-op-es-tab-default-page',
  templateUrl: 'op-es-tab-default-page.html'
})
export class OpEsTabDefaultPagePage {
  organizador: OrganizadorLista[];
  constructor(public navCtrl: NavController, private organizadorProvider: OrganizadorProvider, private toast: ToastController) {
  }
  
  ionViewDidEnter() {
    this.organizadorProvider.getAll()
    .then(results => {
      this.organizador = results; 

    })
  }

}

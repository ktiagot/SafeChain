import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-opcoes',
  templateUrl: 'opcoes.html',
})
export class OpcoesPage {
  
  constructor(public navCtrl: NavController) {
     
  }
  
  editCliente(cliente: any)
  {
    this.navCtrl.push('EditarClientePage', { cliente: cliente })
  }
  


  
}

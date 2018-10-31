import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ClienteProvider } from '../../providers/cliente/cliente';
import { Observable } from 'rxjs';
import { EditarClientePage } from '../editar-cliente/editar-cliente';


@IonicPage()
@Component({
  selector: 'page-opcoes',
  templateUrl: 'opcoes.html',
})
export class OpcoesPage {
  clientes: Observable<any>;
  constructor(public navCtrl: NavController, private provider: ClienteProvider) {
     this.clientes = this.provider.getAll();
  }
  
  editCliente(cliente: any)
  {
    this.navCtrl.push(EditarClientePage, { cliente: cliente })
  }
  


  
}

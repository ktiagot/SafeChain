import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { EstandePage } from '../estande/estande';
import { ProdutosPage } from '../produtos/produtos';
import { HomePage } from '../home/home';
import { OpcoesPage } from '../opcoes/opcoes';
import { EventosPage } from '../eventos/eventos';
@Component({
  selector: 'page-compras',
  templateUrl: 'compras.html'
})
export class ComprasPage {
  constructor(public navCtrl: NavController, private menuCtrl: MenuController) {
  }
  openMenu() {
    this.menuCtrl.open();
  }
  closeMenu()
  {
    this.menuCtrl.close();
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }
  goToOpcoes(params){
    if (!params) params = {};
    this.navCtrl.push(OpcoesPage);
  }
  goToEventos(params){
    if (!params) params = {};
    this.navCtrl.push(EventosPage);
  }
  goToEstande(id){
    if (!id) id = {};
    this.navCtrl.push(EstandePage);
  }
  
}

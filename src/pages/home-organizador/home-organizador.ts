import { Component } from '@angular/core';
import { NavController, ToastController, MenuController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { ProdutosPage } from '../produtos/produtos';
import { OperacoesPage } from '../operacoes/operacoes';
import { EventosPage } from '../eventos/eventos';
import { OpcoesPage } from '../opcoes/opcoes';


@Component({
  selector: 'page-home-organizador',
  templateUrl: 'home-organizador.html'
})
export class HomeOrganizadorPage {

  items;
  
  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth,
    private afDb: AngularFireDatabase, private toast: ToastController, private menuCtrl: MenuController) {
      
      
  }
  openMenu() {
    this.menuCtrl.open();
  }
  closeMenu()
  {
    this.menuCtrl.close();
  }

  ionViewDidLoad(){
    //Validação do cadastro com mensagem de boas vindas
    this.afAuth.authState.take(1).subscribe(data => {
      if (data && data.email && data.uid)
      {
        
      }
      else
      {
        this.toast.create({
          message: 'Não foi possível realizar o cadastro, tente novamente mais tarde!',
          duration: 3000
        }).present();
      }
    }) 
  }
  goToProdutos(params){
    if (!params) params = {};
    this.navCtrl.push(ProdutosPage);
  }
  goToOperacoes(params){
    if (!params) params = {};
    this.navCtrl.push(OperacoesPage);
  }
  goToEventos(params){
    if (!params) params = {};
    this.navCtrl.push(EventosPage);
  }
  goToOpcoes(params){
    if (!params) params = {};
    this.navCtrl.push(OpcoesPage);
  }

  
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, MenuController } from 'ionic-angular';
import { ProdutosPage } from '../produtos/produtos';
import { AngularFireAuth } from 'angularfire2/auth';
import { OpcoesPage } from '../opcoes/opcoes';
import { EventosPage } from '../eventos/eventos';
import { OperacoesPage } from '../operacoes/operacoes';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private afAuth: AngularFireAuth, private toast: ToastController, private menuCtrl: MenuController) {
    
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

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ProdutosPage } from '../produtos/produtos';
import { TabsControllerLojistaPage } from '../tabs-controller-lojista/tabs-controller-lojista';
import { AngularFireAuth } from 'angularfire2/auth';

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
    private afAuth: AngularFireAuth, private toast: ToastController) {
    this.navCtrl.setRoot(TabsControllerLojistaPage);
  }

  ionViewDidLoad(){
    //Validação do cadastro com mensagem de boas vindas
    this.afAuth.authState.take(1).subscribe(data => {
      if (data && data.email && data.uid)
      {
        this.toast.create({
          message: `Bem vindo ao SafeChain!`,
          duration: 2000
        }).present();
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
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { PerfilLojista } from '../../models/lojista';

/**
 * Generated class for the CadastroLojistaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-lojista',
  templateUrl: 'cadastro-lojista.html',
})
export class CadastroLojistaPage {
  cliente = {} as PerfilLojista;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase) {
  }

  cadastraCliente(){
    this.afAuth.authState.take(1).subscribe(auth => {
      this.afDatabase.object(`PerfilCliente/${auth.uid}`).set(this.cliente)
      .then(() => {this.navCtrl.setRoot(HomePage)});
    })
  };

  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }
}

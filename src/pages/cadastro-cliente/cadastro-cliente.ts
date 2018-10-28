import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilCliente } from '../../models/participante';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

/**
 * Generated class for the CadastroClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-cliente',
  templateUrl: 'cadastro-cliente.html',
})
export class CadastroClientePage {
  cliente = {} as PerfilCliente;
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

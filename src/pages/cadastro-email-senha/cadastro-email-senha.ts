import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, IonicPage } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { CadastroPage } from '../cadastro/cadastro';
import { HomeOrganizadorPage } from '../home-organizador/home-organizador';
import { CadastroParticipantePage } from '../cadastro-participante/cadastro-participante';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { CadastroOrganizadorPage } from '../cadastro-organizador/cadastro-organizador';
/**
 * Generated class for the CadastroEmailSenhaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-email-senha',
  templateUrl: 'cadastro-email-senha.html',
})
export class CadastroEmailSenhaPage {
  user = { } as User;
  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth) {
  }
  async register(user: User){
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(result);
      if(result){
        this.navCtrl.setRoot(CadastroPage);
      }
    }
    catch(e){
      console.log(e);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroEmailSenhaPage');
  }

}

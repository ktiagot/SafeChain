import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { CadastroPage } from '../cadastro/cadastro';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { PerfilParticipante } from '../../models/participante';

@Component({
  selector: 'page-cadastro-participante',
  templateUrl: 'cadastro-participante.html'
})
export class CadastroParticipantePage {
  participante = {} as PerfilParticipante;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase) {
  }

  cadastraOrganizador(){
    this.afAuth.authState.take(1).subscribe(auth => {
      this.afDatabase.object(`PerfilOrganizador/${auth.uid}`).set(this.participante)
      .then(() => {this.navCtrl.setRoot(HomePage)});
    })
  };

  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }
  goToCadastro(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroPage);
  }
  goToCadastroParticipante(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroParticipantePage);
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }
}

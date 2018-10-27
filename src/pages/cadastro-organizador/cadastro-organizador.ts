import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { CadastroPage } from '../cadastro/cadastro';
import { HomeOrganizadorPage } from '../home-organizador/home-organizador';
import { CadastroParticipantePage } from '../cadastro-participante/cadastro-participante';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { PerfilOrganizador } from '../../models/organizador';
import { TabsControllerOrganizadorPage } from '../tabs-controller-organizador/tabs-controller-organizador';

@Component({
  selector: 'page-cadastro-organizador',
  templateUrl: 'cadastro-organizador.html'
})
export class CadastroOrganizadorPage {
  organizador = {} as PerfilOrganizador;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase) {

  }

  cadastraOrganizador(){
    this.afAuth.authState.take(1).subscribe(auth => {
      this.afDatabase.object(`PerfilOrganizador/${auth.uid}`).set(this.organizador)
      .then(() => {this.navCtrl.push(HomeOrganizadorPage);});
    })
  };


  goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToCadastro(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroPage);
  }goToCadastroParticipante(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroParticipantePage);
  }goToCadastroOrganizador(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroOrganizadorPage);
  }goToHomeOrganizador(params){
    if (!params) params = {};
    this.navCtrl.push(HomeOrganizadorPage);
  }

  
}
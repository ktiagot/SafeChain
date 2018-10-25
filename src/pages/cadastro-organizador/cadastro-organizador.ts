import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { CadastroPage } from '../cadastro/cadastro';
import { HomeOrganizadorPage } from '../home-organizador/home-organizador';
import { CadastroParticipantePage } from '../cadastro-participante/cadastro-participante';
import { PerfilOrganizador } from '../../models/organizador';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-cadastro-organizador',
  templateUrl: 'cadastro-organizador.html'
})
export class CadastroOrganizadorPage {
  organizador = {} as Organizador;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, afDatabase: AngularFireDatabase) {

  }

  cadastraOrganizador(){}; //Finalizar https://www.youtube.com/watch?v=uESqBwFVf1Q 3:50


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

export class Organizador {
  id: number;
  password: string;
  email: string;
  name: string;
  
}
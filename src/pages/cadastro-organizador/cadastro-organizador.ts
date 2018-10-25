import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { CadastroPage } from '../cadastro/cadastro';
import { HomeOrganizadorPage } from '../home-organizador/home-organizador';
import { CadastroParticipantePage } from '../cadastro-participante/cadastro-participante';
import { User } from '../../models/user';
import { PerfilOrganizador } from '../../models/organizador';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-cadastro-organizador',
  templateUrl: 'cadastro-organizador.html'
})
export class CadastroOrganizadorPage {
  afDatabase: AngularFireDatabase;
  user = { } as User;
  organizador = { } as PerfilOrganizador;
  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, afDatabase: AngularFireDatabase) {
  }

  async cadastraOrganizador(user: User, organizador: Organizador, afDatabase: AngularFireDatabase)
  {
    try
    {
      const emailPassSuccess = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(emailPassSuccess);
        this.afAuth.authState.take(1).subscribe(auth => {
        this.afDatabase.list(`organizador/${auth.uid}`).push(this.organizador).then(() => this.navCtrl.push(HomeOrganizadorPage)) 
        })      
    }
    catch (e) 
    {
      console.log(e);
    }
  }


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
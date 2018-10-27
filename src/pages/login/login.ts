import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { CadastroParticipantePage } from '../cadastro-participante/cadastro-participante';
import { HomePage } from '../home/home';
import { CadastroOrganizadorPage } from '../cadastro-organizador/cadastro-organizador';
import { User } from '../../models/user';
import { CadastroEmailSenhaPage } from '../cadastro-email-senha/cadastro-email-senha';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
  user = {} as User
  PATH = '/PerfilOrganizador';

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController,
    private afAuth: AngularFireAuth, public afDb: AngularFireDatabase) {
    
  }
    
   async login(user: User, key: string)
  {
    try
    {
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)      
      this.navCtrl.push(HomePage);
    }
    catch(e)
    {
      this.toast.create(e);
    }
    
  }
  
  goToCadastroEmailSenha(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroEmailSenhaPage);
  }
  goToCadastro(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroPage);
  }
  goToCadastroParticipante(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroParticipantePage);
  }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }
  goToCadastroOrganizador(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroOrganizadorPage);
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { HomePage } from '../home/home';
import { CadastroOrganizadorPage } from '../cadastro-organizador/cadastro-organizador';
import { User } from '../../models/user';
import { CadastroEmailSenhaPage } from '../cadastro-email-senha/cadastro-email-senha';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';
import { HomeLojistaPage } from '../home-lojista/home-lojista';
import { HomeOrganizadorPage } from '../home-organizador/home-organizador';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
  user = {} as User
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController,
    private afAuth: AngularFireAuth, public afDb: AngularFireDatabase) {
    
  }

   async login(user: User)
  {
    try
    {
      this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)      
      this.navCtrl.push(HomePage);
      
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          var email = user.email;
          var uid = user.uid;
          console.log(email);
          console.log(uid);
          // ...
        } else {
          // User is signed out.
          // ...
        }
      });
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
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }
  goToHomeLojista(params){
    if (!params) params = {};
    this.navCtrl.push(HomeLojistaPage);
  }
  goToHomeOrganizador(params){
    if (!params) params = {};
    this.navCtrl.push(HomeOrganizadorPage);
  }
  goToCadastroOrganizador(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroOrganizadorPage);
  }
}

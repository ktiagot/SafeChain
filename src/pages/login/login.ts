import { UsersProvider } from './../../providers/users/users';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { CadastroParticipantePage } from '../cadastro-participante/cadastro-participante';
import { HomePage } from '../home/home';
import { CadastroOrganizadorPage } from '../cadastro-organizador/cadastro-organizador';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  model: User;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private toast: ToastController, private userProvider: UsersProvider) {
    this.model = new User();
    this.model.email = 'hhornos';
    this.model.password = 'teste1010';
  }

  login() {
    this.userProvider.loginAccount(this.model.email, this.model.password)
    .then((result: any) => {
      this.toast.create({ message: 'Usuário logado com sucesso. Token: ' +
      result.token, position: 'botton', duration: 3000 }).present();

        //Salvar o token no Ionic Storage para usar em futuras requisições.
        //Redirecionar o usuario para outra tela usando o navCtrl
        //this.navCtrl.pop();
        //this.navCtrl.setRoot()
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao efetuar login. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }
  goToCadastro(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroPage);
  }goToCadastroParticipante(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroParticipantePage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }goToCadastroOrganizador(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroOrganizadorPage);
  }
}

export class User {
  email: string;
  password: string;
}

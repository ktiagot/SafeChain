import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { CadastroOrganizadorPage } from '../cadastro-organizador/cadastro-organizador';
import { CadastroClientePage } from '../cadastro-cliente/cadastro-cliente';
import { CadastroLojistaPage } from '../cadastro-lojista/cadastro-lojista';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html'
})
export class CadastroPage {
  constructor(public navCtrl: NavController) {
  }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }
  goToCadastro(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroPage);
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }
  goToCadastroOrganizador(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroOrganizadorPage);
  }
  goToCadastroCliente(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroClientePage);
  }
  goToCadastroLojista(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroLojistaPage);
  }
}

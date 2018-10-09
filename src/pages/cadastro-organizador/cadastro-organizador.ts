import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { CadastroPage } from '../cadastro/cadastro';
import { CadastroParticipantePage } from '../cadastro-participante/cadastro-participante';

@Component({
  selector: 'page-cadastro-organizador',
  templateUrl: 'cadastro-organizador.html'
})
export class CadastroOrganizadorPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  cadastraOrganizador(form)
  {
    console.log(form);
  }

/*  cadastraOrganizador(){
    this.nome = this.navParams.get("nomeFantasia");
    console.log(this.nome);
  }*/
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
  }
}

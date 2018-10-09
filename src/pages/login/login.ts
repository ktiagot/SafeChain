import { Component, ViewChild  } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { CadastroParticipantePage } from '../cadastro-participante/cadastro-participante';
import { HomePage } from '../home/home';
import { CadastroOrganizadorPage } from '../cadastro-organizador/cadastro-organizador';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController, public httpClient: HttpClient) {
  }
  public username;
  public password;

  sendPostRequest() {
    console.log(this.username);
    console.log(this.password);
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type":  "application/json"
      })
    }
    let postData = {
      "username": "hhornos",
      "password": "teste1010"
    }

    this.httpClient.post("http://smdev.smartpay.technology/v1/api-token-auth/", postData, httpOptions)
    .subscribe(data => {
      console.log(data['body']);
    }, error => {
    console.log(error);
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

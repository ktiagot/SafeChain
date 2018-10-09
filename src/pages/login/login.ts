import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { CadastroParticipantePage } from '../cadastro-participante/cadastro-participante';
import { HomePage } from '../home/home';
import { CadastroOrganizadorPage } from '../cadastro-organizador/cadastro-organizador';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  apiRoot: string = "http://api-evt.hhornos.com";
  constructor(public navCtrl: NavController, public httpClient: HttpClient) {}
  sendPostRequest() {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type":  "application/json"
      })
    }
    let postData = {
      "username": "eventcoin",
      "password": "@eventcoin2018"
    }
    try
    {
      this.httpClient.post(this.apiRoot+"/api-token-auth/", postData, httpOptions)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
    }
    
    catch(ex) {
      console.log = ex.Message();
    };
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

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { CadastroPage } from '../cadastro/cadastro';
import { CadastroOrganizadorPage } from '../cadastro-organizador/cadastro-organizador';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-cadastro-participante',
  templateUrl: 'cadastro-participante.html'
})
export class CadastroParticipantePage {
  /* Com base no mesmo método criado na tela de Login.html, Login.ts 
  e no método login do arquivo users.ts que está dentro da pasta src/providers, precisamos
  criar a estrutura para pegar os dados do formulário quando o usuário clicar em
  cadastrar, e passar para os métodos responsáveis e enviar para a API
  
  O problema é: nesta API, quando "criamos" o usuário, primeiramente ele deve cadastrar 
  somente o email e a senha, depois o restante das informações, então pela lógica
  teriam que ser dois métodos, ou de alguma outra maneira em um só, o que funcionar,
  pois em um endpoint está login e senha e em outro estão o restante das informações 
  (consultar documentação do drive para acessar os endpoits)*/

  constructor(public navCtrl: NavController) {
  }

  cadastraParticipante(){
    
  }

  goToLogin(params){
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
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }
}

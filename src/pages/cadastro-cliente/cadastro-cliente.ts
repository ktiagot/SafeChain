import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilCliente } from '../../models/participante';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { FirebaseDatabase } from 'angularfire2';
import firebase from 'firebase';

/**
 * Generated class for the CadastroClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-cliente',
  templateUrl: 'cadastro-cliente.html',
})
export class CadastroClientePage {
  cliente = {} as PerfilCliente;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase) {
  }

  cadastraCliente(){
    this.afAuth.authState.take(1).subscribe(auth => {
      this.afDatabase.object(`PerfilCliente/${auth.uid}`).set(this.cliente)
      .then(() => {this.navCtrl.setRoot(HomePage)});
      
      const nome = firebase.database().ref('PerfilCliente/' + auth.uid + '/nome');
      const cpf = firebase.database().ref('PerfilCliente/' + auth.uid + '/cpf');
      const telefone = firebase.database().ref('PerfilCliente/' + auth.uid + '/telefone');
      
      console.log(auth.uid);
      console.log(nome);
      console.log(cpf);
      console.log(telefone);
      ;
    })

    
  };

  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }
}

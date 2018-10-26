import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { PerfilOrganizador } from '../../models/organizador';

@Component({
  selector: 'page-home-organizador',
  templateUrl: 'home-organizador.html'
})
export class HomeOrganizadorPage {

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth, private toast: ToastController) {
  }
  
  ionViewDidLoad(){
    this.afAuth.authState.take(1).subscribe(data => {
      if (data && data.email && data.uid)
      {
        this.toast.create({
          message: `Bem vindo ao SafeChain!, ${data.email}`,
          duration: 3000
        }).present();
      }
      else
      {
        this.toast.create({
          message: 'Não foi possível realizar o cadastro, tente novamente mais tarde!',
          duration: 3000
        }).present();
      }
    })
  }
  
}

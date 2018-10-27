import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { PerfilOrganizador } from '../../models/organizador'
import { TabsControllerPage } from '../tabs-controller/tabs-controller';

@Component({
  selector: 'page-home-organizador',
  templateUrl: 'home-organizador.html'
})
export class HomeOrganizadorPage {

  items;

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth,
    private afDb: AngularFireDatabase, private toast: ToastController) {
      this.navCtrl.setRoot(TabsControllerPage);
  }

  ionViewDidLoad(){
    //Validação do cadastro com mensagem de boas vindas
    this.afAuth.authState.take(1).subscribe(data => {
      if (data && data.email && data.uid)
      {
        this.toast.create({
          message: `Bem vindo ao SafeChain!`,
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

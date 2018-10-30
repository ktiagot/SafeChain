import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, MenuController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController,
    private afAuth: AngularFireAuth, private menuCtrl: MenuController) {
    //this.navCtrl.setRoot(TabsControllerPage);
  }
  openMenu() {
    this.menuCtrl.open();
  }
  ionViewWillEnter(){
    //Validação do cadastro com mensagem de boas vindas
    this.afAuth.authState.take(1).subscribe(data => {
      if (data && data.email && data.uid)
      {
        
      }
      else
      {
        
      }
    }) 
  }

}

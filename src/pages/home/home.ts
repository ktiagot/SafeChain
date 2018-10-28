import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import { AngularFireDatabase, AngularFireAction } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { ClienteProvider } from '../../providers/cliente/cliente';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
import { PerfilCliente } from '../../models/participante';

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
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private afDb: AngularFireDatabase, private provider: ClienteProvider, private afAuth: AngularFireAuth) {
    this.navCtrl.setRoot(TabsControllerPage)
    
  }      
  

}

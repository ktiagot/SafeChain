import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { ClienteProvider } from '../../providers/cliente/cliente';

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
  clientes: Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private db: AngularFireDatabase, private provider: ClienteProvider) {
    this.navCtrl.setRoot(TabsControllerPage)
  }

  ionViewDidLoad() {
  }

}

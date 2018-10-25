import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home-organizador',
  templateUrl: 'home-organizador.html'
})
export class HomeOrganizadorPage {
  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth) {
  }
  
}

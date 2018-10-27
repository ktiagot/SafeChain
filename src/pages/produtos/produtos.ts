import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {

  private PATH = '/produtos';
  constructor(public navCtrl: NavController, public navParams: NavParams, public afDB: AngularFireDatabase) {
  }

  get(key: string) {
    return this.afDB.object(this.PATH + key).snapshotChanges()
    .map(c => {return { key: c.key, ...c.payload.val() };
    });
    }

  saprivateve(produto: any) {
    return new Promise((resolve, reject) => {
      if (produto.key) {
        this.afDB.list(this.PATH)
        .update(produto.key, { nome: produto.nome, descricao: produto.descricao, valor: produto.valor })
        .then(() => resolve())
        .catch((e) => reject(e));
      } else {
        this.afDB.list(this.PATH)
        .push({ nome: produto.nome, descricao: produto.descricao, valor: produto.valor })
        .then(() => resolve());
      }
    })
  }

    remove(key: string) {
    return this.afDB.list(this.PATH).remove(key);
    }
    
  
  /* cadastraProduto(produto)
  {
    return new Promise((resolve, reject) => {
    this.afDB.list('/produtos')
    .update(produto.key, { nome: produto.nome, descricao: produto.descricao, valor: produto.valor })
    .then(() => resolve())
    .catch((e) => reject(e));
    }
  } */

  goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }

}

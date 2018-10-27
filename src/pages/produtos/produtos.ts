import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {

  private PATH = '/produtos';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
/*
  get(key: string) {
    return this.db.object(this.PATH + key).snapshotChanges()
    .map(c => {return { key: c.key, ...c.payload.val() };
    });
    }

  save(produto: any) {
    return new Promise((resolve, reject) => {
      if (produto.key) {
        this.db.list(this.PATH)
        .update(produto.key, { nome: produto.nome, descricao: produto.descricao, valor: produto.valor })
        .then(() => resolve())
        .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
        .push({ nome: produto.nome, descricao: produto.descricao, valor: produto.valor })
        .then(() => resolve());
      }
    })
  }

    remove(key: string) {
    return this.db.list(this.PATH).remove(key);
    }
    
  
  cadastraProduto(produto)
  {
    this.db.list('/produtos')
    .update(produto.key, { nome: produto.nome, descricao: produto.descricao, valor: produto.valor })
    .then(() => resolve())
    .catch((e) => reject(e));
  }

  goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }
*/
}

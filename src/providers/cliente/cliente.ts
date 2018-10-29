import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the ClienteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClienteProvider {
  private PATH = 'Clientes/'
  constructor(private afdb: AngularFireDatabase) {
    
  }
  getAll() {
    return this.afdb.list(this.PATH, ref => ref.orderByChild('nome'))
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
  }
  get(key: string) {
    return this.afdb.object(this.PATH + key).snapshotChanges()
      .map(cliente => {
        return { key: cliente.key, ...cliente.payload.val() };
      });
  }
 
  save(cliente: any) {
    return new Promise((resolve, reject) => {
      
        this.afdb.list(this.PATH)
          .push({ nome: cliente.nome, cpf: cliente.cpf, telefone: cliente.telefone })
          .then(() => resolve());
    })
  }
 
  remove(key: string) {
    return this.afdb.list(this.PATH).remove(key);
  }

}

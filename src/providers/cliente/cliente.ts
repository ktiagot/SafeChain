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
  private PATH = 'PerfilCliente/'
  constructor(private afDb: AngularFireDatabase) {
    
  }
  
  getAll() {
    return this.afDb.list(this.PATH, ref => ref.orderByChild('nome'))
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
  }

  get(key: string) {
    return this.afDb.object(this.PATH + key).snapshotChanges()
      .map(c => {
        return { key: c.key, ...c.payload.val() };
      });
  }
 
  save(cliente: any) {
    return new Promise((resolve, reject) => {
      if (cliente.key) {
        this.afDb.list(this.PATH)
          .update(cliente.key, { nome: cliente.nome, cpf: cliente.cpf, telefone: cliente.telefone })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.afDb.list(this.PATH)
          .push({ nome: cliente.nome, cpf: cliente.cpf, telefone: cliente.telefone })
          .then(() => resolve());
      }
    })
  }
 
  remove(key: string) {
    return this.afDb.list(this.PATH).remove(key);
  }

}

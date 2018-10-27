import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

/*
  Generated class for the OrganizadorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OrganizadorProvider {

  constructor(private storage: Storage, private datepipe: DatePipe) {
    
  }
  public insert(organizador: Organizador)
  {
    let key = this.datepipe.transform(new Date(), "ddMMyyyyHHmmss");
    return this.storage.set(key, organizador);
  }
  public update(key: string, organizador: Organizador)
  {
    return this.save(key, organizador);
  }
  public save(key: string, organizador: Organizador)
  {
    return this.storage.set(key, organizador);
  }
  public remove(key: string)
  {
    return this.storage.remove(key);
  }
  public getAll()
  {
    let organizadores: OrganizadorLista[] = [];
    return this.storage.forEach((
      value: Organizador,
      key: string,
      interationNumber: Number
    ) => {
      let organizador = new OrganizadorLista();
      organizador.key = key;
      organizador.organizador = value;
      organizadores.push(organizador);
    } )
    .then(() => { return Promise.resolve(organizadores)})
    .catch((error) => { return Promise.reject(error)});
  }
}
export class Organizador{
    id_documento: string;
    nome_fantasia: string;
    razao_social: string;
    nome_responsavel: string;
    telefone: string;
    endereco: string;
}

export class OrganizadorLista{
  key: string;
  organizador: Organizador;
}
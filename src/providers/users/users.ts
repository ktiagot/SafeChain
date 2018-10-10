import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersProvider {
  private API_URL = 'http://api-evt.hhornos.com/'

  constructor(public http: HttpClient) { }

  createAccount(email: string, password: string) {
    return new Promise((resolve, reject) => {
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-Type":  "application/json"
        })
      }

      var data = {
        username: email,
        password: password
      };

      this.http.post(this.API_URL + 'api-token-auth/', data, httpOptions)
        .subscribe((result => console.log(result)),
        (error) => {
          reject(error);
        });
    });
  }

  login(username: string, password: string) {
    return new Promise((resolve, reject) => {
      var data = {
        username: username,
        password: password
      };
      console.log("HENRIQUE")
      this.http.post(this.API_URL + 'api-token-auth/', data)
      .subscribe((result => console.log(result)),
      (error) => {
        reject(error);
      });
    });
  }

  getAll(page: number) {
    return new Promise((resolve, reject) => {

      let url = this.API_URL + 'users/?per_page=10&page=' + page;

      this.http.get(url)
      .subscribe((result => console.log(result)),
      (error) => {
        reject(error);
      });
    });
  }

  get(id: number) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'users/' + id;

      this.http.get(url)
      .subscribe((result => console.log(result)),
      (error) => {
        reject(error);
      });
    });
  }

  insert(user: any) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'users/';

      this.http.post(url, user)
      .subscribe((result => console.log(result)),
      (error) => {
        reject(error);
      });
    });
  }

  update(user: any) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'users/' + user.id;
      // let data = {
      //   "first_name": user.first_name,
      //   "last_name": user.last_name
      // }

      this.http.put(url, user)
      .subscribe((result => console.log(result)),
      (error) => {
        reject(error);
      });
    });
  }

  remove(id: number) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'users/' + id;

      this.http.delete(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
}

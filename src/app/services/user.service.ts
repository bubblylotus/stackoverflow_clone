import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: any;

  constructor(private httpClient: HttpClient) { }

  createUser(dataObj: any){
    return new Promise((resolve, reject) => {
      this.httpClient.post("http://localhost:3000/users", dataObj).subscribe(
        (res) => {
          resolve(res);
        }, 
        (err) => {
          reject(err);
        }
      );
    });
  }

  getUser(email: string){
    return new Promise((resolve, reject) => {
      this.httpClient.get('http://localhost:3000/users?email=' + email).subscribe((res) => {
        resolve(res);
      }, 
      (err) => {
        reject(err);
      });
    });
  }

  
}

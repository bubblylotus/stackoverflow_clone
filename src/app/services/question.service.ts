import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpClinet: HttpClient) { }

public postQestion(questionObj: any){
  return new Promise((resolve, reject) => {
    this.httpClinet.post("http://localhost:3000/questions", questionObj).subscribe(
      (res) => {
        resolve(res)
      }, 
      (err)=>{
        reject(err)
      });
  }); 
}

public fetchQuestions(){
  return new Promise(
    (resolve, reject) => {
      this.httpClinet.get("http://localhost:3000/questions").subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    }
  );
}
}

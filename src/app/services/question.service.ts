import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpClient: HttpClient) { }

public postQestion(questionObj: any){
  return new Promise((resolve, reject) => {
    this.httpClient.post("http://localhost:3000/questions", questionObj).subscribe(
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
      this.httpClient.get("http://localhost:3000/questions").subscribe(
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
public fetchQuestionById(id: string){
  return new Promise(
    (resolve, reject) => {
      this.httpClient.get("http://localhost:3000/questions/" + id).subscribe(
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
public updateQuestion(newObj: any){
  return new Promise((resolve, reject) => {
    this.httpClient.put("http://localhost:3000/questions/"+newObj.id, newObj).subscribe(
      (res) => {
        resolve(res);
      }, 
      (err)=>{
        reject(err);
      });
  });
}
}

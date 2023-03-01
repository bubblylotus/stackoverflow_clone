import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { timingSafeEqual } from 'crypto';
import { QuestionService } from 'src/app/services/question.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

question: string = "";
  questionList: Array<any> = [];
  constructor(private userService: UserService, private router: Router, private snackBar: MatSnackBar, private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questionService.fetchQuestions().then(
      (res: any) => {
        console.log(res);
        this.questionList = res;
      }
    )
    .catch(
      (err) => {
        console.log(err);
      }
    );
   
  }

  post(){
    this.questionService.postQestion({
      username: this.userService.user.username, 
      question: this.question, 
      solutions: []
    }).then(
      (res) => {
        console.log(res);
        this.question = "";
        this.questionList.push(res);
      }
    )
    .catch(
      (err)=> {
        console.log(err)
      }
    );
    
  }

   logout(){
    this.userService.user = undefined;
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  
}
let question = {
  username: '', 
  question: '', 
  solutions: [
  {
    username: '', 
    answer: '', 
    upvotes: 0, 
    downvotes: 0
  }
  ]
}

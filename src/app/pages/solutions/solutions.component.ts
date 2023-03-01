import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent implements OnInit {

  solutionText: string = "";
  solutions: Array<any> = [];
  questionId: any;
  questionObj: any;

  constructor(public questionService: QuestionService, private route: ActivatedRoute, public userService: UserService) { }

  ngOnInit(): void {
    this.questionId = this.route.snapshot.paramMap.get('questionid');
    this.questionService.fetchQuestionById(this.questionId).then(
      (res) => {
        console.log(res);
        this.questionObj = res;
      }
    )
    .catch(
      (err) => {
        console.log(err);
      }
    );
  }

  postSolution(){
    let solutionObj = {
      username: this.userService.user.username, 
      answer: this.solutionText, 
      upvotes: [], 
      downvotes: []
    };
    this.questionObj.solutions.push(solutionObj);
    this.questionService.updateQuestion(this.questionObj).then(
      (res) => {
        console.log(res);
        this.solutionText = "";
      }
    )
    .catch(
      (err) => {
        console.log(err);
      }
    );
  }
  
//make toggle function for pressing same button twice or for undoing previous opposite vote

upvote(solutionindex: number){
  if (!(this.questionObj.solutions[solutionindex].upvotes.indexOf(this.userService.user.id) >= 0)){
      this.questionObj.solutions[solutionindex].upvotes.push(this.userService.user.id);

      //remove downvote, if previosly downvoted
      for(let i = 0; i < this.questionObj.solutions[solutionindex].downvotes.length; i++){
        if(this.questionObj.solutions[solutionindex].downvotes[i] == this.userService.user.id){
          this.questionObj.solutions[solutionindex].downvotes.splice(i, 1);
        }
      }

      this.questionService.updateQuestion(this.questionObj).then(
        (res) => {
          console.log(res);
        }
      )
      .catch(
        (err) => {
          console.log(err);
        }
      );
  }
}

downvote(solutionindex: number){
  if (!(this.questionObj.solutions[solutionindex].downvotes.indexOf(this.userService.user.id) >= 0)){
      this.questionObj.solutions[solutionindex].downvotes.push(this.userService.user.id);

      for(let i = 0; i < this.questionObj.solutions[solutionindex].upvotes.length; i++){
        if(this.questionObj.solutions[solutionindex].upvotes[i] == this.userService.user.id){
          this.questionObj.solutions[solutionindex].upvotes.splice(i, 1);
        }
      }

      this.questionService.updateQuestion(this.questionObj).then(
        (res) => {
          console.log(res);
        }
      )
      .catch(
        (err) => {
          console.log(err);
        }
      );
  }
}

}

let solution = {
  username: '', 
  answer: '', 
  upvotes: ["userids"], 
  downvotes: ['userids']
}

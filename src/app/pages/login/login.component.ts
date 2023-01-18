import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]], 
    password: ['', [Validators.required, Validators.minLength(6)]]
  });
  
  login(){
    this.userService.getUser(this.loginForm.value.email).then((res:any) => {
      if(res.length == 0){
        this.snackBar.open("Account does not exist.", "ok");
      }
      else{
        if(res[0].password === this.loginForm.value.password){
          this.snackBar.open("Login successful.", "ok");
          this.userService.user = res[0];
          localStorage.setItem('user', JSON.stringify(res[0]))
          this.router.navigate(['/home']);
        }
        else{
          this.snackBar.open("Incorrect password.", "ok");
        }
      }
    })
    .catch();
  }
}

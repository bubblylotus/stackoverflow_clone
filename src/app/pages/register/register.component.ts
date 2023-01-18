import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    
  }

  registerForm: FormGroup = this.fb.group({
    'username': ['', [Validators.required, Validators.maxLength(10)]], 
    'email': ['', [Validators.required, Validators.email]],
    'password': ['', [Validators.required, Validators.minLength(6)]]
  });

  register(){
    console.log(this.registerForm.value);
    this.userService.createUser(this.registerForm.value).then((res) => {
      console.log(res);
      this.userService.user = res;
      this.snackBar.open("Account created Successfully.", "ok");
      localStorage.setItem('user', JSON.stringify(res));
      this.router.navigate(['/home']);
    })
    .catch((reason)=> {
      console.log(reason);
    });
  }

}

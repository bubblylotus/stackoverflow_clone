import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]], 
    password: ['', [Validators.required, Validators.minLength(6)]]
  });
  
  login(){
    console.log(this.loginForm.value);
    this.loginForm.controls['email'].hasError('required')
  }
}

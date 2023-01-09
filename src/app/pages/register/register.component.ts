import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  registerForm: FormGroup = this.fb.group({
    'username': ['', [Validators.required, Validators.maxLength(10)]], 
    'email': ['', [Validators.required, Validators.email]],
    'password': ['', [Validators.required, Validators.minLength(6)]]
  });

  register(){
    console.log(this.registerForm.value);
  }

}

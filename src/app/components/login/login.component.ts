import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    public router: Router
  ) {}

  ngOnInit() {
    //* Validate user data
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)])
      ]
    });
  }

  async loginUser() {
    if (this.loginForm.valid) {
      // Add your logic here
    } else {
      // Add your logic here
    }
  }
}

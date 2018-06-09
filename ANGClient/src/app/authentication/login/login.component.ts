import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  error = null;

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: Router) {
    this.formLogin = this.formBuilder.group({
      email: ['', Validators.required ],
      password: ['', Validators.required ]
    });
  }

  ngOnInit() {
  }
  
  setSession(response) {
    localStorage.setItem('token', response.token);
  }

  login(email, password) {
    this.http.post('http://localhost:3000/api/login', {
      email,
      password
    })
    .subscribe(
      (response) => {
        this.setSession(response);
        this.router.navigate(['/tap']);
      },
      (err) => {
        if(err.status === 404) {
          this.error = 'Bad credentials';
        }
      }
    );
  }
}

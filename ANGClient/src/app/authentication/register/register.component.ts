import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup;
  error = null;

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: Router) {
    this.formRegister = this.formBuilder.group({
      firstname: ['', Validators.required ],
      lastname: ['', Validators.required ],
      email: ['', Validators.required ],
      password: ['', Validators.required ]
    });
  }

  ngOnInit() {
  }

  setSession(response) {
    localStorage.setItem('token', response.token);
  }

  register(firstname, lastname, email, password) {
    if(!firstname || !lastname || !email || !password) {
      this.error = 'All fields must by specified.';
      return;
    }

    this.http.post('http://localhost:3000/api/users', {
      firstname,
      lastname,
      email,
      password
    })
    .subscribe((response) => {
      this.setSession(response);
      this.router.navigate(['/tap']);
    });
  }
}

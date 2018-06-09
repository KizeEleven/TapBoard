import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup;

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
    const headers = new HttpHeaders().set('x-access-token', localStorage.getItem('token'));
    this.http.post('http://localhost:3000/api/users', {
      firstname,
      lastname,
      email,
      password
    },{ headers })
    .subscribe((response) => {
      this.setSession(response);
      this.router.navigate(['/tap']);
    });
  }
}

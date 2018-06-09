import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  displayLogin = true;
  displayRegister = false;

  constructor(private router: Router) {
  }

  toggleLogin() {
    this.displayLogin = !this.displayLogin;
    this.displayRegister = false;
  }

  toggleRegister() {
    this.displayRegister = !this.displayRegister;
    this.displayLogin = false;
  }

  ngOnInit() {
  }
}

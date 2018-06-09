import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  user = null;

  constructor(private http: HttpClient) { 
    this.getUser();
  }

  ngOnInit() {
  }
  setUser(user) {
    this.user = user;
  }

  getUser() {
    const headers = new HttpHeaders().set('x-access-token', localStorage.getItem('token'));
    this.http.get('http://localhost:3000/api/users', { headers })
      .subscribe((response) => {
      this.setUser(response);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {

  scores = [];

  constructor(private http: HttpClient, private router: Router) {
    if(!localStorage.getItem('token')) {
      this.router.navigate(['/']);
    }
    this.getScores();
  }

  ngOnInit() {
  }

  setScores(scores) {
    this.scores = scores;
  }

  getScores() {
    const headers = new HttpHeaders().set('x-access-token', localStorage.getItem('token'));
    this.http.get('http://localhost:3000/api/scores', { headers })
      .subscribe((response) => {
      this.setScores(response);
    });
  }
}

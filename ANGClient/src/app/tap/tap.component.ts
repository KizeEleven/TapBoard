import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {
  img = 'tapOff.png';
  score = 0;
  timer = 0;
  isStarted = false;
  timerInterval = null;
  endingTimer = 10000;
  tapOn = false;

  constructor(private http: HttpClient, private router: Router) {
    if(!localStorage.getItem('token')) {
      this.router.navigate(['/']);
    }
  }

  isPressed() {
    if (!this.isStarted) {
      this.launchTimer();
    }

    if(this.tapOn === false) {
      this.score++;
      this.tapOn = true;
      this.img = 'tapOn.png';
    } else {
      this.tapOn = false;
      this.img = 'tapOff.png';
    }
  }

  calculTimer = () => {
    this.timer += 50;
    if (this.timer === this.endingTimer) {
      clearInterval(this.timerInterval);
      this.ending();
    }
  }

  launchTimer = () => {
    this.timerInterval = setInterval(this.calculTimer, 50);
    this.isStarted = true;
  }

  ending() {
    const headers = new HttpHeaders().set('x-access-token', localStorage.getItem('token'));
    this.http.post('http://localhost:3000/api/tap', {
      points: this.score,
    },{ headers })
    .subscribe((response) => {
      this.router.navigate(['/scores']);
    });
  }

  ngOnInit() {
  }

}

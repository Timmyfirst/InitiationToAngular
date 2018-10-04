import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  secondes: number;

  constructor() {
  }

  ngOnInit() {
    const counter = interval(1000);
    counter.subscribe(value => this.secondes = value);
  }

}

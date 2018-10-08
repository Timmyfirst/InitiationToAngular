import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  secondes: number;
  counterSubscription: Subscription;

  constructor() {
  }

  ngOnInit() {
    const counter = interval(1000);
    this.counterSubscription = counter.subscribe(value => this.secondes = value,
    err => console.log('Une erreur est survenue'),
    () => console.log('Observable complete !'));
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }

}

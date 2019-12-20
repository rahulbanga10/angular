import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements  DoCheck {
public test;
public testee;
public hero;
public power;
  constructor() { }


teste(t){
  this.testee=t;
}
  ngDoCheck(){
    this.test="on Changes"+this.test;
  }
}

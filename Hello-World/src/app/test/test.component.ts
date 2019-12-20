import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-test',
  template: `<div>
  Welcome {{name}}
  Welcome {{2+9+"Welcome"+name}}
  Welcome {{siteUrl}}
  Welcome {{getCurrentUrl()}}
  <input type="text" value="{{name}}" [disabled]="false" *ngIf="displayInput; then blockA else blockB ">
  <input type="text" #inputValue [value]="name" [class]="textSuccess"  >
  <input type="text" [(ngModel)]="name" >
  <button (click)="onClickEnter(inputValue)" >Enter</button>
  <button (click)="onClick($event)" >Save</button>
  <button (click)="displayInput=false" >Save1</button>
  <button (click)="displayInput=true" >Save1</button>
  <ng-template #blockA>BlockA</ng-template>
  <ng-template #blockB>Block B</ng-template>
  <div [ngSwitch]="blockNo">
  <div [class]="textSuccess" *ngSwitchCase="1">This is Rahul 1</div>
  <div [class.text-danger]="hasError" *ngSwitchCase="2">This is Rahul 2</div>
  </div>
  <div [ngClass]="messages">This is Rahul</div>
  <div [ngClass]="messages">This is Rahul</div>
  <div [style.color]="hasError ? 'pink':'green' ">Thi is rahul</div>
  <div [ngStyle]="styles" > This is red</div>
  <div *ngFor="let color of colors; index as i; last as l; first as f; odd as o; even as e">
  <p> Index: {{i}} IsFirst: {{f}} IsOdd: {{o}} IsEven:{{e}} color: {{color}}</p>
  </div>
  <p>{{parentMessage}}</p>
  <button (click)="ontest()">Test</button>
  <p>{{name | lowercase}}</p>
  <p>{{name | uppercase}}</p>
  <p>{{name | titlecase}}</p>
  <p>{{name | slice:3:7 }}</p>
  <p>{{ 1.23456 | number:'1.4-8' }}</p>
  <p>{{ 0.1234567 | number:'2.3-4' }}</p>
  <p>{{ 123 | percent}}</p>
  <p>{{ .123 | currency}}</p>
  <p>{{ 123 | currency:'INR' }}</p>
  <p>{{today}}</p>

  </div>`,
  styles:[`
  .text-success{
    color: green;
  }
  .text-danger{
    color:red;
  }
  .text-special{
    font-style:italic;
  }`]
})
export class TestComponent implements OnInit {
today= new Date();
  name='Rahul';
siteUrl=window.location.host;
textSuccess='text-success';
hasError=true;
displayInput=true;
blockNo = "1" ;

@Input() public parentMessage;
@Output() public childMessage= new EventEmitter();

ontest(){
this.childMessage.emit('Hey Buddy');
}
colors=['red','pink','green','blue'];
styles={
  color: "pink",
  fontStyle: "italic"
}
messages={
  "text-success":false,
  "text-danger": true,
  "text-special": true
}
getCurrentUrl(){ return this.siteUrl;}
  constructor() { }

  ngOnInit() {
  }

  onClick(event){
    this.name="Rahul Bangha"+event.type;
  }

  onClickEnter(ent: HTMLInputElement){
    this.siteUrl=ent.value;
  }
}

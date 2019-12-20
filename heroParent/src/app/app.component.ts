import { Component, Output, OnInit , EventEmitter, ViewChild} from '@angular/core';
import {HeroChildComponent} from './hero-child/hero-child.component';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'heroParent';
  parent="I am parent";
  msgg='test';
  public str="tasdfasdf";
@ViewChild( HeroChildComponent,{static: false})
public child: HeroChildComponent;

constructor(public commonMsg: CommonService){

}

  tester(a : string){
    this.title=this.child.onlyChild;

    console.log("Event listen");
    console.log(a);
    this.msgg=a;
  }
 
}

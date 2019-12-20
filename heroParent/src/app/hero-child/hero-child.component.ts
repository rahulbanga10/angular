import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-hero-child',
  templateUrl: './hero-child.component.html',
  styleUrls: ['./hero-child.component.css']
})
export class HeroChildComponent implements OnInit {
str="message from child"
  @Input() public msg;

  public onlyChild="asdfsdfaI am child";
commonMessage;
  constructor(public commonM: CommonService) {
    this.commonMessage=this.commonM.commonMessage;
   }
  @Output() parentmsg = new EventEmitter<string>();


  relaseEvent(){

    this.parentmsg.emit(this.str);
    console.log("release Event hit");
  }

  updateCommon(abc){
    this.commonM.commonMessage=abc;
  }
  latestMsg(){
    
    this.commonMessage=this.commonM.commonMessage;
    console.log(this.commonMessage);
  }
  ngOnInit() {
  }

}

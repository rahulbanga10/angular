import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'videodetail',
  templateUrl: './videodetail.component.html',
  styleUrls: ['./videodetail.component.css'],
  inputs:['selectedVideo']
})
export class VideodetailComponent implements OnChanges  {
private isEdit:boolean=false;


  constructor() { }



  ngOnChanges() {
    console.log("Changes Called");
    this.isEdit = false;
  }
  isEditable(){
    this.isEdit=true;
  }

}

import { Component, OnInit, EventEmitter } from '@angular/core';
import { Video } from '../video';


@Component({
  selector: 'videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.css'],
  inputs:['videoss'],
  outputs:['_selectedVideo']
})
export class VideolistComponent implements OnInit {

  public _selectedVideo=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  selectVideo(selectedVideo: Video){
    this._selectedVideo.emit(selectedVideo);
  }

}

import { Component, OnInit, Output } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-video-centre',
  templateUrl: './video-centre.component.html',
  styleUrls: ['./video-centre.component.css']
})
export class VideoCentreComponent implements OnInit {

  videos : Video[]=[
    { "_id": '1',"title":'title1',"url":'url1',"description":'description1'},
    { "_id":'2',"title":'title2',"url":'url2',"description":'description2'},
    { "_id":'3',"title":'title3',"url":'url3',"description":'description3'},
    { "_id":'4',"title":'title4',"url":'url4',"description":'description4'}
  ];
  selectedVideo:Video=this.videos[0];
newVideoForm: boolean = false;
  constructor(private videoList: VideoService) { }
   private test:string;
  ngOnInit() {
    this.videoList.getVideos().subscribe(respVideo =>{ console.log(`This is headers ${respVideo.headers.keys()}`);
      console.log(`this is status Text ${respVideo.statusText} ${respVideo.status} ${respVideo.headers.get("content-type")}`);
      this.videos = respVideo.body;
    });
  }

  openNewVideoForm(){
    this.newVideoForm=true;
  }

  onAddVideo(form){
   const newVideo=form.value;
   console.log(form.value);
   this.videoList.addVideos(newVideo).subscribe(retVideo=>this.videos.push(retVideo));
  }
  onSelectedVideo(selectedVideo: Video){
    console.log(selectedVideo.title);
    this.selectedVideo = selectedVideo;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Video } from './video';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor( private _http : HttpClient) { }

  private _apiUrl='/api/video';

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  getVideos(): Observable<HttpResponse<Video[]>>{
    return this._http.get<Video[]>(this._apiUrl,{observe:'response'});
  }

  addVideos(video): Observable<Video> {
    console.log(JSON.stringify(video));
    return this._http.post<Video>(this._apiUrl, JSON.stringify(video), this.httpOptions);
  }
}

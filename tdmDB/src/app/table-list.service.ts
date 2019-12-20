import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableListService {
  tables=[
    {key:'1',col1:'A',col2:'B',col3:'C'},
    {key:'2',col1:'A2',col2:'B2',col3:'C2'},
    {key:'3',col1:'A3',col2:'B3',col3:'C3'},
    {key:'4',col1:'A4',col2:'B4',col3:'C4'}
  ];

  constructor( private _http : HttpClient) { }

  private _apiUrl='/api/video';

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  getVideos(url): Observable<any> {
    return this._http.get<any>(url);
  }

  getTableRecord(url): Observable<any> {
    return this._http.get<any>(url);
  }

  deleteTableRecord(url): Observable<any> {
    return this._http.delete<any>(url);
  }

   updateTableRecord(record, url): Observable<any> {
     console.log(JSON.stringify(record));
     return this._http.put<any>(url, JSON.stringify(record), this.httpOptions);
   }

   addTableRecord(record, url): Observable<any> {
    console.log(JSON.stringify(record));
    return this._http.post<any>(url, JSON.stringify(record), this.httpOptions);
  }




}

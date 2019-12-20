import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { throwError as observableThrowError , Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url:string='/assets/data/employee.json';
  constructor(private http: HttpClient) { }

  getEmployees():Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.url).pipe(
      catchError(this.errorHandler));
    }
errorHandler(error:HttpErrorResponse){
  return observableThrowError(error.message || "Server Error");
  }


}

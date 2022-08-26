import { EventEmitter, Injectable, Output } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpEventType, HttpHeaders} from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { FirstAssessment } from '../interface/first-assessment';


@Injectable({
  providedIn: 'root'
})

export class AssessmentOneService {

  private baseUrl ='http://intellifer-001-site1.btempurl.com/api/IS/';

  constructor( private http : HttpClient) { }

  getAssessmentOne(): Observable<FirstAssessment[]> {
    return this.http.get(this.baseUrl+'CreateOrUpdateAssessment1ForEmployee').pipe(
       map((response: any) => {
         return response;
      })
     );
}


}

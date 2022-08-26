import { EventEmitter, Injectable, Output } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpEventType, HttpHeaders} from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { ReviewTwo } from '../interface/review-two';
//import { FirstAssessment } from '../interface/first-assessment';

@Injectable({
  providedIn: 'root'
})
export class ReviewTwoService {

  private baseUrl ='http://intellifer-001-site1.btempurl.com/api/IS/';

  constructor(private http: HttpClient) { }

  getAssessmentOne(): Observable<ReviewTwo[]> {
    return this.http.get(this.baseUrl+'CreateOrUpdateReview2ForEmployee').pipe(
       map((response: any) => {
         return response;
      })
     );
}

}

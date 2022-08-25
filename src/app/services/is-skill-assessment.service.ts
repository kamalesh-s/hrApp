import { EventEmitter, Injectable, Output } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpEventType, HttpHeaders} from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { IsSkillAssessment } from '../interface/is-skill-assessment';

@Injectable({
  providedIn: 'root'
})
export class IsSkillAssessmentService {

  private baseUrl ='http://intellifer-001-site1.btempurl.com/api/IS/';

  constructor(private http: HttpClient) { }

  getISSkillAssessment(): Observable<IsSkillAssessment[]> {
    return this.http.get(this.baseUrl+'GetAllSkillAssessmentDetailsForEmployee').pipe(
       map((response: any) => {
         return response;
      })
     );
}


}

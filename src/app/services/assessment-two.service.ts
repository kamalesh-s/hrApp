import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AssessmentTwo } from '../interface/assessment-two';

@Injectable({
  providedIn: 'root'
})

export class AssessmentTwoService {

  private baseUrl ='http://intellifer-001-site1.btempurl.com/api/IS/';

  constructor(private http: HttpClient) { }

  getSecondAssessment(): Observable<AssessmentTwo[]> {
    return this.http.get(this.baseUrl+'CreateOrUpdateAssessment2ForEmployee').pipe(
       map((response: any) => {
         return response;
      })
     );
}
  
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ReviewOne } from '../interface/review-one';

@Injectable({
  providedIn: 'root'
})
export class ReviewOneService {
  private baseUrl ='http://intellifer-001-site1.btempurl.com/api/IS/';

  constructor(private http: HttpClient) { }

  getReviewOne(): Observable<ReviewOne[]> {
    return this.http.get(this.baseUrl+'GetAllSkillAssessmentDetailsForEmployee').pipe(
       map((response: any) => {
         return response;
      })
     );
}
  


}

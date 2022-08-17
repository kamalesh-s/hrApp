import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Skill} from 'src/app/interface/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private baseUrl ='http://intellifer-001-site1.btempurl.com/api/HR/';


  constructor(private http: HttpClient) { }

  getEmployeeSkill(): Observable<Skill[]> {
    return this.http.get(this.baseUrl+'GetAllSkills').pipe(
       map((response: any) => {
         return response;
      })
     );
}
}

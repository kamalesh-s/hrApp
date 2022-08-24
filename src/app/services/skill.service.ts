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

  getAllSkill(): Observable<Skill[]> {
    return this.http.get(this.baseUrl+'GetAllSkills').pipe(
       map((response: any) => {
         return response;
      })
     );
}

addSkill(data: any) {
  return this.http.post<any>(this.baseUrl+'AddSkill',data)
}

updateSkill(data:any , psNumber: number){
return this.http.put<any>(this.baseUrl+'UpdateSkill/'+data.psNumber ,data)
}

deleteSkill(data:any, psNumber: number ) {
 return this.http.delete<any>(this.baseUrl+'DeleteSkill/'+data.psNumber ,data)
}
}

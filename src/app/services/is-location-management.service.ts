import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ltvlEmployee } from '../interface/ltvlEmployee/ltvl-employee-interface';

@Injectable({
  providedIn: 'root'
})
export class IsLocationManagementService {

  private baseUrl ='http://intellifer-001-site1.btempurl.com/api/HR/';

  constructor(private http: HttpClient) { }

  
  getLtvlEmployee(): Observable<ltvlEmployee[]> {
    return this.http.get(this.baseUrl+'GetAllLtvlEmployees').pipe(
       map((response: any) => {
         return response;
      })
     );
}
}

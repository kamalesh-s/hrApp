
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {ltvlEmployee} from 'src/app/interface/ltvlEmployee/ltvl-employee-interface';

@Injectable({
  providedIn: 'root'
})

export class LtvlEmployeeService {
  // addLtvlEmployeeData(postObj: { psNumber: any; name: any; departmentName: any; immediateSupervisorEmployeeName: any; emailAddress: any; mobilePhoneNumber: any; plantLocation: any; }) {
  //   throw new Error('Method not implemented.');
  // }

  //private baseUrl ='https://retoolapi.dev/dTHPxB/data';
  private baseUrl ='http://intellifer-001-site1.btempurl.com/api/HR/';
  
  constructor(private http: HttpClient) { }

  // addLtvlEmployee(data: any) {
  //   return this.http.post(this.baseUrl+'GetAllLtvlEmployees', JSON.stringify(data)).pipe(
  //     map((response: any) => {
  //       return response;
  //     })
  //   );
  // }

  // getData(): Observable<ltvlEmployee[]> {
  //   getLtvlEmployee(): Observable<ltvlEmployee[]> {
  //    return this.http.get(this.baseUrl+'GetAllLtvlEmployees').pipe(
  //      map((response: any) => {
  //        return response;
  //     })
  //    );
  //  }


  addLtvlEmployee(data: any) {
    return this.http.post(this.baseUrl+'AddLtvlEmployee', JSON.stringify(data)).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  // getLtvlEmployee() {
  //      return this.http.get('assets/data.json')
  //     }

  // getLtvlEmployee() {
  //        return this.http.get('this.baseUrl')
  //        }
  
         

        //  getLtvlEmployee() {
        //   return this.http.get('this.baseUrl')
        //   }


        getLtvlEmployee(): Observable<ltvlEmployee[]> {
             return this.http.get(this.baseUrl+'GetAllLtvlEmployees').pipe(
                map((response: any) => {
                  return response;
               })
              );
        }

  // updateData(data?: any, id?: number) {
  //   return this.http.patch(`${this.baseUrl}/${id}`, data).pipe(
  //     map((response: any) => {
  //       return response.json;
  //     })
  //   );
  // }

  updateData(data?: any, id?: number) {
    return this.http.patch(`${this.baseUrl+'UpdateLtvlEmployee'}/${id}`, data).pipe(
      map((response: any) => {
        return response.json;
      })
    );
  }

  deleteData(id: number) {
    return this.http.delete(`${this.baseUrl+'DeleteLtvlEmployee'}/${id}`).pipe(
      map((response: any) => {
        return response.json;
      })
    );
  }


  // getLtvlEmployee(){
  //   return this.http.jsonp(this.baseUrl+'GetAllLtvlEmployees' ,'callback').pipe(
  //     catchError(this.handleError('searchHeroes', []))
  //   );

  // }



}
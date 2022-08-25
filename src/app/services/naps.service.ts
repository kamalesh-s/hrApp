import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Naps} from 'src/app/interface/naps';

@Injectable({
  providedIn: 'root'
})
export class NapsService {

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


  // addContractEmployee(data: any) {
  //   return this.http.post(this.baseUrl+'AddContractEmployee', JSON.stringify(data)).pipe(
  //     map((response: any) => {
  //       return response;
  //     })
  //   );
  // }

  // getLtvlEmployee() {
  //      return this.http.get('assets/data.json')
  //     }

  // getLtvlEmployee() {
  //        return this.http.get('this.baseUrl')
  //        }
  
         

        //  getLtvlEmployee() {
        //   return this.http.get('this.baseUrl')
        //   }


        getNapsEmployee(): Observable<[Naps]> {
             return this.http.get(this.baseUrl+'GetAllContractEmployees').pipe(
                map((response: any) => {
                  return response;
               })
              );
        }

        addContractEmployee(data: any) {
          return this.http.post<any>(this.baseUrl+'AddContractEmployee',data)
     }

     updateContractEmployee(data:any , id: number){
      return this.http.put<any>(this.baseUrl+'UpdateContractEmployee/'+data.id ,data)
    }

    deleteContractEmployee(data:any, id: number ) {
      return this.http.delete<any>(this.baseUrl+'DeleteContractEmployee/'+data.id ,data)
  }


  // updateData(data?: any, id?: number) {
  //   return this.http.patch(`${this.baseUrl}/${id}`, data).pipe(
  //     map((response: any) => {
  //       return response.json;
  //     })
  //   );
  // }

  // updateData(data?: any, id?: number) {
  //   return this.http.patch(`${this.baseUrl+'UpdateLtvlEmployee'}/${id}`, data).pipe(
  //     map((response: any) => {
  //       return response.json;
  //     })
  //   );
  // }

  // deleteData(id: number) {
  //   return this.http.delete(`${this.baseUrl+'DeleteLtvlEmployee'}/${id}`).pipe(
  //     map((response: any) => {
  //       return response.json;
  //     })
  //   );
  // }


}

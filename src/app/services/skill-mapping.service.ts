import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Naps} from 'src/app/interface/naps';

@Injectable({
  providedIn: 'root'
})

export class SkillMappingService {

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


  // addLtvlEmployee(data: any) {
  //   return this.http.post(this.baseUrl+'GetAllContractEmployees', JSON.stringify(data)).pipe(
  //     map((response: any) => {
  //       return response;
  //     })
  //   );
  // }

  addProductSkill(data: any) {
    return this.http.post<any>(this.baseUrl+'AddProductSkillMapping',data)
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


        getSkillMapping(): Observable<[Naps]> {
             return this.http.get(this.baseUrl+'GetAllProductSkillMappings').pipe(
                map((response: any) => {
                  return response;
               })
              );
        }

        deleteSkillMapping(data:any, productLine: number ,productGroup:number , skillId : number) {
          return this.http.delete<any>(this.baseUrl+'DeleteProductSkillMapping?productGroup='+data.productGroup+'&productLine='+data.productLine+'&skillId='+data.skillId ,data)
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

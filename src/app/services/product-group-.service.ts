import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {ltvlEmployee} from 'src/app/interface/ltvlEmployee/ltvl-employee-interface';
import { ProductGroup } from '../interface/product-group';
import { ProductMappedSkill } from '../interface/product-mapped-skill';

@Injectable({
  providedIn: 'root'
})
export class ProductGroupService {

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


  // addProductGroup(data: any) {
  //   return this.http.post(this.baseUrl+'AddProductGroupLine', data).pipe(
  //     map((response: any) => {
  //       return response;
  //     })
  //   );
  // }

  addProductGroup(data: any) {
    return this.http.post<any>(this.baseUrl+'AddProductGroupLine',data)
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


        getProductGroupLine(): Observable<ProductGroup[]> {
             return this.http.get(this.baseUrl+'GetAllProductGroupLines').pipe(
                map((response: any) => {
                  return response;
               })
              );
        }

        updateProductGroup(data:any , psNumber: number){
          return this.http.put<any>(this.baseUrl+'UpdateProductGroupLine' ,data)
        }

        deleteLtvlEmployee(data:any, psNumber: number ) {
            return this.http.delete<any>(this.baseUrl+'DeleteLtvlEmployee/'+data.psNumber ,data)
        }


    //     getSkillMapped(): Observable<[ProductMappedSkill]> {
    //       return this.http.get(this.baseUrl+'GetAllProductGroupLines').pipe(
    //          map((response: any) => {
    //            return response;
    //         })
    //        );
    //  }

        //Get product mapped to skill
        getProductMappedToSkill(data:any , productGroup: number ,productLine :number){
          return this.http.get(this.baseUrl+'GetAllSkillsMappedToProductGroupLine?productGroup=${data.productGroup}&productLine=${data.productLine}' ,data).pipe(
          //return this.http.get(this.baseUrl+'GetAllSkillsMappedToProductGroupLine?productGroup=GGC&productLine=5' ,data).pipe(
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


  // getLtvlEmployee(){
  //   return this.http.jsonp(this.baseUrl+'GetAllLtvlEmployees' ,'callback').pipe(
  //     catchError(this.handleError('searchHeroes', []))
  //   );

  // }

}

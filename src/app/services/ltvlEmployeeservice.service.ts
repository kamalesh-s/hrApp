
import { EventEmitter, Injectable, Output } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpEventType, HttpHeaders} from '@angular/common/http';
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

  // headers={
  //   headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //   })
//}


  //private baseUrl ='https://retoolapi.dev/dTHPxB/data';
  private baseUrl ='http://intellifer-001-site1.btempurl.com/api/HR/';
  
 // editData: any;
 @Output() public onUploadFinished = new EventEmitter(); 

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
  //   return this.http.post(this.baseUrl+'AddLtvlEmployee', JSON.stringify(data)).pipe(
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


        getLtvlEmployee(): Observable<ltvlEmployee[]> {
             return this.http.get(this.baseUrl+'GetAllLtvlEmployees').pipe(
                map((response: any) => {
                  return response;
               })
              );
        }

        // updateLtvlEmployee(data?: any, id?: number) {
        //   return this.http.patch(this.baseUrl+'UpdateLtvlEmployee/'+data.psNumber, data).pipe(
        //     map((response: any) => {
        //       return response.json;
        //     })
        //   );
        // }
      
        // getLtvlEmployee(data : any) {
        //       return this.http.get(this.baseUrl+'GetAllLtvlEmployees' ,data)
        //   }
  

        addLtvlEmployee(data: any) {
             return this.http.post<any>(this.baseUrl+'AddLtvlEmployee',data)
        }

        updateLtvlEmployee(data:any , psNumber: number){
          return this.http.put(this.baseUrl+'UpdateLtvlEmployee/'+data.psNumber ,data)
        }

        deleteLtvlEmployee(data:any, psNumber: number ) {
            return this.http.delete<any>(this.baseUrl+'DeleteLtvlEmployee/'+data.psNumber ,data)
        }

        uploadFile = (files: any) => {
          if (files.length === 0) {
            return;
          }
          let fileToUpload = <File>files[0];
          const formData = new FormData();
          formData.append('file', fileToUpload, fileToUpload.name);
          
          this.http.post('http://intellifer-001-site1.btempurl.com/api/HR/Upload', formData, {reportProgress: true, observe: 'events'})
            .subscribe({
              next: (event) => {
              
               
              if (event.type === HttpEventType.Response) {
                
                this.onUploadFinished.emit(event.body);
              }
            },
            error: (err: HttpErrorResponse) => console.log(err)
          });
        }

        download() { 
          //return this.http.get('$(https://localhost:8080/api/HR/download?fileUrl=LtvlEmployeeTemplate.xlsx)', 
          
            this.http.get(`http://intellifer-001-site1.btempurl.com/api/HR/download?fileUrl=LtvlEmployeeTemplate.xlsx`,{
              responseType: 'arraybuffer',} 
             ).subscribe(response => this.downLoadFile(response, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"));
          
        }
        downLoadFile(data: any, type: string) {
          let blob = new Blob([data], { type: type});
          let url = window.URL.createObjectURL(blob);
          let pwa = window.open(url);
          if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
              alert( 'Please disable your Pop-up blocker and try again.');
          }
        
 

  //old code
  // updateData(data: any, id: number) {
  //   return this.http.patch(`${this.baseUrl+'UpdateLtvlEmployee'}/${id}`, data).pipe(
  //     map((response: any) => {
  //       return response.json;
  //     })
  //   );
  // }

//   updateData(data: any, id: string): Observable<any> {
//     return this.http.patch(`${this.baseUrl+'UpdateLtvlEmployee'}${id}`, data)
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
}
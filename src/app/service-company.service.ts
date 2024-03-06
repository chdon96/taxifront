import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import{Company}from './core/model/Company'
@Injectable({
  providedIn: 'root'
})
export class ServiceCompanyService {
  private apiUrl = 'http://localhost:8085/company/get-companies';
  constructor(private http:HttpClient) {
   }
   public AddOffre(Company: Company ){
    return this.http.post("http://localhost:8085/company/AddCompany",Company,{responseType:'text' as 'json'});

  }
  public SaveTaxi(       idCompany: number,
      companyName:String,
      mainAdress:string,
      phoneNumber:number,
      email:string,
      createdAt: Date,
      updatedAt:Date,
      status:boolean): Observable<Company> {

      const formData: FormData = new FormData();
    formData.append('idCompany', String(idCompany));
    formData.append('companyName', email);
    formData.append('mainAdress', String(phoneNumber));
    formData.append('phoneNumber', String(phoneNumber));
    formData.append('createdAt', String(createdAt));
    formData.append('updatedAt', String(updatedAt));

    formData.append('status', String(status));
    //formData.append('createdAt', createdAt);


    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    return this.http.post<Company>("http://localhost:8085/company/AddCompany", formData, { headers });
  }
  public getAllTaxis() {
    return this.http.get("http://localhost:8085/company/get-Companies");
  }
  public removeTaxi(id: number) {
    return this.http.delete(`http://localhost:8085/company/delete/${id}`);
  }
  show(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

}

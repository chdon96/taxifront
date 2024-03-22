import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import{Company}from './core/model/Company'
@Injectable({
  providedIn: 'root'
})
export class ServiceCompanyService {

  private apiUrl = 'http://localhost:8085/company/getcompany/';
  constructor(private http:HttpClient) {
   }
   public AddOffre(Company: Company ){
    return this.http.post("http://localhost:8085/company/AddCompany",Company,{responseType:'text' as 'json'});

  }
  public SaveTaxi(company: Company) {

    return this.http.post("http://localhost:8085/company/addCompany",company,
    {responseType:  'json'});
  }
  public getAllCompanies() {
    return this.http.get("http://localhost:8085/company/get-Companies");
  }
  public removeCompay(id: number) {
    return this.http.delete(`http://localhost:8085/company/delete/${id}`);
  }
  show(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  public getCompanyById(id: number): Observable<Company> {
    return this.http.get<Company>(`${this.apiUrl}${id}`);
  }

}

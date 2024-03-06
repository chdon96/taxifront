import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { TaxiComponent } from './taxis/taxi/taxi.component';
import { Observable, map } from 'rxjs';
import { Taxi } from './core/model/Taxi';

@Injectable({
  providedIn: 'root'
})
export class ServiceTaxiService {
  private apiUrl = 'http://localhost:8085/taxi/get-taxis';
  constructor(private http:HttpClient) {
   }
   public AddOffre(Taxi: Taxi ){
    return this.http.post("http://localhost:8085/taxi/Addtaxi",Taxi,{responseType:'text' as 'json'});

  }
  public SaveTaxi(
    fullName : string,  email : string, phoneNumber : number, homeAdress : string ,Numberplate:string , matricule :number,
    createdAt: Date,updatedAt: Date, status : boolean): Observable<Taxi> {



    const formData: FormData = new FormData();
    formData.append('fullName', fullName);
    formData.append('email', email);
    formData.append('phoneNumber', String(phoneNumber));
    formData.append('homeAdress', homeAdress);
    formData.append('Numberplate', Numberplate);
    formData.append('matricule', String(matricule));
    formData.append('createdAt', String(createdAt));
    formData.append('updatedAt', String(updatedAt));
    formData.append('status', String(status));
    //formData.append('createdAt', createdAt);


    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    return this.http.post<Taxi>("http://localhost:8085/taxi/Addtaxi", formData, { headers });
  }
  public getAllTaxis() {
    return this.http.get("http://localhost:8085/taxi/get-taxis");
  }
  public removeTaxi(id: number) {
    return this.http.delete(`http://localhost:8085/taxi/delete/${id}`);
  }
  show(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

}

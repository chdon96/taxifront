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


  public SaveTaxi(taxi: Taxi) {

  return this.http.post("http://localhost:8085/taxi/addtaxi/",taxi,
  {responseType:  'json'});

  //  const headers = new HttpHeaders();

  //  return this.http.post<Taxi>("http://localhost:8085/taxi/Addtaxi", taxi, { headers });
  }
  addTaxi(taxiData: any): Observable<any> {
    return this.http.post<any>('http://localhost:8085/taxi/addtaxi', taxiData);
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

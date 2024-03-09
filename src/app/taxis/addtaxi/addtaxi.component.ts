import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ServiceTaxiService } from 'src/app/service-taxi.service';
import { Taxi } from 'src/app/core/model/Taxi';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-addtaxi',
  templateUrl: './addtaxi.component.html',
  styleUrls: ['./addtaxi.component.css']
})
export class AddtaxiComponent implements OnInit {

  Taxi: {
    fullName: string;
    email: string;
    phoneNumber: string;
    homeAdress: string;
    Numberplate: string;
    matricule: string;
    carModel: string;
    status: string;
  } = {
    fullName: '',
    email: '',
    phoneNumber: '',
    homeAdress: '',
    Numberplate: '',
    matricule: '',
    carModel: '',
    status: '',
  };
  constructor(
    private http: HttpClient,
    private taxiService: ServiceTaxiService
  ) {}

  ngOnInit(): void {
  }
  submitForm() {
    this.http.post('http://localhost:8085/taxi/addtaxi', this.Taxi).subscribe(
      (response) => {
        console.log('Form submitted successfully:', response);
        // Reset form data after successful submission
        this.Taxi = {
          fullName: '',
          email: '',
          phoneNumber: '',
          homeAdress: '',
          Numberplate: '',
          matricule: '',
          carModel: '',
          status: '',
        };
      },
      (error) => {
        console.error('Error submitting form:', error);
      }
    );
  }

}

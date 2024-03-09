import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ServiceTaxiService } from 'src/app/service-taxi.service';
import { Taxi } from 'src/app/core/model/Taxi';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-taxi',
  templateUrl: './taxi.component.html',
  styleUrls: ['./taxi.component.css'],
})
export class TaxiComponent implements OnInit {
  taxis:Taxi[] | undefined;
  constructor(
    private http: HttpClient,
    private serviceTaxi: ServiceTaxiService
  ) {}
  ngOnInit(): void {
    this._getListTaxi();
  }
  //constructor(private route: ActivatedRoute,private ServiceTaxiService: ServiceTaxiService, private location:Location)  { }

  // constructor(private route: ActivatedRoute,private taxiService: ServiceTaxiService) { }

  _getListTaxi = async () => {
    try {
      this.serviceTaxi.getAllTaxis().subscribe(data => {
        this.taxis = data as any;
      });
    } catch (error) {
      alert('something went wrong');
    }
  };
}

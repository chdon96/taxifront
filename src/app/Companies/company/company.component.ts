import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/core/model/Company';
import { ServiceCompanyService } from 'src/app/service-company.service';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

 



  companies:Company[] | undefined;
  constructor(
    private http: HttpClient,
    private serviceCompany: ServiceCompanyService
  ) {}

  ngOnInit(): void {
    this._getListCompanies();
  }

  _getListCompanies = async () => {
    try {
      this.serviceCompany.getAllCompanies().subscribe(data=>{
        this.companies=data as any

      });
    } catch (error) {
      alert('something went wrong');
    }
  };



}

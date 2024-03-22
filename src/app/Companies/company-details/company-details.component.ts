import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceCompanyService } from 'src/app/service-company.service';
import { Company } from 'src/app/core/model/Company';
import { switchMap } from 'rxjs';
import { ParamMap } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  company: Company | any;
  //route: any;
  loading = false;
  error = '';
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private serviceCompany: ServiceCompanyService,

  ) {}
  // ngOnInit(): void {

  //   const id = +this.route.snapshot.paramMap.get('id'); // Get the 'id' parameter from the route URL
  //   this.serviceCompany.getCompanyById(id).subscribe(
  //     (data) => {
  //       this.company = data; // Assign fetched data to companyData property
  //     },
  //     (error) => {
  //       console.error('Error fetching company data:', error);
  //     }
  //   );


  // }



  // ngOnInit(): void {
  //   this.route.paramMap.pipe(
  //     switchMap((params: ParamMap) => {
  //       const id = +this.route.snapshot.paramMap.get('id');// Get the 'id' parameter from the route URL
  //       return this.serviceCompany.getCompanyById(id);
  //     })
  //   ).subscribe(
  //     (data: any) => {
  //       this.company = data; // Assign fetched data to companyData property
  //     },
  //     (error: any) => {
  //       console.error('Error fetching company data:', error);
  //     }
  //   );
  // }


  // ngOnInit(): void {
  //   this.route.paramMap.pipe(
  //     switchMap((params: ParamMap) => {
  //       const id = +params.get('id'); // Get the 'id' parameter from the route URL
  //       return this.serviceCompany.getCompanyById(id);
  //     })
  //   ).subscribe(
  //     (data: any) => {
  //       this.company = data; // Assign fetched data to companyData property
  //     },
  //     (error: any) => {
  //       console.error('Error fetching company data:', error);
  //     }
  //   );
  // }
  ngOnInit(): void {
    if (this.route) {
      this.route.queryParamMap.subscribe((params: any) => { // Adjust the type of params according to your needs
        const idCompany = Number(params.get('idCompany'));
        if (!isNaN(idCompany)) {
          this.getCompanyDetails(idCompany);
        } else {
          this.error = 'Invalid idCompany parameter.';
        }
      });
    } else {
      console.error('ActivatedRoute is undefined.');
    }
  }

  getCompanyDetails(idCompany: number): void {
    this.serviceCompany.getCompanyById(idCompany).subscribe(
      (data: any) => {
        this.company = data;
      },
      (error: any) => {
        this.error = 'Failed to fetch company details.';
        this.loading = false;
      }
    );
  }
}




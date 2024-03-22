import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceCompanyService } from 'src/app/service-company.service';
import { Company } from 'src/app/core/model/Company';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  company: {
    companyName: string;
    responsable: string;
    mainAdress: string;
    phoneNumber: number;
    email: string;
   // createdAt: Date;
   // updatedAt: Date;
    status: boolean;
} = {
    companyName: 'Example Company',
    responsable: 'John Doe',
    mainAdress: '123 Example St',
    phoneNumber: 1234567890,
    email: 'example@example.com',
  //  createdAt: new Date(),
  //  updatedAt: new Date(),
    status: true
};
constructor(
  private http: HttpClient,
  private serviceCompany: ServiceCompanyService
) {}
  ngOnInit(): void {
  }




  submitForm() {
    this.http.post('http://localhost:8085/company/addcompany', this.company).subscribe(
      (response) => {
        console.log('company added successfully:', response);
        // Reset form data after successful submission
        this.company = {
          companyName: 'Example Company',
          responsable: 'John Doe',
          mainAdress: '123 Example St',
          phoneNumber: 1234567890,
          email: 'example@example.com',
        //  createdAt: new Date(),
         // updatedAt: new Date(),
          status: true
        };
      },
      (error) => {
        console.error('Error submitting form:', error);
      }
    );
  }

}

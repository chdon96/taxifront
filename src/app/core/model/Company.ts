export class Company {
    constructor(
      public idCompany: number,
      public  companyName:String,
      public  mainAdress:string,
      public   phoneNumber:number,
      public  email:string,
      public  createdAt: Date,
      public  updatedAt:Date,
      public  status:boolean
    ) {}

  }

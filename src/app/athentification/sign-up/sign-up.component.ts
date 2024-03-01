import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'src/app/core/model/user';
import { UserService } from 'src/app/core/service/user.service';
import { Location } from '@angular/common';
import { user } from 'src/app/core/model/user';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  error: any;
  firstName!: string;
  lastName!: string;
  email!: string;
  username!: string;
  password!: string;


  constructor(private userService: UserService, private currentRoute: ActivatedRoute, private route: Router,private location: Location) { }

  User : user = new user(
    "",
    "",
    "",
    "",
    "",
    Role.Admin,
  );

  action: string = '';

  message:any;

  ngOnInit(): void {


  }

  Register(){
    let resp=this.userService.AddUser(this.User);
    resp.subscribe((data) => {
      this.message = data;
      this.location.replaceState('/Confirmation');
      location.reload();
      this.route.navigate(['/home']);
    });
  }

}

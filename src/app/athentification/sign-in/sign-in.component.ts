import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  error: any;
  username!: string;
  password!: string;
  constructor(private userService: UserService, private route: Router) { }

  ngOnInit(): void {
  }

  login() {
    const data = {
      username: this.username,
      password: this.password
    };
    this.userService.login(data).subscribe(
      response => {
        this.userService.setToken(response.token);
        this.route.navigate(['/home']);
        console.log(response.token);

      },
      (error) => {
        this.error = error;
        console.log(error);
      }
    );
  }


}

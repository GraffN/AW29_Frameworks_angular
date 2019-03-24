import { Component, OnInit } from '@angular/core';
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoginService]
})
export class AppComponent implements OnInit{
  title: String = 'Please login to continue to your dashboard';
  isUsername: Boolean = false;
  isPassword: Boolean = false;

  constructor(protected  loginService: LoginService){}

  ngOnInit() {
    localStorage.setItem('Username', 'Jørgen');
    localStorage.setItem('Password', '@Jørgen123');
    this.userObj = this.loginService.getLoginDetails();
  }
  testUserDetails(userdetails){
    if(userdetails.username !== localStorage.getItem('Username') || userdetails.password !== localStorage.getItem('Password')){
      this.title = 'Please login to continue';
      if (userdetails.username !== localStorage.getItem('Username')) {
        this.isUsername = true;
      }
      if (userdetails.password !== localStorage.getItem('Password')){
        this.isPassword = true;
      }
    } else {
      this.title = 'Welcome back! ' + userdetails.username;
      this.isPassword = false;
      this.isUsername = false;
    }
  }
}

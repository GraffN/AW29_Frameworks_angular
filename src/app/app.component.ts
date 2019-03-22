import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title: String = 'Please login to continue to your dashboard';
  isUsername: Boolean = false;
  isPassword: Boolean = false;

  ngOnInit() {
    localStorage.setItem('Username', 'Jørgen');
    localStorage.setItem('Password', '@Jørgen123');
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

import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }

  constructor(private http:Http) { }

  ngOnInit() {
  }

  login(){
    this.http.post(`http://localhost/c_angular4/authentication/api/public/api/login`, this.user)
      .toPromise()
      .then(response => console.log(response));
  }

}
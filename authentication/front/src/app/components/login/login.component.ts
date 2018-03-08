import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { LocalStorageService } from '../../services/local-storage.service';
import { JwtTokenService } from '../../services/jwt-token.service';
import { Router } from '@angular/router';

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

  btnSubmit = false;
  redirectAfterLogin = ['/products/list'];

  constructor(private http: Http, private jwtToken: JwtTokenService, private router:Router) { }

  ngOnInit() {
  }

  login() {
    this.btnSubmit = true;

    this.http.post(`http://localhost/c_angular4/authentication/api/public/api/login`, this.user)
      .toPromise()
      .then(response => {
        //console.log(response);
        this.jwtToken.token = response.json().token;
        this.router.navigate(this.redirectAfterLogin)
        this.btnSubmit = false;
      })
      .catch(response => {
        console.log(response);
        this.btnSubmit = false;
      });
  }

}

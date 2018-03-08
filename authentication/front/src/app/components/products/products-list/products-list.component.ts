import { Component, OnInit } from '@angular/core';
import { JwtTokenService } from '../../../services/jwt-token.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { RequestOptions, Headers } from '@angular/http';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products:Array<Object>=[];

  constructor(private http:Http, private jwtToken: JwtTokenService, private auth:AuthService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    let requestOption = new RequestOptions();

    requestOption.headers = new Headers();
    requestOption.headers.set('Authorization', `Bearer ${this.jwtToken.token}`);
    requestOption.headers.set('Content-Type', 'application/json');

    this.http.get('http://localhost/c_angular4/authentication/api/public/api/products', requestOption)
      .toPromise()
      .then(response => this.products = response.json());
  }

}

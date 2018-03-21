import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { RequestOptions, Headers } from '@angular/http';
import { DefaultRequestOptionsService } from '../../../services/auth/default-request-options.service';
import { JwtTokenService } from '../../../services/auth/jwt-token.service';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Array<Object> = [];

  constructor(
    private http: Http,
    private requestOptions: DefaultRequestOptionsService,
    private jwtToken: JwtTokenService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {

    this.http.get('http://localhost/c_angular4/authentication/api/public/api/products', this.requestOptions.merge(new RequestOptions()))
      .toPromise()
      .then(response => this.products = response.json())
      /*.catch(responseError => {
        if (responseError.status === 401) {
          this.http.post('http://localhost/c_angular4/authentication/api/public/api/refresh_token', {})
            .toPromise()
            .then(response => {
              this.jwtToken.token = response.json().token;

              this.http.get('http://localhost/c_angular4/authentication/api/public/api/products', this.requestOptions.merge(new RequestOptions()))
                .toPromise()
                .then(response => this.products = response.json())
            })
        }
      });*/
  }
}

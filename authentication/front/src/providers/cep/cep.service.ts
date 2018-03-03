import { Injectable } from '@angular/core';
import { Cep } from '../../classes/cep';
import { Http } from '@angular/http';

@Injectable()
export class CepService {

  tasks: Array<Cep> = [];

  constructor(public http: Http) { }

  getCep(cep: string) {
    return this.http.get(`http://viacep.com.br/ws/${cep}/json`)
      .toPromise()
      .then(response => {
        return this.getResponseClass(response.json());
      });
  }

  getReservas() {
    return this.http.get(`http://localhost/frota/public/getreservas`)
      .toPromise()
      .then(response => {
        return response.json();
      });
  }

  private getResponseClass(jsonResponse): Cep {
    let cep = new Cep();
    cep.cep = jsonResponse.cep;
    cep.logradouro = jsonResponse.logradouro;
    cep.complemento = jsonResponse.complemento;
    cep.bairro = jsonResponse.bairro;
    cep.localidade = jsonResponse.localidade;
    cep.uf = jsonResponse.uf;

    return cep;
  }

}

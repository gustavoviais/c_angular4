import { Component, OnInit, Input } from '@angular/core';
import { CepService } from '../../providers/cep/cep.service';
import { Cep } from '../../classes/cep';
import { validation } from '../../providers/validation/validation-pt-BR';
import { FormControl, Validators } from '@angular/forms';

@Component({  //decorator
  selector: 'page-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.scss']
})
export class CepComponent implements OnInit {

  cep = new Cep();
  btnIsLoading = false;
  validation = {};

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  constructor(private cepService: CepService) {
    this.validation = validation;
  }

  ngOnInit() {
  }

  getCep(){
    this.btnIsLoading = true;

    this.cepService.getCep(this.cep.cep)
      .then((cep:Cep) => {
        this.btnIsLoading = false;
        this.cep = cep;
      })
      .catch(() => {
        this.btnIsLoading = false;
        alert("Não foi possível receber o retorno!"); 
      });
  }

}

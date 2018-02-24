import { Component, OnInit, Input } from '@angular/core';
import { CepService } from '../../providers/cep/cep.service';
import { Cep } from '../../classes/cep';
import { title, validation } from '../../providers/validation/validation-pt-BR';
import { FormControl, Validators } from '@angular/forms';

@Component({  //decorator
  selector: 'page-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  title = "";

  constructor() {
    this.title = title;
  }

  ngOnInit(){}
}

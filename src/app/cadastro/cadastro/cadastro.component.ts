import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  formValue !: FormGroup;
  constructor(private formbuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      id : [''],
      nome : [''],
      cpf : [''],
      cidade : [''],
      uf : [''],
      telefone : [''],
      email : [''],
      senha : ['']
    })
    
  }

}

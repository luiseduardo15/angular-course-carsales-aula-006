import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'SEIS';

  formulario: FormGroup;

  constructor (private formBuilder: FormBuilder) {}

  ngOnit(): void{
    this.formulario = this.formBuilder.group({
      id: [''],
      nome: [''],
      cpf: [''],
      cidade: [''],
      uf: [''],
      telefone: [''],
      email: [''],
      senha: ['']
    
    });
  }
}



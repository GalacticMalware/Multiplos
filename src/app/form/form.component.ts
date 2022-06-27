import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(private formBiulder: FormBuilder) {}

  public numberForm: any = this.formBiulder.group({
    numberUser: ['', [Validators.required, Validators.pattern(/^[1-9]\d{0,10}$/)]],
  });

  get numberUser(): void {
    return this.numberForm.get('numberUser');
  }

  public errorMessages: any = {
    numberUser: [
      { type: 'required', message: 'Por favor, ingrese un numero' },
      { type: 'pattern', message: 'Por favor, ingrese un numero valido' },
    ],
  };

  ngOnInit(): void {}
}

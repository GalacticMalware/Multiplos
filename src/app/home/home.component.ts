import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataUser } from '../services/service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private formBiulder: FormBuilder, private dataUser: DataUser) {
    this.dataUser.getDataUser().then((res) => {
      this.historyData = res;
    });
  }
  public data: any = [];
  public historyData: any;
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

  saveData() {
    let { numberUser } = this.numberForm.value;
    let data = this.dataUser.save(numberUser);
    this.data = data.result;
    this.historyData.unshift(data);
  }

  backData(index: number) {
    let { result } = this.historyData[index];
    this.data = result;
  }
}

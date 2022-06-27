import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root',
})
export class DataUser {
  constructor(public firebase: AngularFirestore) {}
  public url = '';

  save(number: number) {
    let arrayNumber = [];
    for (let i = 0; i < number; i++) {
      if (i % 3 == 0) {
        arrayNumber.unshift({
          number: i == 0 ? '' : i + ',',
          color: 'success',
          auxNumber: i % 3 != 0 ? '' : i / 3,
        });
      } else if (i % 5 == 0) {
        arrayNumber.unshift({ number: i + ',', color: 'danger', auxNumber: i % 5 != 0 ? '' : i / 5 });
      } else if (i % 7 == 0) {
        arrayNumber.unshift({ number: i + ',', color: 'primary', auxNumber: i % 7 != 0 ? '' : i / 7 });
      }
    }
    this.dataSave(arrayNumber, number);
    return { result: arrayNumber, number: number };
  }

  async dataSave(array: any, n: number) {
    await this.firebase.collection('data').add({ result: array, number: n });
  }

  async getDataUser(): Promise<any> {
    return await new Promise((res, jec) => {
      let arrayGet: any = [];
      this.firebase
        .collection('data')
        .get()
        .subscribe((res) => {
          res.forEach((element) => {
            arrayGet.push(element.data());
          });
        });
      res(arrayGet);
    });
  }
}

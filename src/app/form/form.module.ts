import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form.component';

@NgModule({
  imports: [CommonModule, IonicModule, ReactiveFormsModule, FormsModule],
  exports: [FormComponent],
  declarations: [FormComponent],
})
export class FormModule {}

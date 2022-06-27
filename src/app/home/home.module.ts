import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@shared';
import { HomeComponent } from './home.component';

//import { FormModule } from '../form/form.module';

@NgModule({
  imports: [CommonModule, SharedModule, IonicModule, ReactiveFormsModule, FormsModule],
  declarations: [HomeComponent],
})
export class HomeModule {}

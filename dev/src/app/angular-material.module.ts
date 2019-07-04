import { NgModule } from '@angular/core';
import { MatDatepickerModule, MatRadioModule, MatFormFieldModule, MatNativeDateModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    MatDatepickerModule,
    MatRadioModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule
  ],
  exports: [
    MatDatepickerModule,
    MatRadioModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule
  ],
})
export class AngularMaterialModule { }

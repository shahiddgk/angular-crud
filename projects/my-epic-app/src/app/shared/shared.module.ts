import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    // Vendor
    CommonModule,
    RouterModule,

    // Material
    MatButtonModule,
  ],
  exports: [
    // Vendor
    CommonModule,
    RouterModule,

    // Material
    MatButtonModule,
  ]
})
export class SharedModule { }

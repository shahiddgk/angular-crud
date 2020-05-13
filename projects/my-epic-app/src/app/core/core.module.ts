import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [MainLayoutComponent],
})
export class CoreModule { }

import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCharacterComponent } from './components/add-character/add-character.component';
import { MainPageComponent } from './pages/main-page-component';
import { ListComponent } from './components/list/list.component';
import { FormsModule } from '@angular/forms';

// agregamos los componentes del modulo, nuestro modulo principal es MainPageComponent
@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterComponent
  ],

 exports:[
  MainPageComponent
  ],

  imports: [
    CommonModule,
    FormsModule // importamos FormsModule para poder utilizar ngModel
  ]
})

export class DbzModule { }

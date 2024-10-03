import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { CounterComponent } from './counter/components/counter/counter.component';
//import { HeroComponent } from './heroes/hero/hero.component';
//import { ListComponent } from './heroes/list/list.component';
//import { PruebaComponent } from './prueba/prueba.component';

// importamos el modulo
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
   // HeroComponent,
  //  ListComponent,
   // PruebaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule, // agregamos el modulo counter
    HeroesModule // agregamos el modulo heroes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

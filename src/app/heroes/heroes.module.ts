import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";



@NgModule({
exports:[
HeroComponent,
ListComponent
],
declarations:[
  HeroComponent,
  ListComponent
],
imports: [
  CommonModule //importamos  el commonmodule para utilizar las directivas comunes ngFor , ngIf, etc.
]
})
export class HeroesModule {}

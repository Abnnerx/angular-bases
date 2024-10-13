import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";

@NgModule({
declarations:[
  // lo declaramos para importarlo
  CounterComponent
],
// para poder consumir el componente en la aplicacion
exports: [
  CounterComponent
]

})
export class CounterModule{}

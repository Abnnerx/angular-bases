import { Component } from '@angular/core';
import { ValueChangeEvent } from '@angular/forms';
import { Product, taxCalculation} from './counterProduct';
import { Character } from './counterCharacter';

// utilizamos el decorador @Component para indicar que es un componente
@Component({
  selector: 'app-counter',
  // el template es  el codigo html puede ponerse directamente o utilizar un archivo
  template: `

<h3>{{counter}}</h3>
<hr>
<button (click)="increaseBy(+2)"> Incrementar +2 con parametro </button>
<hr>
<button (click)="DecreaseBy(-2)"> Decrementar en -2 con parametro </button>
<hr>
<button (click)="increaseByx()"> Incrementar +1 sin parametro </button>
<hr>
<button (click)="DecreaseByx()"> Decrementar -1 sin parametro </button>
<hr>
<button (click)="resetCounter()"> Resear contador </button>

  `
})

/*

// nos ayuda para tipar nuestros objetos
interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string|undefined; // el simbolo ? indica que es opcional
  }
*/



export class CounterComponent {



  public counter: number = 10

  resetCounter():void {
    this.counter = 10;
  }

    increaseByx():void {
      this.counter += 1;
    }

    DecreaseByx():void {
      this.counter -= 1;
    }

    increaseBy( value : number):void {
      this.counter += value;
    }

    DecreaseBy(value: number):void {
      this.counter += value;

    }

///======================= mis ejemplos interactuando con counterCharacter o counterProducts ============================
// ejemplo de ciclo foreach
    Ciclos():void{

      [1,2,3].forEach(e => {

        console.log(e);

      });

      let num = [7, 8, 9];

      num.forEach(value => {
        console.log(value);
      });

      num.forEach(function (value) {
        console.log(value);
      });

    }


InterfaceEjemplo2():Character{

  const strider:Character = {
    name: 'strider',
    hp: 100,
    skills: ['bash', 'Counter']

};

strider.hometown = "Riverdell";

console.table(strider);

return strider;

}


    InterfaceEjemplo():Product[]{

      const shoppingCart : Product[] = [
        {
         description: 'Nokia',
         price: 100
        },
        {
          description: 'iPad',
          price: 150
        }
      ];

      // connvertir a json
      console.log(JSON.stringify(shoppingCart));


    return shoppingCart

    }



}




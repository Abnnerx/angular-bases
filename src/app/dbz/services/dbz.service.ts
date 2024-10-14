import { Injectable } from '@angular/core';
//  agregamos despues de instalar npm i uuid  de https://www.npmjs.com/package/uuid
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  // este es nuestro componente principal de dbz y en el html de este componente cargamos los componentes de list y add-character
  public characters: Character[] = [
    {
      id: uuid(), // este metodo agrega un id unico tipo string
      name: 'Krilin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power : 8500
    },
    {
    id: uuid(),
    name: 'Vegeta',
    power: 18000
    }
    ]

    // se ejecuta en el momento que añadimos un nuevo personaje en el form de add-character.component.html
    // el metodo agrega la informacion capturada en el formulario y lo añade al arreglo characters
    // esta informacion pasa a la lista list-components y se refleja en pantalla
    addCharacter( character: Character):void{
      /*
      const newCharacter: Character = {
     id : uuid(),
     name: character.name,
     power: character.power
      }
     */
      // ... Toma todas sus propiedades y las pasa al objeto newCharacter
      const newCharacter: Character = { id: uuid(),...character }

      this.characters.push(newCharacter);
     // this.characters.push(character);
      //console.log('MainPage');
      //console.log(character);
    }

    deleteCharactertById (id: string) :void {
      this.characters  = this.characters.filter( character => character.id != id);
    }

/*
    onDeleteCharacter(index:number):void{
      this.characters.splice(index,1);
      console.log('MainPage');
      console.log("index " + index);
    }
*/


}

import { Component } from "@angular/core";

// Importo la interface Character
import { Character } from '../interfaces/character.interface';
import { DbzService } from "../services/dbz.service";

@Component({
selector: 'app-dbz-main-page',
templateUrl: './main-page-component.html'


})

export class MainPageComponent {

  // agregamos el constructor con la propiedad dbzService
  // si pusieramos el servicio en publico tenemos acceso directo desde el main-page-component.html
  constructor(private dbzService: DbzService){ }

  // propiedad para acceder al arreglo characters
  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacterById( id: string ):void {
  this.dbzService.deleteCharactertById( id );
  }

  onNewCharacter (character: Character) {
    this.dbzService.addCharacter(character);
  }

/*
  // este es nuestro componente principal de dbz y en el html de este componente cargamos los componentes de list y add-character
public characters: Character[] = [
{
  name: 'Krilin',
  power: 1000
},
{
  name: 'Goku',
  power : 8500
},
{
name: 'Vegeta',
power: 18000
}
]

// se ejecuta en el momento que añadimos un nuevo personaje en el form de add-character.component.html
// el metodo agrega la informacion capturada en el formulario y lo añade al arreglo characters
// esta informacion pasa a la lista list-components y se refleja en pantalla
onNewCharacter( character: Character):void{
  this.characters.push(character);
  console.log('MainPage');
  console.log(character);
}


onDeleteCharacter(index:number):void{
  this.characters.splice(index,1);
  console.log('MainPage');
  console.log("index " + index);
}
*/

}

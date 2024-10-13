import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})


export class AddCharacterComponent {

 // decorador que marca un campo de clase como una propiedad de salida
@Output()
// creamos instancia de emisor de evento
public onNewCharacter : EventEmitter<Character> = new EventEmitter();

public character: Character = {
  id: '',
  name: '',
  power: 0
  };

  // al ejecutar el metodo emitimos el evento y le pasamos la informacion capturada en el formulario al metodo onNewCharacter de main-page-component.ts
  // el cual es escuchado atravez de la intruccion en el selector de dbz-add-character
  // luego esta informacion pasa a list-component-ts y se agrega la informacion en el listado añadiendose como un nuevo registro
emiCharacter() : void {
//debugger;
//console.log(this.character);
// si no se captura un nombre no hacemos nada
if (this.character.name.length === 0) return;

// emitimos el evento
this.onNewCharacter.emit(this.character);

this.character = { name: '', power: 0 };
//this.character.name = '';
//this.character.power = 0;



}

}

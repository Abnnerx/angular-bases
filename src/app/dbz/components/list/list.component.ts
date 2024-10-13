import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, input , Output, output} from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent {

 //decorador que permite la comunicacion entre el padre y el hijo para que el hijo
 //reciba una propiedad del main en este caso un arreglo tipo character proveniento de main-page-component.ts
@Input()
public characterList: Character[] =[{
  id: '',
  name: '',
  power: 0
}]

@Output()
//public onDelete : EventEmitter<number> = new EventEmitter();
  public onDelete : EventEmitter<string> = new EventEmitter();

/*
onDeleteCharacter(index:number):void{
  this.onDelete.emit(index);
}
*/

onDeleteCharacter(id?:string):void{

  // si el id no existe no se manda a llamar la instruccion emit
  if (!id) return;

  this.onDelete.emit(id);
}

/*
onDeleteCharacter2(index:number):void{
  // Emitir el ID del personaje
this.characterList = [...this.characterList.filter((_,i) => i !== index)];

  console.log(index);
}
  */




}

import { Component } from "@angular/core";

@Component({
selector: 'app-heroes-hero',
templateUrl: './hero.component.html',
styleUrls: ['./hero.component.css']
})

export class HeroComponent {


public name : string = 'ironman';
public age: number = 45;
public titulo: string = "Spider-Man";




// getter
get capitalizedName():string {
  return this.name.toUpperCase();
}

// metodo
public getHeroDescription():string{
  return  `${this.name } - ${this.age}`; // concatenamos nombre y edad
}

// cambia el valor de la variable/propiedad name
public ChangeHero( value : string):void {
  this.name = value;
}
// cambia el valor de la variable/propiedad age
public ChangeAge(value: number):void {
  this.age = value;
}
// cambia el valor de name y age a sus valores originales
public resetForm(): void {

  this.name = 'ironman';
  this.age = 45;
  //this.titulo = "Desde Angular"




  // modifica el valor del h1 del componente principal
document.querySelector('app-heroes-hero h1' )!.innerHTML = '<h1>Desde Angular</h1>'


//cambia todos los H1 en todos los componentes
//document.querySelectorAll('h1')!.forEach( element => {
//element.innerHTML = '<h1>Desde Angular</h1>';

//})



}

}





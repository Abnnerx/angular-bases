// si no va cambiar definirla como constante
const skill:string[] = ['Bash','Counter','Healing'];

// nos ayuda para tipar nuestros objetos
export interface Character {
name: string;
hp: number;
skills: string[];
hometown?: string|undefined; // el simbolo ? indica que es opcional
}

const strider:Character = {
    name: 'strider',
    hp: 100,
    skills: ['bash', 'Counter']

};

strider.hometown = "Riverdell";

console.table(strider);

//export{};

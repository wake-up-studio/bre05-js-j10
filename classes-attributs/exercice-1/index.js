class Cat{
    name;
    age;
    color;
    
    constructor(name, age, color){
        this.name = name;
        this.age = age;
        this.color = color;
    }
}

let Garfield = new Cat("Garfield", "10", "Orange");
let Felix = new Cat("Felix", "5", "Noir et Blanc");

console.log(Garfield);
console.log(Felix);
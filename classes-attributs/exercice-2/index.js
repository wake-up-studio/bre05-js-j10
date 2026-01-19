class User{
    firstName;
    lastName;
    grades;
    
    constructor(firstName, lastName, grades){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grades = grades;
    }
}

let Mari = new User("Mari", "Doucet", [13, 12, 15]);
let Hugues = new User("Hugues", "Froger", [14, 11, 17, 13]);

console.log(Mari);
console.log(Hugues);
console.log(Mari.grades.length);
console.log(Hugues.grades.length);
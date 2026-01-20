class User{
    firstName;
    lastName;
    dateOfBirth;
    
    constructor(firstName, lastName, dateOfBirth){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
    }
    
    introduce(){
        return ` My name is ${this.firstName} ${this.lastName}, I'm born in ${this.dateOfBirth}`;
    }
}

let Hugues = new User("Hugues", "Froger", "March 18 1992");
console.log(Hugues.introduce());
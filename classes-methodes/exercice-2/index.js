class User{
    firstName;
    lastName;
    frenchGrades;
    mathGrades;
    
    constructor(firstName, lastName, frenchGrades, mathGrades){
        this.firstName = firstName;
        this.lastName = lastName;
        this.frenchGrades = frenchGrades;
        this.mathGrades = mathGrades;
    }
    
    getAverage(){
        let sum=0;
        
        for(let fGrade of this.frenchGrades){
            sum += fGrade;
        }
        for(let mGrade of this.mathGrades){
            sum += mGrade;
        }
        
        return sum/(this.frenchGrades.length + this.mathGrades.length);
    }
}

let Mari = new User("Mari", "Doucet", [11, 17], [9, 7]);
console.log(Mari.getAverage());
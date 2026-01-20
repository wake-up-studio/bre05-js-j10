class Student{
    firstName;
    lastName;
    mathGrades;
    frenchGrades;
    englishGrades;
    
    constructor(firstName, lastName, mathGrades, frenchGrades, englishGrades){
        this.firstName = firstName;
        this.lastName = lastName;
        this.mathGrades = mathGrades;
        this.frenchGrades = frenchGrades;
        this.englishGrades = englishGrades;
    }
    
    mathAverage(){
        let sum=0;
        
        for(let mGrades of this.mathGrades){
            sum += mGrades;
        }
        return sum / this.mathGrades.length;
    }
    
    frenchAverage(){
        let sum=0;
        
        for(let fGrades of this.frenchGrades){
            sum += fGrades;
        }
        return sum / this.frenchGrades.length;
    }
    
    englishAverage(){
        let sum=0;
        
        for(let eGrades of this.englishGrades){
            sum += eGrades;
        }
        return sum / this.englishGrades.length;
    }
    
    globalAverage(){
        let averages = [this.mathAverage(), this.frenchAverage(), this.englishAverage()];
        let sum = 0;
        
        for(let average of averages){
            sum += average;
        }
        return sum / averages.length;
    }
    
    highestAverage(){
        let averages = [this.mathAverage(), this.frenchAverage(), this.englishAverage()];
        
        if(averages[1]>averages[2]  && averages[1]>averages[3]){
            return "la meilleur moyenne est celle de maths";
        }
        else if(averages[2]>averages[1]  && averages[2]>averages[3]){
            return "la meilleur moyenne est celle de français";
        }
        else{
            return "la meilleur moyenne est celle d'anglais";
        }
    }
}

let Hilma = new Student("Hilma", "Af Klint", [9, 11, 13], [20, 18, 17, 20], [14, 9, 16]);

console.log(Hilma.mathAverage());
console.log(Hilma.frenchAverage());
console.log(Hilma.englishAverage());
console.log(Hilma.globalAverage());
console.log(Hilma.highestAverage());
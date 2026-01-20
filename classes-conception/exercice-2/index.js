class Book{
    title;
    author;
    publishedDate;
    numberPages;
    numberAvailable;
    
    constructor(title, author, publishedDate, numberPages, numberAvailable){
        this.title = title;
        this.author = author;
        this.publishedDate = publishedDate;
        this.numberPages = numberPages;
        this.numberAvailable = numberAvailable;
    }
    
    availability(){
        if(this.numberAvailable>1){
            return "Ce livre est disponible";
        }
        else if(this.numberAvailable===1){
            return "C'est le dernier exemplaire, vite !";
        }
        else{
            return "Ce livre est en rupture de stock";
        }
    }
}

let Ravage = new Book("Ravage", "René Barjavel", 1943, 288, 3);
let BNW = new Book("Brave New World", "Aldous Huxley", 1932, 285, 1);
let HT = new Book("The Handmaid's Tale", "Margaret Atwood", 1985, 362, 0);
let NonLieux = new Book("Non-lieux: Introduction à une anthropologie de la surmodernité", "Marc Augé", 1992, 149, 2);
let Liminal = new Book("Liminal", "Alt-236", 2023, 192, 0);
let Albator = new Book("Capitaine Albator", "Leiji Matsumoto", 1977, 400, 2);

console.log(Ravage.availability());
console.log(BNW.availability());
console.log(HT.availability());
console.log(NonLieux.availability());
console.log(Liminal.availability());
console.log(Albator.availability());
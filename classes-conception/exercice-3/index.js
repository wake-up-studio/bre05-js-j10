class BankAccount{
    accountNumber;
    bankBalance;
    operationsList;
    
    constructor(accountNumber, bankBalance, operationsList){
        this.accountNumber = accountNumber;
        this.bankBalance = bankBalance;
        this.operationsList = operationsList;
    }
    
    add(add){
        this.bankBalance = this.bankBalance + add;
        this.operationsList.push(add);
        console.log(this.bankBalance);
        
    }
    
    remove(remove){
        if(this.bankBalance>remove){
            this.bankBalance = this.bankBalance - remove;
            this.operationsList.push(-remove);
            console.log(this.bankBalance);
        }
        else{
            console.log("Solde insuffisant");
        }
    }
    
    checkOperations(){
        for(let ope of this.operationsList){
            if(ope>0){
                console.log("dépôt de " + ope);
            }
            else{
                console.log("retrait de " + ope);
            }
        }
    }
}

let firstAccount = new BankAccount(0001, 26, []);

console.log(firstAccount.bankBalance); //26
firstAccount.remove(25); //Solde insuffisant
firstAccount.add(56); //76
firstAccount.add(11); //76
firstAccount.remove(3); //43
firstAccount.remove(64); //10
console.log(firstAccount.operationsList); //tableau avec 3 opérations
firstAccount.checkOperations(); //1 ajout, 2 retraits
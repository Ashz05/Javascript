class Bank{
    static BankName = "XYZ BANK"; //static variable assignment;
    constructor(amount){
        if(amount === undefined){
            console.log("Amount should be initialized in order to work with your account!");
        }
        else{
            this.amount = amount; 
            console.log("Amount is been initialised!");

        }
    }
    static get BankName(){
        return `Bank Name: ${Bank.BankName}\nCurrently Under Federal Bank of United Nations.`
    }

    get getBalance(){
        console.log("User Has Initialized to view Balance amount ");
        return "Available Balance is: " + this.amount; 
    }

    deposit(amount){
        if(amount >= 0.0){
            this.amount += amount;
            console.log("Amount has been deposited successfully!");
        }
    }
    
    withdrawl(amount){
        if(amount <= this.amount){
            this.amount -= amount ;
            console.log("Amount has been withdrawn successfully!");
        }
    }
}
customer1 = new Bank(11234);
customer1.withdrawl(1000);
console.log(customer1.getBalance);
console.log(Bank.BankName)
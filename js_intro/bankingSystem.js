class Bank{
    constructor(amount){
        if(amount <= 0 ){
            console.log("Invalid Amount!");
            console.log("Amount can't be lesser than equal to 0");
        }
        else{
            this.amount = amount; 
            console.log("Initial Amount Deposited Successfully!!");
        }
    }

    getBalance(){
        return `Balance Amount is: ${this.amount}`;
    }

    getWithdrawl(amount){
        if(amount >= this.amount){
            return "Withdrawl Amount is Greater Than Balance Amount!";
        }
        else{
            this.amount -= amount; 
            return "Amount has been Withdrawn Successfully!"
        }
    }

    setDeposit(amount){
        if(amount <= 0){
            return "Deposit Amount Should be Greater than 0"
        }
        else{
            this.amount += amount 
            return "Amount has been Deposited Successfully!"
        }
    }
}


// user= new Bank(455.0); Object creation!


//Test Cases
user1 = new Bank(0);

// console.log(user.getBalance());
// user.getWithdrawl(55);
// console.log(user.getBalance());
// user.setDeposit(1000);
// console.log(user.getBalance())


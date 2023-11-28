function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.active = "Active";
}


BankAccount.prototype.deposit = function(amount) {
    this.balance += amount;
    console.log(`Deposited ${amount}. New balance: ${this.balance}`);
};


BankAccount.prototype.withdraw = function(amount) {
    if (this.balance >= amount) {
        this.balance -= amount;
        console.log(`Withdrawn ${amount}. New balance: ${this.balance}`);
    } else {
        console.log('Insufficient funds');
    }
};


BankAccount.prototype.checkBalance = function() {
    console.log(`Account balance: ${this.balance}`);
};


BankAccount.prototype.isActive = function() {
    if(this.balance <= 0){
        return "Inactive";
    }
    else {
        return this.active;
    }
};


let person1 = new BankAccount(3215759292, 'Kundan Kumar Gupta', 'Savings', 500);
console.log(person1)
person1.deposit(4000);
person1.withdraw(2000);
person1.checkBalance();
console.log(person1.isActive());
console.log(getTotalBalance(person1));



let person2 = new BankAccount(9291543922, 'Raju Sharma', 'Savings', 100);
console.log(person2)
person2.deposit(3000);
person2.withdraw(1000);
person2.checkBalance();
console.log(person2.isActive());


function getTotalBalance(...accounts) {
    return accounts.reduce((total, acc) => {
        if (acc.isActive()) {
        return total + acc.balance;
        }
        return total;
    },0);
}

console.log(getTotalBalance(person2));
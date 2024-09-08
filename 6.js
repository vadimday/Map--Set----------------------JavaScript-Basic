function BankAccount(balance) {
  this.balance = balance;

  this.deposit = function (amount) {
    this.balance += amount;
  };

  this.withdraw = function (amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      console.log("Недостаточно средств");
    }
  };

  this.getBalance = function () {
    return this.balance;
  };
}

const myAccount = new BankAccount(3000);
myAccount.deposit(500);
console.log(myAccount.getBalance());
myAccount.withdraw(4000);
console.log(myAccount.getBalance());

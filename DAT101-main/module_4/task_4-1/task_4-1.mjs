"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

const AccountType = {
    Normal: "Brukskonto",
    Savings: "Sparekonto",
    Credit: "Kredittkonto",
    Pension: "Pensjonskonto",
  };

const CurrencyTypes = {
    NOK: { value: 1.0000, name: "Norske kroner", denomination: "kr" },
    EUR: { value: 0.0985, name: "Europeiske euro", denomination: "€" },
    USD: { value: 0.1091, name: "United States dollar", denomination: "$" },
    GBP: { value: 0.0847, name: "Pound sterling", denomination: "£" },
    INR: { value: 7.8309, name: "Indiske rupee", denomination: "₹" },
    AUD: { value: 0.1581, name: "Australske dollar", denomination: "A$" },
    PHP: { value: 6.5189, name: "Filippinske peso", denomination: "₱" },
    SEK: { value: 1.0580, name: "Svenske kroner", denomination: "kr" },
    CAD: { value: 0.1435, name: "Canadiske dollar", denomination: "C$" },
    THB: { value: 3.3289, name: "Thai baht", denomination: "฿" }
  };



  class TAccount {
    type;
    balance;
    withdrawCount;
    CurrencyType;


    constructor(aType) {
        this.type = aType; 
        this.balance = 0;
        this.withdrawCount = 0;
        this.currencyType = CurrencyTypes.NOK;
    }

    toString() {
        return this.type;
    }

    setType(aType) {
        printOut("Account type changed from " + this.type + " to " + aType);
        this.type = aType;
    }

    getBalance() {
        return this.balance;
    }

    deposit(aAmount, aType = CurrencyTypes.NOK) {
        const newAmount = aAmount / this.currencyConvert(aType);
        this.balance += newAmount;
        this.withdrawCount = 0;
        
        printOut("Deposit of " + aAmount + " " + aType.name + ", new balance is " + this.balance.toFixed(2) + this.currencyType.denomination);
        
      }
      
      
    withdraw(aAmount, aType = CurrencyTypes.NOK) {
        let canWithdraw = true;
        
        const newAmount = aAmount / this.currencyConvert(aType);
        switch (this.type) {
          case AccountType.Savings:
            if (this.withdrawCount < 3) {
              this.withdrawCount++;
              canWithdraw = true;
            } else {
              canWithdraw = false;
              printOut("Cannot withdraw more than 3 times from a " + this.type + " account.");
            }
            break;
          case AccountType.Pension:
            canWithdraw = false;
            printOut("Cannot withdraw from a " + this.type + " account.");
            break;
        }
    
        if (canWithdraw) {
          this.balance -= newAmount;
          printOut("Withdraw of " + aAmount + " " + aType.name + ", new balance is " + this.balance.toFixed(2) + this.currencyType.denomination);
        }
        
    
    }
  
    setCurrencyType(aNewCurrencyType) {
        if(this.currencyType === aNewCurrencyType){
          return;
        }
        this.balance = this.balance * this.currencyConvert(aNewCurrencyType);
        printOut("The account currency has been changed from " + this.currencyType.name + " to " + aNewCurrencyType.name + ". ");
        printOut("New balance is " +  this.balance.toFixed(2) + aNewCurrencyType.denomination);
        this.currencyType = aNewCurrencyType;
        
      }
    
    
      currencyConvert(aType){
      return CurrencyTypes.NOK.value / this.currencyType.value * aType.value;
    }

}




printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/


  printOut(Object.values(AccountType).join(', '));

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let myAccount = new TAccount(AccountType.Normal);

printOut("myAccount = " + myAccount.toString() )

myAccount.setType(AccountType.Savings);

printOut("myAccount = " + myAccount.toString());


printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.deposit(100);
myAccount.withdraw(25);
printOut("My account balance is: " + myAccount.getBalance());



printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.deposit(25);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.setType(AccountType.Pension);
myAccount.deposit(5);
myAccount.withdraw(15);
myAccount.setType(AccountType.Savings);
myAccount.withdraw(15);



printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.deposit(150);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.setCurrencyType(CurrencyTypes.SEK);
myAccount.setCurrencyType(CurrencyTypes.USD);
myAccount.setCurrencyType(CurrencyTypes.NOK);


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.deposit(12, CurrencyTypes.USD);
myAccount.withdraw(10, CurrencyTypes.GBP);
myAccount.setCurrencyType(CurrencyTypes.CAD);
myAccount.setCurrencyType(CurrencyTypes.INR);
myAccount.withdraw(150.1586, CurrencyTypes.SEK);


printOut(newLine);

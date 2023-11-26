import { TransactionRepository } from "./Transaction";

export class Account {
    constructor(private repository: TransactionRepository) {}
    
    deposit(number: number) {
     this.repository.addDeposit(number);
    }
    
    withdraw(number: number) {
        this.repository.addWithdrawal(number);
    }
  
    printStatement() {}
}
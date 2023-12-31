import { Clock } from "../../core/Clock";
import { Transaction } from "../../core/Transaction";
import { TransactionRepository } from "../../core/TransactionRepository";

describe('The Transaction Repository', () => {
    const today = '23/04/2023';
    const clock = new Clock();    
    clock.getDateAsString = () => today;
    let repository;

    beforeEach(()=>{
        repository = new TransactionRepository(clock);
    });

    it('stores a deposit for a given amount', () =>{
       
       const amount = 100;
       
       repository.addDeposit(amount);
       
       const transactions = repository.allTransactions();
       expect(transactions[0]).toEqual(new Transaction(today, amount));
    });
    it('stores a withdrawal for a given amount', () =>{
       
        const amount = 100;
        
        repository.withdrawDeposit(amount);
        
        const transactions = repository.allTransactions();
        expect(transactions[0]).toEqual(new Transaction(today, -amount));
     });
});
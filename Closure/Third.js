/**
 * Encapsulation
 */



function BankAccount()
{
  let  bankbalance=35000;

    function deposit(v)
    {
        bankbalance=bankbalance+v;
        console.log("new Bank Balance:"+bankbalance);
        
    }

    function withdraw(v)
    {
         bankbalance=bankbalance-v;
         console.log("remaining balnce:"+bankbalance);
         
    }

    function display()
    {
        console.log("balance is:"+bankbalance);
        
    }

    return[display,withdraw,deposit];
}


let[display,withdraw,deposit]=BankAccount();


display();
withdraw(2000);
display();
deposit(100000);

console.log(bankbalance);

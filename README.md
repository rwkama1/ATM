# ATM

## Description

Basic operations for an ATM

## Usage

```Javascript

 let ATM=require("./ATM").ATM;


        const show_check_balance=(pass)=>
        {
        let result=atm.verify_password(pass);
        if(result===false)
        {
            console.log("                    ");
            console.log("The password is wrong");
           
        }
        else
        {
            console.log("                    ");
            console.log("Your current balance is: "+ atm.check_balance());
        }
       
        }
        const show_enter_balance=(deposit,pass)=>
        {
           
            let result=atm.verify_password(pass);
            if(result===false)
            {
                console.log("                    ");
                console.log("The password is wrong");
               
            }
            else{
                console.log("                                                    ");
                console.log("Your deposited amount is: "+ deposit);
                console.log("                                                    ");
               let newbalance= atm.enter_balance(deposit);
               atm.balance=newbalance;
                console.log("Your current balance is: "+ atm.check_balance());
            }
         
        }
        const  show_withdraw_balance=(withdrawal,pass)=>
        {
            let result=atm.verify_password(pass);
            if(result===false)
            {
                console.log("                    ");
                console.log("The password is wrong");
              
            }
           else{
            console.log("                                                    ");
            console.log("Your amount to withdraw is: "+ withdrawal);
            let resul=atm.withdraw_balance(withdrawal);
            if(resul===false)
            {
                console.log("                                                    ");
                console.log("The amount entered exceeds the balance");

            }
            else{
                console.log("                                                    ");
                atm.balance=newbalance;
                console.log("Your current balance is: "+ atm.check_balance());
            }
            
           }
          
        }
        
       let atm=new ATM(0,"asd");

        show_check_balance("asd");
        show_enter_balance(22.66,"asd");
        show_enter_balance(33.25,"asd");
        show_withdraw_balance(89.52,"asd");




```
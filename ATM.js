class ATM
{
  
    constructor(pbalance,ppassword)
    {
        this.balance=pbalance;
        this.password=ppassword;
    }
    check_balance=()=>
    {
        let bal= this.balance;
        return bal;
    }
    enter_balance=(deposit)=>
    {
        let bal= this.balance;
        bal=bal+deposit;
        return bal

    }
    withdraw_balance=(withdrawal)=>
    {
        let bal= this.balance;
        if(withdrawal>bal)
        {
            return false;
        }
        else
        {
            bal=bal-withdrawal;
            return bal
        }

    }
    verify_password=(enter_password)=>
    {
        let pass=this.password;
        if(enter_password===pass)
        {
            return true
        }
        if(enter_password!=pass)
        {
            return false;
        }
    }

}
module.exports={ATM}
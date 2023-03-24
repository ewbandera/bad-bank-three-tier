import React from 'react';
import {UserContext,Card} from './context'
function Withdraw(){
  const ctx = React.useContext(UserContext);
  const [amount, setAmount] = React.useState(0);
  const [status, setStatus]     = React.useState('');
  const [show, setShow]         = React.useState(true);
  const [btDisabled, setBtDisabled] = React.useState(true);

  function handleWithdraw() {
    if(validate(amount)) {
      ctx.currentUser.balance = (Number(ctx.currentUser.balance) - Number(amount)).toFixed(2);
      setStatus('The Withdraw Is Completed');
      setShow(false);
    }
  }

  function handleChange(input)
  {
     if(validate(input))
     {
      setBtDisabled(false);
      setStatus('');
      setAmount(input);
     }
     else{
      setBtDisabled(true);
     }
  }
  function validate(input)
  {
    if(!validateHasContent(input)){
      setStatus('');
      return false;
    }
    if(!validateIsNumber(input)){
      setStatus('Please enter a numerical value');
      return false;
    }
    if(!validateIsGreaterThanZero(input)){
      setStatus('Please enter a value greater than $0');
      return false;
    }
    if(!validateHasEnoughForTransaction(input)){
      setStatus('The transaction cannot be completed.  Please see our credit department for a loan.  Interest rates start as low as 17.99%');
      return false;
    }
    return true;
  }
  const validateHasContent = (input)=> (input.length>0);
  const validateHasEnoughForTransaction = (input) => (Number(input)<=Number(ctx.currentUser.balance));
  const validateIsNumber = (input)  => (!isNaN(input));
  const validateIsGreaterThanZero = (input) => (Number(input)>0);
  
  function isLoggedIn() {
    let results = (ctx.currentUser!=undefined);
    return results;
  }
  function clearForm()  {
    setAmount(0);
    setShow(true);
    setBtDisabled(true);
    setStatus('');
  }
  return (
    <>
    <h1>Withdraw</h1>
    <Card
      txtcolor="black"
      bgcolor="#D7E4EA"
      status={status}
      body={  
        show ? (
          (isLoggedIn())? (
            <table className="cardTable">
              <tbody>
                <tr><td width="80%">Balance</td><td>$ {ctx.currentUser.balance}</td></tr>
                <tr>
                  <td colSpan="2">Withdraw Amount<br/>
                    <div className="moneyInput">
                      <input type="text" min="0.01" step="0.01" max="2500" className="form-control" id="amount" onChange={e => handleChange(e.currentTarget.value)}/>
                    </div>
                    
                  </td>
                </tr>
                <tr><td colSpan="2" className="cardBtn"><button type="submit" disabled={btDisabled} className="btn btn-light" onClick={handleWithdraw}>Withdraw</button></td></tr>
              </tbody>
            </table>):(
              <>
              <p>You must be logged in to access this feature</p>
              <a href="#/login/" className="btn btn-light">Login</a>
              </>
            )    
        ):(
          <>
          <h5>Success</h5>
          <button type="submit" className="btn btn-light" onClick={clearForm}>Ok</button>
        </>
        )
      }
    />
    </>
  );
}
export default Withdraw;

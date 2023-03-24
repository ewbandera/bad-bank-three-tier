import React from 'react';
import {UserContext,Card} from './context';

function CreateAccount(){
  const [show, setShow]         = React.useState(false);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);  

  function validate(field, label){
      if (!field) {
        setStatus(`The ${label} field is missing`);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }
  function ValidateEmail(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.match(validRegex)) {
      return true;
    }
    else{
      setStatus('Email not in valid form');
      setTimeout(() => setStatus(''),3000);
      return false
    }
  }
  function validatePassword(input)
  {
    var validRegex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/;
    if (input.match(validRegex)) {
      return true;
    }
    else{
      setStatus('Password must have one upper, one lower, a special character, and be length 8');
      setTimeout(() => setStatus(''),3000);
      return false
    }
  }

  function handleCreate(){
    console.log(name,email,password);
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    if(!ValidateEmail(email)) return;
    if(!validatePassword(password)) return;
    if(ctx.users==undefined){
      ctx.users = [];
    }
    ctx.users.push({name,email,password,balance:100});
    alert('Successfully Created Account');
    clearForm();
    setStatus('');
    setShow(true);
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    
  }

  return (
    <>
    <h1>Create Account</h1>
    <Card
      bgcolor="#30718E"
      status={status}
      body={  !show ?(
              <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <div className="cardBtn">
                <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
              </div>
              </>):(
                <div className="cardBtn">
                  <button type="submit" className="btn btn-light" onClick={()=>setShow(false)}>Create Another Account</button>
                </div>

              )
            } />
    
    </>
  )
}
export default CreateAccount;
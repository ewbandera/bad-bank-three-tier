import React from 'react';
import {UserContext,Card} from './context'

function Login(props){
  const ctx = React.useContext(UserContext);
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [status, setStatus]     = React.useState('');
  const [show, setShow]         = React.useState(true);

  function handleLogin() {
    const currentLoginUser = ctx.users.filter(x => x.email===email);
    console.log(currentLoginUser.length);
    console.log(JSON.stringify(currentLoginUser));
    if(currentLoginUser.length===1 && currentLoginUser[0].password===password)
    {
      console.log(password);
      ctx.currentUser = currentLoginUser[0];
      console.log(JSON.stringify(ctx));
      setStatus('You Are Successfully Logged In');
      setShow(false);
      props.reloadCallback(ctx);
    }
    else{
      ctx.currentUser = null;
      setStatus('Error: Not Authenticated');
      setTimeout(() => setStatus(''),3000);
    }

  }
  function clearForm()
  {
    setEmail('');
    setPassword('');
    setShow(true);
    setStatus('');
  }
  return (
    <>
    <h1>Login</h1>
    <Card
      bgcolor="#30718E"
      header="Please Login"
      status={status}
      body={show ? (  
        <>
        Email<br/>
        <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br/>
        Password<br/>
        <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
        <div className="cardBtn">
          <a id="loginButton" type="submit" className="btn btn-light" href="#/" onClick={handleLogin}>Login</a>
        </div>
        </>
      ):(
        <>
          <h5>Success</h5>
          <button type="submit" className="btn btn-light" onClick={clearForm}>Ok</button>
        </>
      )}             
    />
    </>
  );
    
   
}

export default Login;

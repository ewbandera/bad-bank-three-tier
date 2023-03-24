import React from 'react';
import {UserContext,Card} from './context'

function Home(props){
  const ctx = React.useContext(UserContext);
  function HandleAutomaticLogin() {
    const currentLoginUser = ctx.users.filter(x => x.email==='ericbandera@gmail.com');
    ctx.currentUser = currentLoginUser[0];
    props.reloadCallback(ctx);
    
  } 
  function isLoggedIn() {
    let results = (ctx.currentUser!=undefined);
    return results;
  } 
  function getTitle(){
    return (isLoggedIn())? `Welcome ${ctx.currentUser.name}!`:"Welcome - Please log in!"; 
  }
  return (
    <>
    <h1>Home Page</h1>
    <Card
    bgcolor="#D7E4EA"
      txtcolor="black"
      header="The Baddest Bank since 1957"
      title={getTitle()}
      body={(<>
      <img src='images/bank.png' className="img-fluid" alt="Responsive image"/>
      <p>For Testing and demonstration purpose, default user is ericbandera@gmail.com and password is 1234
      </p>
      <div className="cardBtn">
        <button className="btn btn-dark" onClick={HandleAutomaticLogin}>Automatic Login for Demo</button>
      </div>
      </>
      )}
    />    
    </>
  );  
}
export default Home;

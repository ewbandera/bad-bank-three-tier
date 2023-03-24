import React from 'react';
import {UserContext,Card} from './context'
function Logout(props){
    const ctx = React.useContext(UserContext);
   
  
    function handleLogout() {
      if(ctx.hasOwnProperty('currentUser'))
      {
        delete ctx.currentUser;
      }       
      props.reloadCallback(ctx);  //updates the navbar - calls refresh method in App which saves context in state, and reloads page
    }
    function isLoggedIn() {
      return (ctx.currentUser);
    }
    return (
      <>
      <h1>Logout</h1>
      {
      (isLoggedIn())?(      
      <Card
        bgcolor="#D7E4EA"
        txtcolor="black"
        header="Logout"
        status=""
        body={
          <>
            <h5>Please Click Ok to Confirm Logout User {ctx.currentUser.name}</h5>
            <div className="cardBtn">
              <a className="btn btn-light" onClick={handleLogout} href="#/">Ok</a>
            </div>
            
          </>
        }             
      />
    ):(
      <Card
        bgcolor="warning"
        txtcolor="black"
        header="Logout"
        status=""
        body={
          <h5>No users currently logged in</h5>
        }             
      />
    )}</>);
      
     
  }
  
  export default Logout;
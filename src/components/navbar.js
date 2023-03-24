import React from 'react';
import {UserContext} from './context'
function NavBar(){
  const ctx = React.useContext(UserContext);
  function isLoggedIn() {
    let results = (ctx.currentUser!=undefined);
    return results;
  }

  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-inverse">
      <div className = "container-fluid">
        <a className="navbar-brand nav-link" href="#" data-toggle="tooltip" title="Click here to go back to the homepage">Bad Bank</a>
        
          
          <ul className="nav navbar-nav navbar-right">
            {(!isLoggedIn()) ? (
             <>
            <li className="nav-item">
              <a className="nav-link"  style={{paddingTop:'15px'}} href="#/alldata/" data-toggle="tooltip" title="View the app data">All Data</a>
            </li> 
             <li className="nav-item"><a href="#/createaccount/" data-toggle="tooltip" title="Get started with a new account" className="nav-link"><span className="fa-stack fa-lg">
               <i className="fa fa-square-o fa-stack-2x"></i>
               <i className="fa fa-user fa-stack-1x"></i>
               </span> Create Account</a>
             </li>
             <li className="nav-item"><a href="#/login/" className="nav-link" id="loginControl" data-toggle="tooltip" title="Sign in to an existing account"><span className="fa-stack fa-lg">
               <i className="fa fa-sign-in fa-stack-2x" aria-hidden="true"></i>            
               </span> Login</a>
            </li>
            </>          
            ):(
              <>
              <li className="nav-item">
                <a className="nav-link" style={{paddingTop:'15px'}} data-toggle="tooltip" title="Deposit funds into your account" href="#/deposit/">Deposit</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{paddingTop:'15px'}} href="#/withdraw/" data-toggle="tooltip" title="Withdraw funds from your account">Withdraw</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{paddingTop:'15px'}} href="#/alldata/" data-toggle="tooltip" title="View the app data">All Data</a>
              </li> 
              <li className="nav-item"><a href="#/logout/" className="nav-link" data-toggle="tooltip" title="Sign out"><span className="fa-stack fa-lg">
              <i className="fa fa-square-o fa-stack-2x"></i>
              <i className="fa fa-user fa-stack-1x"></i>
              </span> Logout {ctx.currentUser.name}</a>
            </li>
            </>
            )}
          
        </ul>
      </div>
    </nav>
    
    </>
  );
}
export default NavBar;
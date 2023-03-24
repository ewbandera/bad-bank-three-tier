import React from 'react';
import {Route, HashRouter} from 'react-router-dom';
import AllData from './components/alldata';
import CreateAccount from './components/createaccount';
import Deposit from './components/deposit';
import Home from './components/home';
import Login from './components/login';
import Logout from './components/logout';
import NavBar from './components/navbar';
import Withdraw from './components/withdraw';
import {UserContext} from './components/context'

function App() {
  const [reload, setReload] = React.useState(false);
  const[state,setState] = React.useState({users:[{name:'Eric Bandera',email:'ericbandera@gmail.com',password:'1234',balance:100}]})
  function doRefresh(context){
    setState(context);
    setReload(!reload); //will toggle so that it changes every time
  }
  return (
    
    <HashRouter>
      
      <UserContext.Provider value={state}>
        <NavBar/>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact render={(props)=><Home {...props} reloadCallback={doRefresh} />} />
          <Route path="/createaccount/" component={CreateAccount} />
          <Route path="/login/" render={(props)=><Login {...props} reloadCallback={doRefresh} />} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/alldata/" component={AllData} />
          <Route path="/logout/" render={(props)=><Logout {...props} reloadCallback={doRefresh} />} />
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

export default App;

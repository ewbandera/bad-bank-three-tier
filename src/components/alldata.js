import React from 'react';
import { Table} from 'react-bootstrap';
import {UserContext,Card} from './context'

function AllData(){
  const ctx = React.useContext(UserContext);
  function getRows(){
    return  ctx.users.map((item,i)=>
      <tr key={i}>
        <td>{item.email}</td>
        <td>{item.name}</td>
        <td>{item.password}</td>
      </tr>
      );
  }
  return (
    <>
    
    <Card
    header="All Data In Store"
      txtcolor="black"
      bgcolor="#FFFFF"
      width="100%"
      text="User's In Sytstem"
      body={
          <>
            <Table striped bordered>
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Name</th>
                  <th>Password</th>
                </tr>
              </thead>
              <tbody>{getRows()}
              </tbody>
            </Table>
            <p>Data Dump</p>
            {JSON.stringify(ctx)}
          </>
          } />
    </>
  );
}
export default AllData;

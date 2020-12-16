import React, {Component} from 'react';
import Data from "../employeesdata.json";
import "./style.css";

class Table extends Component {

    state= {
        employees: Data
    }

  render(){
    return (
        <>
        <h1> Employee Directory </h1>
        <table className="table-primary">
            <tr>
                <th>id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Role</th>
                <th>Email</th>
            </tr>
            {
             this.state.employees.map((employee)=>
             <tr>
                <td>{employee.id}</td>
                <td>{employee.FirstName}</td>
                <td>{employee.LastName}</td>
                <td>{employee.Role}</td>
                <td>{employee.Email}</td>
            </tr>
             )
            }
            {/* <tr>
                <td>Test</td>
            </tr> */}
        </table>
        </>
    );
  }
}

export default Table;
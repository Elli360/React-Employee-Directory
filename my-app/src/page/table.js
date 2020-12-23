import React, {Component} from 'react';
import axios from "axios";
import "./style.css";
import Searchbar from "./searchbar.js";


class Table extends Component {

    state= {
        employees:[]
        // axios.get("https://randomuser.me/api/?results=200&nat=us")
    }

    componentDidMount = () => {
        console.log("ComponentMount");
        axios.get("https://randomuser.me/api/?results=200&nat=us").then((res)=>{
            this.setState({employees:res.data.results});
            console.log("RES",res.data.results);
        })

    }

  render(){
      console.log("employees", this.state.employees)
    return (
        <>
        <h1> Employee Directory </h1>
        <Searchbar></Searchbar>
        <table className="table-primary">
            <tr>
                <th>Id</th>
                <th>Last Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th>Email</th>
            </tr>
            {
             this.state.employees.map((employee)=>
             <tr>
                <td>{employee.id.value}</td>
                <td>{employee.name.first}</td>
                <td>{employee.name.last}</td>
                <td>{employee.phone}</td>
                <td>{employee.email}</td>
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
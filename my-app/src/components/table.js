import React, {Component} from 'react';
import axios from "axios";
import "./style.css";
import Searchbar from "./searchbar.js";


class Table extends Component {

    state= {
        employees:[],
        searchEmployees:[{}]
        // axios.get("https://randomuser.me/api/?results=200&nat=us")
    }

    componentDidMount = () => {
        console.log("ComponentMount");
        axios.get("https://randomuser.me/api/?results=200&nat=us").then((res)=>{
            this.setState({employees:res.data.results});
            console.log("RES",res.data.results);
        })

    }
    handleSearchChange= event => {
        const search=event.target.value;
        const searchList=this.state.employees.search(item => {
            let values=Object.values(item)
            .join("")
            .toLowerCase();
            return values.indexOf(search.toLowerCase()) !== -1;
    });
        this.setState({searchEmployees:searchList});
}

  render(){
      console.log("employees", this.state.employees)
    return (
        <div className="Table-area">
        <h1> Employee Directory </h1>
        <Searchbar handleSearchChange={ handleSearchChange }/>
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
        </table>
        </div>
    );
  }
}

export default Table;
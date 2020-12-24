// // import React, {Component} from 'react';
// // import axios from "axios";
// // import Searchbar from "./searchbar.js";

// class Searchdata extends Component {

//     state= {
//         employees:[],
//         searchEmployees:[{}]
//     }
//     handleSearchChange= event => {
//         const search=event.target.value;
//         const searchList=this.state.employees.search(item => {
//             let values=Object.values(item)
//             .join("")
//             .toLowerCase();
//             return values.indexOf(search.toLowerCase()) !== -1;
//     });
//         this.setState({searchEmployees:searchList});
// }
// render(){
//     console.log("employees", this.state.employees)
//   return (
//       <div className="search-area">
//       <Searchbar value={this.handleSearchChange}
//       handleSearchChange={handleSearchChange}/>
//       <table className="table-search">
//           <tr>
//               <th>Id</th>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Phone</th>
//               <th>Email</th>
//           </tr>
//           {
//            this.state.employees.map((employee)=>
//            <tr>
//               <td>{employee.id.value}</td>
//               <td>{employee.name.first}</td>
//               <td>{employee.name.last}</td>
//               <td>{employee.phone}</td>
//               <td>{employee.email}</td>
//           </tr>
//            )
//           }
//       </table>
//       </div>
//   );
// }
// }

// export default Table;
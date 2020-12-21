import React, {Component} from 'react';
import Table from "./page/table";


class App extends Component {

  render(){
    return (
      <Table />
    );
  }
}

export default App;






// Question 1 for TA
// Where to add the API call? do i need a components folder?
// Source Activity 19
// import React from "react";
// import SearchResultContainer from "./components/SearchResultContainer";

// function App() {
//   return <SearchResultContainer />;
// }

// export default App;
//Question 2
// Source Activity 19
// Do I need a Utils folder> file API.js for the axious
// import axios from "axios";

// const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
// const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

// // Export an object with a "search" method that searches the Giphy API for the passed query
// export default {
//   search: function(query) {
//     return axios.get(BASEURL + query + APIKEY);
//   }
// };


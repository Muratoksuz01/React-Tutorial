import React, { Component } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Users from "./components/Users"
import AddUser from "./components/AddUser";
class App extends Component {
 
  render() {
    return (
      <div className="container">
       
        <Navbar title="user App" />
        <hr />
        <AddUser/>
        <Users />
        

      </div>
    );
  }
}

export default App;

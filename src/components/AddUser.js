import React, { Component } from 'react';
import { motion } from 'framer-motion';
import UserConsumer from "../context"
import axios from 'axios';
var uniqid=require("uniqid")

class AddUser extends Component {
  state = {
    visible: true,
    name:"",departmant:"",salary:""
  };

  changeVisibility = () => {
    this.setState({
      visible: !this.state.visible,

    });
  };
  changeInput=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  AddUser= async(dispatch,e)=>{
    e.preventDefault()
    const {name,departmant,salary}=this.state
    var newUser={
      id:uniqid(),
      name,
      departmant,
      salary
    }
    const response=await axios.post("http://localhost:3004/users",newUser)
    console.log(newUser)
    dispatch({type:"ADD_USER",payload:newUser})
  }

  render() {
    const { visible,name,departmant,salary } = this.state;
    return(
      <UserConsumer>
        {
          value=>{
            const {dispatch}=value
            return (
              <div className="col-md-8 mb-4">
                <div className="d-grid gap-2">
                  <button
                    onClick={this.changeVisibility}
                    className="btn btn-dark btn-block mb-2">
                    {visible ? 'Hide Form' : 'Show Form'}
                  </button>
                </div>
        
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: visible ? 1 : 0,
                    height: visible ? 'auto' : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div className="card">
                    <div className="card-header">
                      <h4>Add User Form</h4>
                    </div>
                    <div className="card-body">
                      <form onSubmit={this.AddUser.bind(this,dispatch)}>
                        <div className="form-group">
                          <label htmlFor="name">Name</label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter name"
                            className="form-control"
                            value={name}
                            onChange={this.changeInput}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="departmant">departmant</label>
                          <input
                            type="text"
                            name="departmant"
                            id="departmant"
                            placeholder="Enter departmant"
                            className="form-control"
                            value={departmant}
                            onChange={this.changeInput}
        
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="salary">Salary</label>
                          <input
                            type="text"
                            name="salary"
                            id="salary"
                            placeholder="Enter salary"
                            className="form-control"
                            value={salary}
                            onChange={this.changeInput}
                          />
                        </div>
                        <div className="d-grid gap-2">
                          <button className="btn btn-primary" type="submit">Add user</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          }
        

        }
      </UserConsumer>
    )





    
  }
}

export default AddUser;

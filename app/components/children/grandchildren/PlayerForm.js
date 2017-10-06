var React = require("react");
var Link = require("react-router").Link;
import axios from 'axios';

var PlayerForm = React.createClass({

getInitialState: function(){
    return {
      firstName: "",
      lastName: "",
      age: "",
      parentGuardian: "",
      phone: "",
      email: ""
    }
  },

  handleChange: function(e){
      var state = this.state
      state[e.target.id] = e.target.value;
      this.setState(state);
  },

  handleClick: function(e){
    e.preventDefault();  
    axios.post('/players/new',{
      firstName: this.state.firstName, 
      lastName: this.state.lastName,
      age: this.state.age,
      parentGuardian: this.state.parentGuardian, 
      phone: this.state.phone, 
      email: this.state.email
    });
  },


  render: function() {
    return (
      <div className="panel panel-default form-panel">
        <div className="panel-heading">
          <h3 className="panel-title">Add a Player</h3>
        </div>
        <div className="panel-body">
          <form>
            <div className="form-group">
              <label className="">First Name</label>
              <input type="text" className="form-control text-center" id="firstName" value={this.state.value} onChange= {this.handleChange} required/>

              <label className="">Last Name</label>
              <input type="text" className="form-control text-center" id="lastName" value={this.state.value} onChange= {this.handleChange} required/>

              <label className="">Age</label>
              <input type="text" className="form-control text-center" id="age" value={this.state.value} onChange= {this.handleChange} required/>

              <label className="">Parent or Guardian Name</label>
              <input type="text" className="form-control text-center" id="parentGuardian" value={this.state.value} onChange= {this.handleChange} required/>

              <label className="">Phone Number</label>
              <input type="text" className="form-control text-center" id="phone" value={this.state.value} onChange= {this.handleChange} required/>

              <label className="">E-mail</label>
              <input type="text" className="form-control text-center" id="email" value={this.state.value} onChange= {this.handleChange} required/>
              <br />
              
              <button type="button" className="btn btn-primary" onClick={this.handleClick}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = PlayerForm;
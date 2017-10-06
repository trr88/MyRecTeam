var React = require("react");
var Link = require("react-router").Link;
import axios from 'axios';

var TeamForm = React.createClass({

  getInitialState: function(){
    return {
      teamsName: "",
      coachFirstName: "",
      coachLastName: "",
      coachPhone: "",
      coachEmail: ""
    }
  },

  handleChange: function(e){
      var state = this.state
      state[e.target.id] = e.target.value;
      this.setState(state);
  },

  handleClick: function(e){
    e.preventDefault();  
    axios.post('/teams/new',{
      teamsName: this.state.teamsName, 
      coachFirstName: this.state.coachFirstName,
      coachLastName: this.state.coachLastName,
      coachPhone: this.state.coachPhone, 
      coachEmail: this.state.coachEmail
    });
    this.setState({
      teamsName: "",
      coachFirstName: "",
      coachLastName: "",
      coachPhone: "",
      coachEmail: ""
    });
    teamsName.value = "";
    coachFirstName.value = "";
    coachLastName.value = "";
    coachPhone.value = "";
    coachEmail.value = "";
  },

  render: function() {
    return (
      <div className="panel panel-default form-panel">
        <div className="panel-heading">
          <h3 className="panel-title">Create a Team</h3>
        </div>
        <div className="panel-body">
          <form>
            <div className="form-group">             

              <label className="">Team Name</label>
              <input type="text" className="form-control text-center" id="teamsName" value={this.state.value} onChange= {this.handleChange} required/>

              <label className="">Coach's First Name</label>
              <input type="text" className="form-control text-center" id="coachFirstName" value={this.state.value} onChange= {this.handleChange} required/>

              <label className="">Coach's Last Name</label>
              <input type="text" className="form-control text-center" id="coachLastName" value={this.state.value} onChange= {this.handleChange} required/>

              <label className="">Coach Phone Number</label>
              <input type="text" className="form-control text-center" id="coachPhone" value={this.state.value} onChange= {this.handleChange} required/>

              <label className="">Coach's E-mail</label>
              <input type="text" className="form-control text-center" id="coachEmail" value={this.state.value} onChange= {this.handleChange} required/>
              <br />
              
              <button type="button" className="btn btn-primary" onClick={this.handleClick}>Submit</button>
            
            </div>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = TeamForm;
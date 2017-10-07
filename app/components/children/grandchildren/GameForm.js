var React = require("react");
var Link = require("react-router").Link;
import axios from 'axios';

var GameForm = React.createClass({
  getInitialState: function(){
    return {
      visitingTeam: "",
      homeTeam: "",
      start: "",
      end: "",
      park: ""
    }
  },

  handleChange: function(e){
      var state = this.state
      state[e.target.id] = e.target.value;
      this.setState(state);
  },

  handleClick: function(e){
    e.preventDefault();  
    axios.post('/games/new',{
      visitingTeam: this.state.visitingTeam, 
      homeTeam: this.state.homeTeam,
      startTime: this.state.start,
      endTime: this.state.end, 
      park: this.state.park
    });
  },


  render: function() {
    return (
      <div className="panel panel-default form-panel">
        <div className="panel-heading">
          <h3 className="panel-title">Add a Game</h3>
        </div>
        <div className="panel-body">
          <form>
            <div className="form-group">
              <label className="">Visiting Team</label>
              <input type="text" className="form-control text-center" id="visitingTeam" value={this.state.value} onChange= {this.handleChange} required/>

              <label className="">Home Team</label>
              <input type="text" className="form-control text-center" id="homeTeam" value={this.state.value} onChange= {this.handleChange} required/>

              <label className="">Start Time</label>
              <input type="text" className="form-control text-center" id="start" value={this.state.value} onChange= {this.handleChange} required/>

              <label className="">End Time</label>
              <input type="text" className="form-control text-center" id="end" value={this.state.value} onChange= {this.handleChange} required/>

              <label className="">Park and Field</label>
              <input type="text" className="form-control text-center" id="park" value={this.state.value} onChange= {this.handleChange} required/>
              <br/>
              
              <button type="button" className="btn btn-primary" onClick={this.handleClick}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = GameForm;
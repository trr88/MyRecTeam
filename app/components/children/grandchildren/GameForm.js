var React = require("react");
var Link = require("react-router").Link;
import axios from 'axios';

var GameForm = React.createClass({

getInitialState: function(){
    return {
      visitingTeam: "",
      homeTeam: "",
      startTime: "",
      endTime: "",
      park: "",
      teams: []
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
      visitingTeam: this.state.firstName, 
      homeTeam: this.state.homeTeam,
      startTime: this.state.startTime,
      endTime: this.state.endTime, 
      park: this.state.park
    });
  },
  componentDidMount :  function(){
    var _this = this;
    axios.get("/games").then(function(response) {
      _this.setState({
        teams: response.data.teamsName
      })
    })
  },

  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Schedule a Game</h3>
        </div>
        <div className="panel-body">
          <form>
            <div className="form-group">
              <div className="dropdown">
                <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                  Select Visiting Team 
                  <span className="caret"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li>list of team names</li>
                </ul>
              </div>
              <br />
              <div className="dropdown">
                <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                  Select Home Team
                  <span className="caret"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li>list of team names</li>
                </ul>
              </div> 
              <br />                   
              <button type="button" className="btn btn-primary" onClick={this.handleClick}>Create Game</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = GameForm;
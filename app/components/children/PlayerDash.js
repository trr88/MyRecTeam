var React = require("react");
var Link = require("react-router").Link;
import axios from 'axios';

var PlayerForm = require("../children/grandchildren/PlayerForm");

var PlayerDash = React.createClass({

  getInitialState : function(){
    return {
      data: []   
    };
  },

  componentDidMount : function (){
    var _this = this;
    axios.get('/players').then(function(response){
      _this.setState({
        data: response.data,
      });
    });
  },

  /*componentDidUpdate : function(){
    var _this = this;
    axios.get('/players').then(function(response){
      _this.setState({
        cols: _this.state.cols,
        data: JSON.stringify(response.data)
      });
    });
  },*/


  render: function() {
    return (

      <div className="row">
        <div className="col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Current Players</h3>
            </div>
            <div className="panel-body">
              <p>list of players</p>
              <div>
                {this.state.data.map(function(player, i){
                  return <p key={i}>{player.firstName}</p>
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row"><PlayerForm /></div>
        </div>
      </div>
    );
  }
});

module.exports = PlayerDash;


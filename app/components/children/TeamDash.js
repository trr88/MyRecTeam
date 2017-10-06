var React = require("react");
var Link = require("react-router").Link;
import axios from 'axios';

var TeamForm = require("../children/grandchildren/TeamForm");

var TeamDash = React.createClass({

  getInitialState : function(){
    return {
      data : []
    };
  },

  componentDidMount : function (){
    var _this = this;
    axios.get('/teams').then(function(response){
      _this.setState({
        cols: _this.state.cols,
        data: JSON.stringify(response.data)
      });
    });
  },

  render: function() {
    return (

      <div className="row">
        <div className="col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Current Teams</h3>
            </div>
            <div className="panel-body">
              <p>Will eventually hold the team list.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row"><TeamForm /></div>
        </div>
      </div>
    );
  }
});

module.exports = TeamDash;
var React = require("react");
var Link = require("react-router").Link;
var PlayerForm = require("../children/grandchildren/PlayerForm");

var PlayerDash = React.createClass({
  render: function() {
    return (

      <div className="row">
        <div className="col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Current Players</h3>
            </div>
            <div className="panel-body">
              <p>Will eventually hold the player list.</p>
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
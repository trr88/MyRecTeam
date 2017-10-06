var React = require("react");
var Link = require("react-router").Link;
var Calendar = require("../children/grandchildren/Calendar");
var GamesForm = require("../children/grandchildren/GamesForm");
/*var Weather = require("../children/grandchildren/Weather");*/


var GameDash = React.createClass({
  render: function() {
    return (

      <div className="row defaultMargin">
        <div className="col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Upcoming Games</h3>
            </div>
            <div className="panel-body">
              <div><Calendar /></div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row"><GamesForm /></div>
          <div className="row">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Weather Panel</h3>
              </div>
              <div className="panel-body">
                <p>Will eventually hold the weather api.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
});

module.exports = GameDash;
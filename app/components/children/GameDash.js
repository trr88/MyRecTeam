var React = require("react");
var Link = require("react-router").Link;
var Calendar = require("../children/grandchildren/Calendar");
<<<<<<< HEAD
var GamesForm = require("../children/grandchildren/GamesForm");
/*var Weather = require("../children/grandchildren/Weather");*/
=======
var GameForm = require("../children/grandchildren/GameForm");
var Weather = require("../children/grandchildren/Weather");
>>>>>>> ec34d82023498963fa7bae2def1a0075c99ff43d


var GameDash = React.createClass({

  render : function() {
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
                <h3 className="panel-title">Current Weather</h3>
              </div>
              <div className="panel-body">
                <Weather />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
});

module.exports = GameDash;


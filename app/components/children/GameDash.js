var React = require("react");
var Link = require("react-router").Link;
var Calendar = require("../children/grandchildren/Calendar.js");

var GameDash = React.createClass({
  render: function() {
    return (

      <div className="container-fluid">

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
            <div className="row">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Schedule a Game</h3>
              </div>
              <div className="panel-body">
                <form>
                  <div className="form-group">
                    <div className="dropdown">
                      <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Select First Team
                        <span className="caret"></span>
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li><a href="#">list of team names</a></li>
                      </ul>
                    </div>
                    <br />
                    <div className="dropdown">
                      <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Select Second Team
                        <span className="caret"></span>
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li><a href="#">list of team names</a></li>
                      </ul>
                    </div> 
                    <br />                   
                    <button type="button" className="btn btn-primary" onClick={this.handleClick}>Create Game</button>
                  </div>
                </form>
              </div>
            </div>
            </div>
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
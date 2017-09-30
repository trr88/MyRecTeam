var React = require("react");
var Link = require("react-router").Link;

var GameForm = React.createClass({
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
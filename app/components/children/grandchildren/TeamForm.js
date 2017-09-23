var React = require("react");
var Link = require("react-router").Link;

var TeamForm = React.createClass({
  render: function() {
    return (
      <div className="panel panel-default form-panel">
        <div className="panel-heading">
          <h3 className="panel-title">Manage Teams</h3>
        </div>
        <div className="panel-body">
          <form>
            <div className="form-group">
              <div className="dropdown">
                <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                  Select a Team
                  <span className="caret"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li>list of team names</li>
                </ul>
              </div>
              <br />                   
              <button type="button" className="btn btn-primary" onClick={this.handleClick}>Update Team</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = TeamForm;
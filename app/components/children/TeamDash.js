var React = require("react");
var Link = require("react-router").Link;

var TeamDash = React.createClass({
  render: function() {
    return (

      <div className="container-fluid">

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
            <div className="row">
            <div className="panel panel-default">
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
            </div>
          </div>
      </div>
    );
  }
});

module.exports = TeamDash;
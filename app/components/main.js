var React = require("react");
var Link = require("react-router").Link;

var Main = React.createClass({

  render: function() {

    return (

      <div className="container-fluid defaultShadow">
        <div className="row">
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand nav-text dashNav" href="#">MyRecTeam</a>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle nav-text" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pick a League <span className="caret"></span></a>
                            <ul className="dropdown-menu nav-text">
                                <li><a href="#">League 1</a></li>
                                <li><a href="#">League 2</a></li>
                                <li><a href="#">League 3</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Logout</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>

        <div className="row">
          <div className="col-md-2 side-menu">
            <div className="row-offcanvas row-offcanvas-left">
              <div id="sidebar" className="defaultShadow">
                <ul className="nav nav-pills nav-stacked">
                  <li><Link to="/GameDash">Manage Games</Link></li>
                  <li><Link to="/TeamDash">Manage Teams</Link></li>
                  <li><Link to="/PlayerDash">Manage Players</Link></li>
                </ul>
              </div>
            </div>
          </div>

          
          <div className="col-md-10">
            {this.props.children}
          </div>

        </div>
      </div>
    );
  }
});

module.exports = Main;
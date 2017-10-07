var React = require("react");
var Link = require("react-router").Link;

var Landing = React.createClass({

  render: function() {

   return (
   	<div className = "landingPage">
   	<div className="container">
          <div className="row">
              <div className="page-header text-center img-rounded">
              <h1>My Rec Team</h1>
              <h2> Your Scheduling App for Sports Leagues</h2>
             </div>
          </div>
          <div className="row landPage flex">
            <div className="col-md-6 defaultOpacity img-rounded">
                <h3>Toss the Paper and Phone. MyRecTeam Does It All</h3>
                    <p>With My RecTeam, your department no longer needs paper, call-ins and phone chains to communicate with coaches and teams. Do it all on one easy-to-use interface. <br />
                    Easily update the calendar to keep parents and coaches in the loop. And the weather app lets users see when conditions might cause a cancellation.
                    </p>
                <h3>Log In To Start </h3>  
            </div>
                    
            <div className="col-md-6">
                <div className="panel panel-default defaultOpacity img-rounded removeBottomMargin">
                    <div className="panel-heading">
                       <h3 className="panel-title">Login</h3>
                    </div>
                      <div className="panel-body defaultOpacity">
                          <form className="form-horizontal">
                              <div className="form-group">
                                  <label for="inputEmail3" className="col-sm-2 control-label">Email</label>
                                  <div className="col-sm-10">
                                    <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
                                  </div>
                                </div>
                                  <div className="form-group">
                                  <label for="inputPassword3" className="col-sm-2 control-label">Password</label>
                                  <div className="col-sm-10">
                                    <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <div className="col-sm-offset-2 col-sm-10">
                                    <div className="checkbox">
                                      <label>
                                        <input type="checkbox"/> Remember me
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <div className="col-sm-offset-2 col-sm-10">
                                    <button type="submit" className="btn btn-default">Sign in</button>
                                  </div>
                            </div>
                            </form>
                          </div>
                        </div>
                     </div>
                  </div>
             </div>
         </div>   		

   		);
	}
});
module.exports = Landing;
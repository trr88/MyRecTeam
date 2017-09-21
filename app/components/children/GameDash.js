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
            <h3 className="panel-title">Calendar Panel</h3>
          </div>
          <div className="panel-body">
            <p>Will eventually hold the Calendar.</p>
            <div><Calendar /></div>
          </div>
        </div>
      </div>

          <div className="col-md-4">
            <div className="row">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Game Form</h3>
              </div>
              <div className="panel-body">
                <form>
                  <div className="form-group">
                    <label className="">First Name</label>
                    <input type="text" className="form-control text-center" id="firstName" onChange= {this.handleChange} required/>
                    <br />

                    <label className="">Last Name</label>
                    <input type="text" className="form-control text-center" id="lastName" onChange= {this.handleChange} required/>
                    <br />

                    <label className="">Age</label>
                    <input type="text" className="form-control text-center" id="age" onChange= {this.handleChange} required/>
                    <br />

                    <label className="">Parent or Guardian Name</label>
                    <input type="text" className="form-control text-center" id="parentGuardian" onChange= {this.handleChange} required/>
                    <br />

                    <label className="">Phone Number</label>
                    <input type="text" className="form-control text-center" id="phone" onChange= {this.handleChange} required/>
                    <br />

                    <label className="">E-mail</label>
                    <input type="text" className="form-control text-center" id="email" onChange= {this.handleChange} required/>
                    <br />
                    
                    <button type="button" className="btn btn-primary" onClick={this.handleClick}>Submit</button>
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
var React = require("react");
var Link = require("react-router").Link;

var PlayerForm = React.createClass({
  render: function() {
    return (
      <div className="panel panel-default form-panel">
        <div className="panel-heading">
          <h3 className="panel-title">Add a Player</h3>
        </div>
        <div className="panel-body">
          <form>
            <div className="form-group">
              <label className="">First Name</label>
              <input type="text" className="form-control text-center" id="firstName" onChange= {this.handleChange} required/>

              <label className="">Last Name</label>
              <input type="text" className="form-control text-center" id="lastName" onChange= {this.handleChange} required/>

              <label className="">Age</label>
              <input type="text" className="form-control text-center" id="age" onChange= {this.handleChange} required/>

              <label className="">Parent or Guardian Name</label>
              <input type="text" className="form-control text-center" id="parentGuardian" onChange= {this.handleChange} required/>

              <label className="">Phone Number</label>
              <input type="text" className="form-control text-center" id="phone" onChange= {this.handleChange} required/>

              <label className="">E-mail</label>
              <input type="text" className="form-control text-center" id="email" onChange= {this.handleChange} required/>
              <br />
              
              <button type="button" className="btn btn-primary" onClick={this.handleClick}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = PlayerForm;
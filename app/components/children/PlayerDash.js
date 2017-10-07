var React = require("react");
var Link = require("react-router").Link;
import axios from 'axios';
import ReactTable from "react-table";

var PlayerForm = require("../children/grandchildren/PlayerForm");

var PlayerDash = React.createClass({

  getInitialState : function(){
    return {
      data: []   
    };
  },

  componentDidMount : function (){
    var _this = this;
    axios.get('/players').then(function(response){
      _this.setState({
        data: response.data,
      });
    });
  },

  render: function() {
    return (

      <div className="row">
        <div className="col-md-8">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Current Players</h3>
            </div>
            <div className="panel-body">
              <ReactTable
                data={this.state.data} 
                columns={[
                  {
                    Header: "First Name",
                    accessor: "firstName"
                  },
                  {
                    Header: "Last Name",
                    accessor: "lastName"
                  },
                  {
                    Header: "Contact",
                    accessor: "phone"
                  }
                ]} 
                defaultPageSize={10} 
                className="-striped -highlight" 
                />
                <br/>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row"><PlayerForm /></div>
        </div>
      </div>
    );
  }
});

module.exports = PlayerDash;


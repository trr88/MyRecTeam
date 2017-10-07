var React = require("react");
var Link = require("react-router").Link;
import axios from 'axios';
import ReactTable from "react-table";

var TeamForm = require("../children/grandchildren/TeamForm");

var TeamDash = React.createClass({

  getInitialState : function(){
    return {
      data : []
    };
  },

  componentDidMount : function (){
    var _this = this;
    axios.get('/teams').then(function(response){
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
              <h3 className="panel-title">Current Teams</h3>
            </div>
            <div className="panel-body">
              <ReactTable
                data={this.state.data} 
                columns={[
                  {
                    Header: "Team Name",
                    accessor: "teamsName"
                  },
                  {
                    Header: "Coach's First Name",
                    accessor: "coachFirstName"
                  },
                  {
                    Header: "Last Name",
                    accessor: "coachLastName"
                  },
                  {
                    Header: "Coach Contact",
                    accessor: "coachPhone"
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
          <div className="row"><TeamForm /></div>
        </div>
      </div>
    );
  }
});

module.exports = TeamDash;
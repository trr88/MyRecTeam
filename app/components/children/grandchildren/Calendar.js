var React = require("react");
var Link = require("react-router").Link;
var FullCalendar = require("fullcalendar");
var $ = require("jquery");
var Moment = require("moment");
import axios from 'axios';

// var eventsArray = [];

var Calendar = React.createClass({

    getInitialState : function(){
        return{
            //data: [],
            eventsArray: []
        };
    },

  componentDidMount: function(){

        var _this = this;
        axios.get('/games').then(function(response){
            _this.setState({
                eventsArray: response.data,
            });
        });
    },

  render() {
    return <div id="calendar"></div>;
    // Object.entries(this.state.eventsArray).map([visitingTeam, homeTeam, startTime, endTime, park]);
    //  return (eventsArray = {
    //     title: visitingTeam + " vs. " + homeTeam,
    //     start: startTime,
    //     end: endTime,
    //     location: park
    // });
   {
    $('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			events: this.state.eventsArray,
        eventLimit: true, // allow "more" link when too many events
        views: {
            day: {
                eventLimit: 6 // adjust to 6 only for agendaWeek/agendaDay
            }
        },
        editable: false,
		eventColor: '#303c6c'
			
    })
  }
}
});

module.exports = Calendar;


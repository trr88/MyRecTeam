var React = require("react");
var Link = require("react-router").Link;
var FullCalendar = require("fullcalendar");
var $ = require("jquery");
var Moment = require("moment");
import axios from 'axios';

<<<<<<< HEAD
// var eventsArray = [];

var Calendar = React.createClass({

    getInitialState : function(){
        return{
            //data: [],
            eventsArray: []
        };
    },

  componentDidMount: function(){
=======
var eventsArray = [ {
                        title: 'Game',
                        start: '2017-10-08'
                    }, 
                    {
                        title: 'Game',
                        start: '2017-10-10'
                    },
                    {
                        title: 'Game',
                        start: '2017-10-12'
                    },
                    {
                        title: 'Game',
                        start: '2017-10-14'
                    },
                    {
                        title: 'Game',
                        start: '2017-10-16'
                    }];
>>>>>>> ec34d82023498963fa7bae2def1a0075c99ff43d

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


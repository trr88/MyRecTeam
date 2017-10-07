var React = require("react");
var Link = require("react-router").Link;
var FullCalendar = require("fullcalendar");
var $ = require("jquery");
var Moment = require("moment");

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

var Calendar = React.createClass({

  render() {
    return <div id="calendar"></div>;
  },
  componentDidMount() {
    $('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			events: eventsArray,
        eventLimit: true, // allow "more" link when too many events
        views: {
            day: {
                eventLimit: 6 // adjust to 6 only for agendaWeek/agendaDay
            }
        },
        editable: false,
		eventColor: '#303c6c',
			
    })
  }
});

module.exports = Calendar;


var React = require("react");
var Link = require("react-router").Link;
var FullCalendar = require("fullcalendar");
var $ = require("jquery");
var Moment = require("moment");

var eventsArray = [ {
            title: 'All Day Event',
            start: '2017-09-08'
        }, {
            title: 'Long Event',
            start: '2017-09-11',
            end: '2017-09-16'
        }, {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2017-09-19'

        },{
            title: 'Click for Sports',
            url: 'http://espn.com/',
            start: '2017-09-19'

        },{
            title: 'Fun to play Baseball game',
            start: '2017-09-19T12:00:00+13:00'

        },{
            title: 'Play Sports',
            start: '2017-09-19'

        },{
            title: 'Practice Soccers',
            start: '2017-09-19T13:00:00+14:00'

        },{
            title: 'Teams Soccers Vs Teams Soccers',
            start: '2017-09-19T16:00:00+18:00'

        },{
            title: 'Meetings ',
            start: '2017-09-19T18:00:00+20:00'

        },{
            title: 'Practice Morning ',
            start: '2017-09-19T09:00:00+11:00'

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


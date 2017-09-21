var React = require("react");
var Link = require("react-router").Link;
/*var FullCalendar = require("fullcalendar");*/
var $ = require("jquery");

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
			
    })
  }
});

module.exports = Calendar;


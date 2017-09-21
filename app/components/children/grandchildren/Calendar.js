var React = require("react");
var Link = require("react-router").Link;
var FullCalendar = require('fullcalendar');
var $ = require('jquery');
/*import { FullCalendar } from 'meteor/jss:fullcalendar-react';*/



/*import '../public/assets/css/fullcalendar.css';
import '../public/js/fullcalendar.js';*/

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


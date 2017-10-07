var React = require("react");
var Link = require("react-router").Link;
var Forecast = require('react-forecast');

var Weather = React.createClass({

  
  render : function() {
    return (
	    <Forecast latitude={41.5043} longitude={-81.6084} name='Cleveland, Ohio' />
    );
  }
});

module.exports = Weather;
var React = require("react");
var Link = require("react-router").Link;
var FullCalendar = require("fullcalendar");
var jQuery = require("jquery");
var Modal = require("react-bootstrap-modal");
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
                    },
                    {"title":"{visitingTeam}, vs, {homeTeam}","visitingTeam":"Lockman, Toy and Nikolaus","homeTeam":"Kunze, Friesen and Crona","start":"{startDate}, {startTime}","startDate":"10/8/2017","startTime":"3:21 PM","end":"{endDate}, {endTime}","endDate":"10/12/2017","endTime":"1:10 PM"},
{"title":"{visitingTeam}, vs, {homeTeam}","visitingTeam":"Walker, Rutherford and Von","homeTeam":"Weimann-Jacobson","start":"{startDate}, {startTime}","startDate":"10/18/2017","startTime":"12:59 AM","end":"{endDate}, {endTime}","endDate":"10/16/2017","endTime":"1:34 PM"},
{"title":"{visitingTeam}, vs, {homeTeam}","visitingTeam":"Gerhold Group","homeTeam":"Powlowski Group","start":"{startDate}, {startTime}","startDate":"10/25/2017","startTime":"6:51 AM","end":"{endDate}, {endTime}","endDate":"10/24/2017","endTime":"7:03 PM"},
{"title":"{visitingTeam}, vs, {homeTeam}","visitingTeam":"Adams Group","homeTeam":"Wyman, Witting and Schmidt","start":"{startDate}, {startTime}","startDate":"10/18/2017","startTime":"11:43 PM","end":"{endDate}, {endTime}","endDate":"10/20/2017","endTime":"12:36 PM"},
{"title":"{visitingTeam}, vs, {homeTeam}","visitingTeam":"Rolfson and Sons","homeTeam":"Cartwright-Schinner","start":"{startDate}, {startTime}","startDate":"10/11/2017","startTime":"4:51 PM","end":"{endDate}, {endTime}","endDate":"10/20/2017","endTime":"6:49 PM"},
{"title":"{visitingTeam}, vs, {homeTeam}","visitingTeam":"Rosenbaum LLC","homeTeam":"Welch, Nienow and Hahn","start":"{startDate}, {startTime}","startDate":"10/13/2017","startTime":"7:18 AM","end":"{endDate}, {endTime}","endDate":"10/29/2017","endTime":"9:46 AM"},
{"title":"{visitingTeam}, vs, {homeTeam}","visitingTeam":"Casper-Bradtke","homeTeam":"Marks Group","start":"{startDate}, {startTime}","startDate":"10/11/2017","startTime":"5:18 AM","end":"{endDate}, {endTime}","endDate":"10/8/2017","endTime":"5:37 AM"},
{"title":"{visitingTeam}, vs, {homeTeam}","visitingTeam":"Hamill LLC","homeTeam":"Heathcote Group","start":"{startDate}, {startTime}","startDate":"10/30/2017","startTime":"8:31 AM","end":"{endDate}, {endTime}","endDate":"10/16/2017","endTime":"5:14 PM"},
{"title":"{visitingTeam}, vs, {homeTeam}","visitingTeam":"Bailey and Sons","homeTeam":"Barrows Inc","start":"{startDate}, {startTime}","startDate":"10/15/2017","startTime":"4:06 AM","end":"{endDate}, {endTime}","endDate":"10/29/2017","endTime":"6:00 PM"},
{"title":"{visitingTeam}, vs, {homeTeam}","visitingTeam":"Olson, Schaden and Kautzer","homeTeam":"Emard-Wintheiser","start":"{startDate}, {startTime}","startDate":"10/7/2017","startTime":"6:39 PM","end":"{endDate}, {endTime}","endDate":"10/13/2017","endTime":"2:54 AM"},
{"title":"{visitingTeam}, vs, {homeTeam}","visitingTeam":"Gleason Group","homeTeam":"Purdy-Brakus","start":"{startDate}, {startTime}","startDate":"10/21/2017","startTime":"1:29 AM","end":"{endDate}, {endTime}","endDate":"10/18/2017","endTime":"1:19 PM"},
{"title":"{visitingTeam}, vs, {homeTeam}","visitingTeam":"Zieme and Sons","homeTeam":"West-Runolfsson","start":"{startDate}, {startTime}","startDate":"10/17/2017","startTime":"4:30 PM","end":"{endDate}, {endTime}","endDate":"10/24/2017","endTime":"5:58 AM"},
{"title":"{visitingTeam}, vs, {homeTeam}","visitingTeam":"Dicki, McCullough and Adams","homeTeam":"Pfeffer, Bergnaum and Kunze","start":"{startDate}, {startTime}","startDate":"10/25/2017","startTime":"5:54 AM","end":"{endDate}, {endTime}","endDate":"10/15/2017","endTime":"2:20 PM"},
{"title":"{visitingTeam}, vs, {homeTeam}","visitingTeam":"Mann, Hagenes and Koelpin","homeTeam":"Schaefer, Little and Lynch","start":"{startDate}, {startTime}","startDate":"10/17/2017","startTime":"5:51 PM","end":"{endDate}, {endTime}","endDate":"10/8/2017","endTime":"2:07 PM"},
{"title":"{visitingTeam}, vs, {homeTeam}","visitingTeam":"Zieme-Kihn","homeTeam":"Lakin and Sons","start":"{startDate}, {startTime}","startDate":"10/28/2017","startTime":"1:51 PM","end":"{endDate}, {endTime}","endDate":"10/22/2017","endTime":"1:23 AM"},
{"title":"{visitingTeam}, vs, {homeTeam}","visitingTeam":"Raynor LLC","homeTeam":"Mosciski-Kutch","start":"{startDate}, {startTime}","startDate":"10/25/2017","startTime":"1:42 PM","end":"{endDate}, {endTime}","endDate":"10/23/2017","endTime":"8:07 PM"},
{"title":"{visitingTeam}, vs, {homeTeam}","visitingTeam":"Ebert-Berge","homeTeam":"Zemlak and Sons","start":"{startDate}, {startTime}","startDate":"10/24/2017","startTime":"4:25 AM","end":"{endDate}, {endTime}","endDate":"10/14/2017","endTime":"11:29 AM"},
{"title":"{visitingTeam}, vs, {homeTeam}","visitingTeam":"Ziemann Group","homeTeam":"Beer LLC","start":"{startDate}, {startTime}","startDate":"10/25/2017","startTime":"7:58 PM","end":"{endDate}, {endTime}","endDate":"10/29/2017","endTime":"10:01 PM"},
{"title":"{visitingTeam}, vs, {homeTeam}","visitingTeam":"Lesch LLC","homeTeam":"Beatty, Auer and Nader","start":"{startDate}, {startTime}","startDate":"10/16/2017","startTime":"2:13 PM","end":"{endDate}, {endTime}","endDate":"10/25/2017","endTime":"4:17 AM"},
{"title":"{visitingTeam}, vs, {homeTeam}","visitingTeam":"Botsford Inc","homeTeam":"Hermann and Sons","start":"{startDate}, {startTime}","startDate":"10/18/2017","startTime":"5:08 AM","end":"{endDate}, {endTime}","endDate":"10/23/2017","endTime":"8:55 AM"}];


class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }


  render() {
    let closeModal = () => this.setState({ open: false });

    let saveAndClose = () => {
      api.saveData().then(() => this.setState({ open: false }));
    };

    return ( 
        <div>
            <div id="calendar"></div>        
            <Modal
                show={this.state.open}
                onHide={closeModal}
                aria-labelledby="modalTitle"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="modalTitle">A Title Goes here</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div id="modalBody" className="col-md-9">
                            <div className="modal-body"></div>
                        </div>
                        <div className="row">
                            <div id="modalStart" className="col-md-4"></div>
                            <div id="modalEnd" className="col-md-4"></div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Modal.Dismiss className="btn btn-default">Close</Modal.Dismiss>
                    <Modal.Dismiss className="btn btn-primary">Delete</Modal.Dismiss>
                </Modal.Footer>
            </Modal>
        </div>
    );
  }

  componentDidMount() {
    var that = this;

    jQuery('#calendar').fullCalendar({
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
        eventClick: function(event, jsEvent, view) {
            that.setState({open:true});
            jQuery('#modalTitle').html(event.title);
            jQuery('#modalBody').html(event.description);
            jQuery("#modalStart").html(moment(event.start).format('MMM Do h:mm A'));
            jQuery("#modalEnd").html(moment(event.end).format('MMM Do h:mm A'));
        }
    })
  }
};

module.exports = Calendar;



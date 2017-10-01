var React = require("react");
var Link = require("react-router").Link;
var FullCalendar = require("fullcalendar");
var jQuery = require("jquery");
var Modal = require("react-bootstrap-modal");
var Moment = require("moment");

var eventsArray = [ {
            title: 'All Day Event',
            start: '2017-09-08' 
        }, {
            title: 'Long Event',
            start: '2017-09-11',
            end: '2017-09-19',
            description: 'Champion Games'
        },{
            title: 'Fun to play Baseball game',
            start: '2017-09-19T12:00:00+13:00'

        },{
            title: 'Play Sports',
            start: '2017-09-19'

        },{
            title: 'Practice Soccers',
            start: '2017-09-19T13:00:00+14:00',
            end: '2017-09-19T14:00:00',
            description: 'This is a cool event'

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



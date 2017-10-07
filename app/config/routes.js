var React = require("react");
var router = require("react-router");
var Route = router.Route;
var Router = router.Router;
// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;

// Reference the high-level components
var Main = require("../components/Main");
var GameDash = require("../components/children/GameDash");
var TeamDash = require("../components/children/TeamDash");
var PlayerDash = require("../components/children/PlayerDash");


// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>

    <Route path="/" component={Main}>

      {/* If user selects GameDash then show the appropriate component*/}
      <Route path="GameDash" component={GameDash} />

      {/* If user selects TeamDash then show the appropriate component*/}
      <Route path="TeamDash" component={TeamDash} />

      {/* If user selects PlayerDash then show the appropriate component*/}
      <Route path="PlayerDash" component={PlayerDash} />

      {/* If user selects any other path... we get the Home Route */}
      <IndexRoute component={GameDash} />

    </Route>
  </Router>
);
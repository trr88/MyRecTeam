var authController = require("../controllers/authcontroller.js");
const db = require("../models");

module.exports = function(app, passport) {
  app.get("/", isLoggedIn, authController.dashboard);
  app.get("/signup", authController.signup);
  app.get("/signin", authController.signin);
  app.get("/dashboard", isLoggedIn, authController.dashboard);
  app.get("/logout", authController.logout);
  app.get("/newbid", isLoggedIn, authController.newbid);

  app.get("/:jobID/edit", isLoggedIn, (req, res) => {
    db.Job.findAll({
      where: {
        id: req.params.jobID
      }
    }).then( data => {
      res.render("editjob", data[0]);
    })
  });

  app.put("/:jobID/edit", isLoggedIn, (req, res) => {
    db.Job.update({
      jobtitle: req.body.jobTitle,
      jobdescription: req.body.jobDescription,
      duration: req.body.bidLength,
      construction: (req.body.construction === "on" ? true : false),
      indoor: (req.body.indoor === "on" ? true : false),
      landscaping: (req.body.landscaping === "on" ? true : false),
      outdoor: (req.body.outdoor === "on" ? true : false),
      renovation: (req.body.renovation === "on" ? true : false)
    }, {
      where: {
        id: req.params.jobID
      }
    }).then( () => {

      // Could we redirect to the /:jobID here? how?
      res.redirect("/dashboard");
    })
  })

  app.get("/:jobID/viewbids", isLoggedIn, (req, res) => {
    db.Bid.findAll({
      where: {
        JobId: req.params.jobID
      }
    }).then( data => {
      res.render("viewbids", {
        bids: data
      })
    })
  });

  app.put("/bids/:bidID", isLoggedIn, (req, res) => {
    db.Bid.update({
      accepted: req.body.accepted
    }, {
      where: {
        id: req.params.bidID
      }
    }).then( () => {
      res.redirect("/")
    })
  });

  app.post("/:jobID/newbid", isLoggedIn, (req, res) => {
    db.Bid.create({
      amount: req.body.bidAmount,
      duration: req.body.jobDuration,
      JobId: req.params.jobID,
      UserId: req.user.id
    }).then( () => {
      res.redirect("/");
    })
  });

  app.post("/signup", passport.authenticate("local-signup", {
      successRedirect: "/dashboard",
      failureRedirect: "/signup"
    }
  ));

  app.post("/signin", passport.authenticate("local-signin", {
      successRedirect: "/dashboard",
      failureRedirect: "/signin"
    }
  ));

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/signin");
  }
}
var exports = module.exports = {};
 
exports.signup = function(req, res) {
    res.render('signup'); 
};

exports.signin = function(req, res) {
 
    res.render('signin', {loginMessage: req.flash('loginMessage')});
 
};

exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    res.redirect("/");
  });
}

exports.isLoggedIn = function (req,res,next) {
  if ( req.isAuthenticated() ) {
    return next();
  }
  res.redirect('/signin');
};
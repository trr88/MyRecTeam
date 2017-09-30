'use strict';

module.exports = function(app, db) {

    app.get("/user", (req, res) => {
        db.user.findAll()
            .then(User => {
                res.json(User);
            });
    });

    // GET one user by id
    app.get('/user/:id', (req, res) => {
        const id = req.params.id;
        db.user.find({
                where: { id: id }
            })
            .then(User => {
                res.json(User);
            });
    });

    // POST single user
    app.post('/user', (req, res) => {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        db.user.create({
                name: name,
                email: email,
                password: password
            })
            .then(newUser => {
                res.json(newUser);
            })
    });

    // PATCH single user
    app.patch('/user/:id', (req, res) => {
        const id = req.params.id;
        const updates = req.body.updates;
        db.user.find({
                where: { id: id }
            })
            .then(User => {
                return User.updateAttributes(updates)
            })
            .then(updatedUser => {
                res.json(updatedUser);
            });
    });

    // DELETE single user
    app.delete('/user/:id', (req, res) => {
        const id = req.params.id;
        db.user.destroy({
                where: { id: id }
            })
            .then(deletedUser => {
                res.json(deletedUser);
            });
    });

}
'use strict';

module.exports = function(app, db) {

    app.get("/players", (req, res) => {
        db.Players.findAll()
            .then(Players => {
                res.json(Players);
            });
    });

    // GET one players by id
    app.get('/players/:id', (req, res) => {
        const id = req.params.id;
        db.Players.find({
                where: { id: id }
            })
            .then(Players => {
                res.json(Players);
            });
    });

    // POST single players
    app.post('/players/new', (req, res) => {
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const age = req.body.age;
        const parentGuardian = req.body.parentGuardian;
        const phone = req.body.phone;
        const email = req.body.email;
        db.Players.create({
                firstName: firstName,
                lastName: lastName,
                age: age,
                parentGuardian: parentGuardian,
                phone: phone,
                email: email

            })
            .then(newPlayers => {
                res.json(newPlayers);
            })
    });

    // PATCH single players
    app.patch('/players/:id', (req, res) => {
        const id = req.params.id;
        const updates = req.body.updates;
        db.Players.find({
                where: { id: id }
            })
            .then(Players => {
                return Players.updateAttributes(updates)
            })
            .then(updatedPlayers => {
                res.json(updatedPlayers);
            });
    });

    // DELETE single players
    app.delete('/players/:id', (req, res) => {
        const id = req.params.id;
        db.Players.destroy({
                where: { id: id }
            })
            .then(deletedPlayers => {
                res.json(deletedPlayers);
            });
    });

}
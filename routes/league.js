'use strict';

module.exports = function(app, db) {

    app.get("/league", (req, res) => {
        db.league.findAll()
            .then(League => {
                res.json(League);
            });
    });

    // GET one league by id
    app.get('/league/:id', (req, res) => {
        const id = req.params.id;
        db.league.find({
                where: { id: id }
            })
            .then(League => {
                res.json(League);
            });
    });

    // POST single league
    app.post('/league', (req, res) => {
        const name = req.body.name;
        const role = req.body.role;
        db.league.create({
                name: name
            })
            .then(newLeague => {
                res.json(newLeague);
            })
    });

    // PATCH single league
    app.patch('/league/:id', (req, res) => {
        const id = req.params.id;
        const updates = req.body.updates;
        db.league.find({
                where: { id: id }
            })
            .then(League => {
                return League.updateAttributes(updates)
            })
            .then(updatedLeague => {
                res.json(updatedLeague);
            });
    });

    // DELETE single league
    app.delete('/league/:id', (req, res) => {
        const id = req.params.id;
        db.league.destroy({
                where: { id: id }
            })
            .then(deletedLeague => {
                res.json(deletedLeague);
            });
    });

}
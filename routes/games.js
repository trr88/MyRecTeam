'use strict';

module.exports = function(app, db) {

    app.get("/games", (req, res) => {
        db.games.findAll()
            .then(Games => {
                res.json(Games);
            });
    });

    // GET one games by id
    app.get('/games/:id', (req, res) => {
        const id = req.params.id;
        db.Games.find({
                where: { id: id }
            })
            .then(Games => {
                res.json(Games);
            });
    });

    // POST single games
    app.post('/games/new', (req, res) => {
        const visitingTeam = req.body.visitingTeam;
        const homeTeam = req.body.homeTeam;
        const start = req.body.start;
        const end = req.body.end;
        const address = req.body.address;
        const state = req.body.state;
        const zipCode = req.body.zipCode;
        db.Games.create({
                visitingTeam: visitingTeam,
                homeTeam: homeTeam,
                start: start,
                end: end

            })
            .then(newGames => {
                res.json(newGames);
            })
    });

    // PATCH single games
    app.patch('/games/:id', (req, res) => {
        const id = req.params.id;
        const updates = req.body.updates;
        db.Games.find({
                where: { id: id }
            })
            .then(Games => {
                return Games.updateAttributes(updates)
            })
            .then(updatedGames => {
                res.json(updatedGames);
            });
    });

    // DELETE single games
    app.delete('/games/:id', (req, res) => {
        const id = req.params.id;
        db.Games.destroy({
                where: { id: id }
            })
            .then(deletedGames => {
                res.json(deletedGames);
            });
    });

}
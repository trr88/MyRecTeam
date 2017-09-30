'use strict';

module.exports = function(app, db) {

    app.get("/teams", (req, res) => {
        db.Teams.findAll()
            .then(Teams => {
                res.json(Teams);
            });
    });

    // GET one teams by id
    app.get('/teams/:id', (req, res) => {
        const id = req.params.id;
        db.Teams.find({
                where: { id: id }
            })
            .then(Teams => {
                res.json(Teams);
            });
    });

    // POST single teams
    app.post('/teams/new', (req, res) => {
        const teamsName = req.body.teamsName;
        const coachFirstName = req.body.coachFirstName;
        const coachLastName = req.body.coachLastName;
        const coachPhone = req.body.coachPhone;
        const coachEmail = req.body.coachEmail;
        db.Teams.create({
                teamsName: teamsName,
                coachFirstName: coachFirstName,
                coachLastName: coachLastName,
                coachPhone: coachPhone,
                coachEmail: coachEmail

            })
            .then(newTeams => {
                res.json(newTeams);
            })
    });

    // PATCH single teams
    app.patch('/teams/:id', (req, res) => {
        const id = req.params.id;
        const updates = req.body.updates;
        db.Teams.find({
                where: { id: id }
            })
            .then(Teams => {
                return Teams.updateAttributes(updates)
            })
            .then(updatedTeams => {
                res.json(updatedTeams);
            });
    });

    // DELETE single teams
    app.delete('/teams/:id', (req, res) => {
        const id = req.params.id;
        db.Teams.destroy({
                where: { id: id }
            })
            .then(deletedTeams => {
                res.json(deletedTeams);
            });
    });

}
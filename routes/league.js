// 'use strict';
var db = require('../models');
var app = require('express');

module.exports = function(app, db) {

    app.get("/league", (req, res) => {
        db.League.findAll()
            .then(League => {
                res.json(League);
            });
    });

    // GET one league by id
    app.get('/league/:id', (req, res) => {
        const id = req.params.id;
        db.League.find({
                where: { id: id }
            })
            .then(League => {
                res.json(League);
            });
    });

    // POST single league
    app.post('/league/new', (req, res) => {
        const name = req.body.name;
        console.log( 
            Object.keys(db).sort()
        );
        db.League.create({
            name: name
        })
        .then(newLeague => {
            res.json(newLeague);
        })
        // .catch(err => throw err)
    });

    // PATCH single league
    app.patch('/league/:id', (req, res) => {
        const id = req.params.id;
        const updates = req.body.updates;
        db.League.find({
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
        db.League.destroy({
                where: { id: id }
            })
            .then(deletedLeague => {
                res.json(deletedLeague);
            });
    });

}
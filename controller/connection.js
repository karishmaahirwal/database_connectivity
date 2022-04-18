const knex = require("../model/database")
const express = require("express");
const mysql = require("mysql")
const app = express();

var bcrypt = require('bcryptjs');

const hackathon = (req, res) => {
    

    const data = {
        Firstname: req.body.Firstname,
        Lastname: req.body.Lastname,
        Phone: req.body.Phone,
        Email: req.body.Email,
        Resume: req.body.Resume

    }

    knex("hackathon").insert(data).then((result) => {
        res.send({ sucess: "hackathon sucessfuly  " })
    })
        .catch((err) => {
            if (err) {
                console.log(err)
                res.status(400).send({ error: err })
            }

        })
}

module.exports = { hackathon }




// // const { Knex } = require("knex")

const knex = require("knex")({
    client: "mysql",
    connection: {
        host: "localhost",
        user: "root",
        password: "Karishma@123",
        database: "hackathon"
    }
});

knex.schema.hasTable('hackathon').then(function (exists) {
    if (!exists) {
        return knex.schema.createTable('hackathon', function (table) {
            table.string('Firstname', 255)
            table.string('Lastname', 255)
            table.integer('Phone', 10).unique()
            table.string('Email', 255).unique()
            table.string('Resume', 255).unique()
        })
            .then(() => {
                console.log('Table Created')
            })
            .catch(() => {
                console.log(err, "table alreay created")
            })
    }

})

module.exports = knex



const client = require('../client');

const userDataMapper = {

    async findOne (email) {
        const result = await client.query('SELECT * FROM "user" WHERE email = $1', [email]);
        return result.rows[0];
    },

    async countEmail (email) {
        const result = await client.query('SELECT COUNT(*) FROM "user" WHERE email = $1', [email]);
        return result.rows[0];
    },


    async insertOne (data) {
        const result = await client.query('INSERT INTO "user" (email, password, firstname, lastname) VALUES ($1, $2, $3, $4) RETURNING *', [data.email, data.password, data.firstname, data.lastname]);

        return result.rows[0];
    },


};

module.exports = userDataMapper;
const client = require('../client');

const authorDataMapper = {

    async getAll () {
        const result = await client.query('SELECT * FROM author');
        return result.rows;
    },

    async getById (id) {
        const result = await client.query('SELECT * FROM author  WHERE id = $1', [id]);
        return result.rows[0];
    },

    async addAuthor (data) {
        const result = await client.query(`INSERT INTO author (firstname, lastname, nationality, birthdate, deathdate, website) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`, [data.firstname, data.lastname, data.nationality, data.birthdate, data.deathdate, data.website]);

        return result.rows[0];
    },

    async updateAuthor (data) {
        const result = await client.query(`UPDATE author SET firstname = $1, lastname = $2, nationality = $3, birthdate = $4, deathdate = $5, website = $6 WHERE id = $7 RETURNING * `, [data.firstname, data.lastname, data.nationality, data.birthdate, data.deathdate, data.website, data.id]);

        return result.rows[0];
    }, 

    async deleteAuthor (id) {
        const result = await client.query(`DELETE FROM author WHERE id = $1`, [id]);
        return result.rows[0];
    }

};

module.exports = authorDataMapper;
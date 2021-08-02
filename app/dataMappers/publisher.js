const client = require('../client');

const publisherDataMapper = {

    async getAll () {
        const result = await client.query('SELECT * FROM publisher');
        return result.rows;
    },

    async getById (id) {
        const result = await client.query('SELECT * FROM publisher  WHERE id = $1', [id]);
        return result.rows[0];
    },

    async addPublisher (data) {
        const result = await client.query(`INSERT INTO publisher (name, country) VALUES ($1, $2) RETURNING *`, [data.name, data.country]);

        return result.rows[0];
    },

    async updatePublisher (data) {
        const result = await client.query(`UPDATE publisher SET name = $1, country = $2 WHERE id = $3 RETURNING * `, [data.name, data.country, data.id]);

        return result.rows[0];
    }, 

    async deletePublisher (id) {
        const result = await client.query(`DELETE FROM publisher WHERE id = $1`, [id]);
        return result.rows[0];
    }

};

module.exports = publisherDataMapper;
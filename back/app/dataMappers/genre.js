const client = require('../client');

const genreDataMapper = {

    async getAll () {
        const result = await client.query('SELECT * FROM genre');
        return result.rows;
    },

    async getById (id) {
        const result = await client.query('SELECT * FROM genre  WHERE id = $1', [id]);
        return result.rows[0];
    },

    async addGenre (data) {
        const result = await client.query(`INSERT INTO genre (label) VALUES ($1) RETURNING *`, [data.label]);

        return result.rows[0];
    },

    async updateGenre (data) {
        const result = await client.query(`UPDATE genre SET label = $1 WHERE id = $2 RETURNING * `, [data.label, data.id]);

        return result.rows[0];
    }, 

    async deleteGenre (id) {
        const result = await client.query(`DELETE FROM genre WHERE id = $1`, [id]);
        return result.rows[0];
    }

};

module.exports = genreDataMapper;
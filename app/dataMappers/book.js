const client = require('../client');

const bookDataMapper = {

    async getAll () {
        const result = await client.query('SELECT * FROM book');
        return result.rows;
    },

    async getById (id) {
        const result = await client.query('SELECT * FROM book WHERE id = $1', [id]);
        return result.rows[0];
    }

};

module.exports = bookDataMapper;
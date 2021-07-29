const client = require('../client');

const bookDataMapper = {

    async getAll () {
        const result = await client.query('SELECT * FROM book');
        return result.rows;
    },

    async getById (id) {
        const result = await client.query('SELECT * FROM book WHERE id = $1', [id]);
        return result.rows[0];
    },

    async addBook (data) {
        const result = await client.query(`INSERT INTO book (isbn_paperback, original_title, title, summary, publication_year, language, page_count, cover, paperback_price, isbn_ebook, ebook_price, publisher_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *`, [data.isbn_paperback, data.original_title, data.title, data.summary, data.publication_year, data.language, data.page_count, data.cover, data.paperback_price, data.isbn_ebook, data.ebook_price, data.publisher_id]);
        
        return result.rows[0];
    }

};

module.exports = bookDataMapper;
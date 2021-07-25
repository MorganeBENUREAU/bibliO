const bookDataMapper = require('../dataMappers/book');

const bookController = {

    /**
     * Get list of all books
     * @param {object} _ express request not used
     * @param {object} response express response
     */
    async allBookList (_, response) {

        try {

            const books = await bookDataMapper.getAll();
            response.json({ data: books })

        } catch (error) {
            console.error(error);
            response.json({ data: [], error: `A servor error occurred, please try again later`});
        }
        
    },

    /**
     * Get one book of by its id
     * @param {object} _ express request
     * @param {object} response express response
     * @param {object} _ express next function
     */
    async getOneBook (request, response, next) {

        try {
            const book = await bookDataMapper.getById(request.params.id);

            if(!book){
                return next();
            }

            response.json({data: book })

        } catch (error) {
            console.error(error);
            response.json({ data: [], error: `A servor error occurred, please try again later`});
        }
        
    }
};

module.exports = bookController;
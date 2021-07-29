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
            response.render('books', { books });

        } catch (error) {
            console.error(error);
            response.json({ data: [], error: `A servor error occurred, please try again later`});
        }
        
    },

    /**
     * Get one book of by its id
     * @param {object} _ express request
     * @param {object} _ response express response
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
        
    },

    /**
     * Add book
     * @param {object} _ express request
     * @param {object} response express response
     * @param {object} next express next function
     */
    async add(request, response, next) {
        try {

            const newBook = await bookDataMapper.addBook(request.body);

            if(!newBook){
                return next();
            }
        
            response.status(201).json({ data: newBook });

        } catch (error) {
            trace.error(error);

            if(error.code === '23505'){
                return response.status(400).json({data: [], error: `Cet article existe déjà dans la base donnée, veuillez utiliser un livre différent`});
            }

            response.status(500).json({data: [], error: `Désolé une erreur serveur est survenue, veuillez réessayer ultérieurement.`});
        }
    },
};

module.exports = bookController;
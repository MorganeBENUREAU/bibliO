const { bookDataMapper } = require('../dataMappers');

const bookController = {

    /**
     * Get list of all books
     * @param {Object} _ request not used
     * @param {Array} response response of object
     * @param {Object} next not found middleware
     * @returns
     */
    async allBookList (_, response, next) {

        try {

            const books = await bookDataMapper.getAll();

            // if there is data, we respond with it; if not, we return next()
            if (books) {
                response.status(200).json(books);
            } else {
                return next();
            };

        } catch (error) {
            console.error(error);
            response.status(500).json({ error: error.message });
        };
    },

    /**
     * Get one book by its id
     * @param {object} request 
     * @param {object} response 
     * @param {object} next not found middleware
     */
    async getOneBook (request, response, next) {

        try {
            const book = await bookDataMapper.getById(request.params.id);

            if(!book){
                return next();
            };

            response.status(200).json(book);

        } catch (error) {
            console.error(error);
            response.status(500).json({ error: error.message });
        };
        
    },

    /**
     * Add a book
     * @param {object} request 
     * @param {object} response 
     * @param {object} next not found middleware
     */
    async add(request, response, next) {

        try {

            const newBook = await bookDataMapper.addBook(request.body);

            if(!newBook){
                return next();
            };
        
            response.status(201).json({ newBook });

        } catch (error) {
            console.error(error);

            if(error.code === '23505'){
                return response.status(400).json({data: [], error: `Ce livre existe déjà dans la base donnée, veuillez utiliser un livre différent`});
            };

            response.status(500).json({ error: error.message });
        };
    },

    /**
     * Update a book
     * @param {object} request
     * @param {object} response
     * @param {object} next not found middleware
     */
     async update(request, response, next) {

        try {

            const book = await bookDataMapper.updateBook({...request.body, id: request.params.id});

            if(!book){
                return next();
            };

            response.status(200).json({ book });

        } catch (error) {
            console.error(error);
            response.status(500).json({ error: error.message });
        };
    },

    /**
     * Delete a book
     * @param {object} request
     * @param {object} response 
     */
    async delete(request, response){

        try {

            const book = await bookDataMapper.deleteBook(request.params.id);

            response.status(204).json('livre bien supprimé');
            
        } catch (error) {
            console.error(error);
            response.status(500).json({ error: error.message });
        };
    }
};

module.exports = bookController;
const { authorDataMapper } = require('../dataMappers');

const authorController = {

    /**
     * Get list of all authors
     * @param {Object} _ request not used
     * @param {Array} response response of object
     * @param {Object} next not found middleware
     * @returns 
     */
    async allAuthorList (_, response, next) {

        try {

            const authors = await authorDataMapper.getAll();

            // if there is data, we respond with it; if not, we return next()
            if (authors) {
                response.status(200).json(authors);
            } else {
                return next();
            };

        } catch (error) {
            console.error(error);
            response.status(500).json({ error: error.message });
        };
        
    },

    /**
     * Get one author by its id
     * @param {Object} request get params id
     * @param {Object} response 
     * @param {Object} next not found middleware
     */
    async getOneAuthor (request, response, next) {

        try {
            const author = await authorDataMapper.getById(request.params.id);

            if(!author){
                return next();
            };

            response.status(200).json(author);

        } catch (error) {
            console.error(error);
            response.status(500).json({ error: error.message });
        };
        
    },

    /**
     * Add an author
     * @param {Object} request 
     * @param {Object} response 
     * @param {Object} next not found middleware
     */
    async add (request, response, next) {

        try {

            const newAuthor = await authorDataMapper.addAuthor(request.body);

            if(!newAuthor){
                return next();
            };
        
            response.status(201).json({newAuthor});

        } catch (error) {
            console.error(error);

            if(error.code === '23505'){
                return response.status(400).json({data: [], error: `Cet auteur existe déjà dans la base donnée, veuillez utiliser un auteur différent`});
            };

            response.status(500).json({ error: error.message });
        };
    },

    /**
     * Update an author by its id
     * @param {Object} request get params id
     * @param {Object} response 
     * @param {Object} next not found middleware
     */
     async update(request, response, next) {

        try {

            const author = await authorDataMapper.updateAuthor({...request.body, id: request.params.id});

            if(!author){
                return next();
            };

            response.status(200).json({author});

        } catch (error) {
            console.error(error);
            response.status(500).json({ error: error.message });
        };
    },

    /**
     * Delete an author by it id
     * @param {Object} request get params id
     * @param {Object} response 
     */
    async delete(request, response){
        try {

            const author = await authorDataMapper.deleteAuthor(request.params.id);
            
            response.status(204).json('Auteur bien supprimé');

        } catch (error) {
            console.error(error);
            response.status(500).json({ error: error.message });
        };
    }
};

module.exports = authorController;
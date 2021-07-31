const authorDataMapper = require('../dataMappers/author');

const authorController = {

    /**
     * Get list of all authors
     * @param {object} _ express request not used
     * @param {object} response express response
     */
    async allAuthorList (_, response) {

        try {

            const authors = await authorDataMapper.getAll();

            response.render('author', {authors});

        } catch (error) {
            console.error(error);
            response.json({ data: [], error: `A servor error occurred, please try again later`});
        }
        
    },

    /**
     * Get one author of by its id
     * @param {object} _ express request
     * @param {object} _ response express response
     * @param {object} _ express next function
     */
    async getOneAuthor (request, response, next) {

        try {
            const author = await authorDataMapper.getById(request.params.id);

            if(!author){
                return next();
            }

            response.json({data: author})

        } catch (error) {
            console.error(error);
            response.json({ data: [], error: `A servor error occurred, please try again later`});
        }
        
    },

    /**
     * Add author
     * @param {object} _ express request
     * @param {object} response express response
     * @param {object} next express next function
     */
    async add(request, response, next) {
        try {

            const newAuthor = await authorDataMapper.addAuthor(request.body);

            if(!newAuthor){
                return next();
            }
        
            response.status(201).json({ data: newAuthor });

        } catch (error) {
            console.error(error);

            if(error.code === '23505'){
                return response.status(400).json({data: [], error: `Cet auteur existe déjà dans la base donnée, veuillez utiliser un auteur différent`});
            }

            response.status(500).json({data: [], error: `Désolé une erreur serveur est survenue, veuillez réessayer ultérieurement.`});
        }
    },

    /**
     * Update author
     * @param {object} _ express request
     * @param {object} response express response
     * @param {object} next express next function
     */
     async update(request, response, next) {
        try {

            const author = await authorDataMapper.updateAuthor({...request.body, id: request.params.id});

            if(!author){
                return next();
            }

            response.json({ data: author });
        } catch (error) {
            console.error(error);
            response.status(500).json({ data: [], error: `A server error occurred, pleaze try again later`});
        }
    },

    /**
     * Delete author
     * @param {object} _ express request
     * @param {object} response express response
     * @param {object} next express next function
     */
    async delete(request, response, next){
        try {

            const author = await authorDataMapper.deleteAuthor(request.params.id);
            
            response.status(204).json();

        } catch (error) {
            console.error(error);
            response.status(500).json({ data: [], error: `A server error occurred, pleaze try again later`});
        }
    }
};

module.exports = authorController;
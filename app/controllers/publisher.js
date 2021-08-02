const publisherDataMapper = require('../dataMappers/publisher');

const publisherController = {

    /**
     * Get list of all publishers
     * @param {object} _ express request not used
     * @param {object} response express response
     */
    async allPublisherList (_, response) {

        try {

            const publishers = await publisherDataMapper.getAll();

            response.render('publisher', {publishers});

        } catch (error) {
            console.error(error);
            response.json({ data: [], error: `A servor error occurred, please try again later`});
        }
        
    },

    /**
     * Get one publisher by its id
     * @param {object} _ express request
     * @param {object} _ response express response
     * @param {object} _ express next function
     */
    async getOnePublisher (request, response, next) {

        try {
            const publisher = await publisherDataMapper.getById(request.params.id);

            if(!publisher){
                return next();
            }

            response.json({data: publisher})

        } catch (error) {
            console.error(error);
            response.json({ data: [], error: `A servor error occurred, please try again later`});
        }
        
    },

    /**
     * Add publisher
     * @param {object} _ express request
     * @param {object} response express response
     * @param {object} next express next function
     */
    async add(request, response, next) {
        try {

            const newPublisher = await publisherDataMapper.addPublisher(request.body);

            if(!newPublisher){
                return next();
            }
        
            response.status(201).json({ data: newPublisher });

        } catch (error) {
            console.error(error);

            if(error.code === '23505'){
                return response.status(400).json({data: [], error: `Cet éditeur existe déjà dans la base donnée, veuillez utiliser un éditeur différent`});
            }

            response.status(500).json({data: [], error: `Désolé une erreur serveur est survenue, veuillez réessayer ultérieurement.`});
        }
    },

    /**
     * Update publisher
     * @param {object} _ express request
     * @param {object} response express response
     * @param {object} next express next function
     */
     async update(request, response, next) {
        try {

            const publisher = await publisherDataMapper.updatePublisher({...request.body, id: request.params.id});

            if(!publisher){
                return next();
            }

            response.json({ data: publisher });
        } catch (error) {
            console.error(error);
            response.status(500).json({ data: [], error: `A server error occurred, pleaze try again later`});
        }
    },

    /**
     * Delete publisher
     * @param {object} _ express request
     * @param {object} response express response
     */
    async delete(request, response){
        try {

            const publisher = await publisherDataMapper.deletePublisher(request.params.id);
            
            response.status(204).json();

        } catch (error) {
            console.error(error);
            response.status(500).json({ data: [], error: `A server error occurred, pleaze try again later`});
        }
    }
};

module.exports = publisherController;
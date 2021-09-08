const { publisherDataMapper } = require('../dataMappers');

const publisherController = {

    /**
     * Get list of all publishers
     * @param {Object} _ request not used
     * @param {Array} response response of object
     * @param {Object} next not found middleware
     * @returns 
     */
    async allPublisherList (_, response, next) {

        try {

            const publishers = await publisherDataMapper.getAll();

            // if there is data, we respond with it; if not, we return next()
            if (publishers) {
                response.status(200).json(publishers);
            } else {
                return next();
            };

        } catch (error) {
            console.error(error);
            response.status(500).json({ error: error.message });
        };
        
    },

    /**
     * Get one publisher by its id
     * @param {object} request
     * @param {object} response 
     * @param {object} next not found middleware
     */
    async getOnePublisher (request, response, next) {

        try {
            const publisher = await publisherDataMapper.getById(request.params.id);

            if(!publisher){
                return next();
            };

            response.status(200).json(publisher);

        } catch (error) {
            console.error(error);
            response.json({ data: [], error: `A servor error occurred, please try again later`});
        };
        
    },

    /**
     * Add a publisher
     * @param {object} request
     * @param {object} response 
     * @param {object} next not found middleware
     */
    async add(request, response, next) {

        try {

            const newPublisher = await publisherDataMapper.addPublisher(request.body);

            if(!newPublisher){
                return next();
            };
        
            response.status(201).json({ newPublisher });

        } catch (error) {
            console.error(error);

            if(error.code === '23505'){
                return response.status(400).json({data: [], error: `Cet éditeur existe déjà dans la base donnée, veuillez utiliser un éditeur différent`});
            };

            response.status(500).json({ error: error.message });
        };
    },

    /**
     * Update a publisher
     * @param {object} request
     * @param {object} response 
     * @param {object} next not found middleware
     */
     async update(request, response, next) {

        try {

            const publisher = await publisherDataMapper.updatePublisher({...request.body, id: request.params.id});

            if(!publisher){
                return next();
            };

            response.status(200).json({ publisher });

        } catch (error) {
            console.error(error);
            response.status(500).json({ error: error.message });
        };
    },

    /**
     * Delete a publisher
     * @param {object} request
     * @param {object} response 
     */
    async delete(request, response){

        try {

            const publisher = await publisherDataMapper.deletePublisher(request.params.id);
            
            response.status(204).json('éditeur bien supprimé');

        } catch (error) {
            console.error(error);
            response.status(500).json({ error: error.message });
        };
    }
};

module.exports = publisherController;
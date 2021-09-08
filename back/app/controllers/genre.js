const { genreDataMapper } = require('../dataMappers');

const genreController = {

    /**
     * Get list of all genres
     * @param {Object} _ request not used
     * @param {*} response response of object
     * @param {*} next not found middleware
     * @returns 
     */
    async allGenreList (_, response, next) {

        try {

            const genres = await genreDataMapper.getAll();

            // if there is data, we respond with it; if not, we return next()
            if (genres) {
                response.status(200).json(genres);
            } else {
                return next();
            };

            response.render('genre', {genres});

        } catch (error) {
            console.error(error);
            response.status(500).json({ error: error.message });
        }
        
    },

    /**
     * Get one genre by its id
     * @param {object} request get params id
     * @param {object} response 
     * @param {object} next not found middleware
     */
    async getOneGenre (request, response, next) {

        try {
            const genre = await genreDataMapper.getById(request.params.id);

            if(!genre){
                return next();
            };

            response.json(genre);

        } catch (error) {
            console.error(error);
            response.json({ data: [], error: `A servor error occurred, please try again later`});
        };
        
    },

    /**
     * Add a genre
     * @param {object} request
     * @param {object} response
     * @param {object} next not found middleware
     */
    async add(request, response, next) {
        try {

            const newGenre = await genreDataMapper.addGenre(request.body);

            if(!newGenre){
                return next();
            };
        
            response.status(201).json({ newGenre });

        } catch (error) {
            console.error(error);

            if(error.code === '23505'){
                return response.status(400).json({data: [], error: `Ce genre existe déjà dans la base donnée, veuillez utiliser un genre différent`});
            };

            response.status(500).json({ error: error.message });
        }
    },

    /**
     * Update a genre
     * @param {object} request get params id
     * @param {object} response 
     * @param {object} next not found middleware
     */
     async update(request, response, next) {

        try {

            const genre = await genreDataMapper.updateGenre({...request.body, id: request.params.id});

            if(!genre){
                return next();
            };

            response.json({ genre });

        } catch (error) {
            console.error(error);
            response.status(500).json({ error: error.message });
        };
    },

    /**
     * Delete a genre by it id
     * @param {object} request get params id
     * @param {object} response 
     */
    async delete(request, response){
        try {

            const genre = await genreDataMapper.deleteGenre(request.params.id);
            
            response.status(204).json('Genre bien supprimé');

        } catch (error) {
            console.error(error);
            response.status(500).json({ error: error.message });
        };
    }
};

module.exports = genreController;
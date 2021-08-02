const genreDataMapper = require('../dataMappers/genre');

const genreController = {

    /**
     * Get list of all genres
     * @param {object} _ express request not used
     * @param {object} response express response
     */
    async allGenreList (_, response) {

        try {

            const genres = await genreDataMapper.getAll();

            response.render('genre', {genres});

        } catch (error) {
            console.error(error);
            response.json({ data: [], error: `A servor error occurred, please try again later`});
        }
        
    },

    /**
     * Get one genre by its id
     * @param {object} _ express request
     * @param {object} _ response express response
     * @param {object} _ express next function
     */
    async getOneGenre (request, response, next) {

        try {
            const genre = await genreDataMapper.getById(request.params.id);

            if(!genre){
                return next();
            }

            response.json({data: genre})

        } catch (error) {
            console.error(error);
            response.json({ data: [], error: `A servor error occurred, please try again later`});
        }
        
    },

    /**
     * Add genre
     * @param {object} _ express request
     * @param {object} response express response
     * @param {object} next express next function
     */
    async add(request, response, next) {
        try {

            const newGenre = await genreDataMapper.addGenre(request.body);

            if(!newGenre){
                return next();
            }
        
            response.status(201).json({ data: newGenre });

        } catch (error) {
            console.error(error);

            if(error.code === '23505'){
                return response.status(400).json({data: [], error: `Ce genre existe déjà dans la base donnée, veuillez utiliser un genre différent`});
            }

            response.status(500).json({data: [], error: `Désolé une erreur serveur est survenue, veuillez réessayer ultérieurement.`});
        }
    },

    /**
     * Update genre
     * @param {object} _ express request
     * @param {object} response express response
     * @param {object} next express next function
     */
     async update(request, response, next) {
        try {

            const genre = await genreDataMapper.updateGenre({...request.body, id: request.params.id});

            if(!genre){
                return next();
            }

            response.json({ data: genre });
        } catch (error) {
            console.error(error);
            response.status(500).json({ data: [], error: `A server error occurred, pleaze try again later`});
        }
    },

    /**
     * Delete genre
     * @param {object} _ express request
     * @param {object} response express response
     */
    async delete(request, response){
        try {

            const genre = await genreDataMapper.deleteGenre(request.params.id);
            
            response.status(204).json();

        } catch (error) {
            console.error(error);
            response.status(500).json({ data: [], error: `A server error occurred, pleaze try again later`});
        }
    }
};

module.exports = genreController;
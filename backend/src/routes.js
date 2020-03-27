const express = require ('express');
const{celebrate, Segments, Joi} = require('celebrate')


const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();
routes.post('/session', SessionController.create);


routes.get('/ongs', OngController.index);
routes.post('/ongs', celebrate({
    [Segments.BODY]:Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required().min(10),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)

    }
    

    )
   
}),OngController.create);

//Rotas para os incidents
routes.get('/incidents',IncidentsController.index);
routes.post('/incidents',IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);


//Routes Profile
routes.get('/profile', ProfileController.index);


module.exports = routes; 
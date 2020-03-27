const express = require ('express');
const{celebrate, Segments, Joi} = require('celebrate')


const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();
routes.post('/session', SessionController.create);


routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

//Rotas para os incidents
routes.get('/incidents',IncidentsController.index);
routes.post('/incidents',IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);


//Routes Profile
routes.get('/profile', ProfileController.index);


module.exports = routes; 
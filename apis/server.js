const express = require('express');
const helmet = require('helmet');

const db = require('../db-config');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/api/recipes', (req, res) => {
  // get all recipes from the database
  db('recipes')
  .then(recipes => {
    res.status(200).json(recipes);
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

// server.get('/api/animals', (req, res) => {
//   // get all animals from the database
//   // include species name
//   db('animals as a')
//     .leftJoin('species as s', 's.id', 'a.species_id')
//     .select('a.id', 'a.animal_name', 's.species_name')
//   .then(animals => {
//     res.status(200).json(animals);
//   })
//   .catch(error => {
//     res.status(500).json(error);
//   });
// });

// // create animal
// server.post('/api/animals', (req, res) => {
//   db('animals').insert(req.body)
//   .then(ids => {
//     const id = ids[0];

//     db('animals')
//       .where({ id })
//       .first()
//     .then(animal => {
//       res.status(201).json(animal);
//     });
//   })
//   .catch(error => {
//     res.status(500).json(error);
//   });
// });

// // remove species
// server.delete('/api/species/:id', (req, res) => {
//   db('species')
//     .where({ id: req.params.id })
//     .del()
//   .then(count => {
//     if (count > 0) {
//       res.status(204).end();
//     } else {
//       res.status(404).json({ message: 'Record not found' });
//     }
//   })
//   .catch(error => {
//     res.status(500).json(error);
//   });
// });

module.exports = server;

// // import express app and cors
// const express = require('express')
// const cors = require('cors')
// const recipeRouter = require('./router')

// // instantiate the app
// const app = express()

// // configure app so responses
// // carry special headers to enable CORS
// app.use(cors())
// // by default express cannot parse bodies of requests
// // we need to opt-in to body-parsing
// // and this comes with express
// app.use(express.json())

// // we connect the router using .use
// app.use(recipeRouter)

// // kind of like "export default app"
// module.exports = app

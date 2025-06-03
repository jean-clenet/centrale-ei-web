import express from 'express';
import { appDataSource } from '../datasource.js';
import Movie from '../entities/movies.js';

const router = express.Router();

function routeCallback(req, res) {
  appDataSource
    .getRepository(Movie)
    .find({})
    .then(function (movies) {
      res.json({ movies: movies });
    });
  console.log('ça a fonctioné');
}

function routeCallbackPost(req, res) {
  console.log(req.body);
  const movieRepository = appDataSource.getRepository(Movie);
  const newMovie = movieRepository.create({
    titre: req.body.titre,
    date_de_sortie: req.body.date_de_sortie,
    realisateur: req.body.realisateur,
  });

  movieRepository
    .save(newMovie)
    .then(function (savedMovie) {
      res.status(201).json({
        message: 'Movie successfully created',
        id: savedMovie.id,
      });
    })
    .catch(function (error) {
      console.error(error);
      if (error.code === '23505') {
        res.status(400).json({
          message: `Movie with this id already exists`,
        });
      } else {
        res.status(500).json({ message: 'Error while creating the movie' });
      }
    });
}

function routeCallback2(req, res) {
  console.log("imprime", req)
  appDataSource
    .getRepository(Movie)
    .find({where : {id: parseInt(req.params.id,10)}})
    .then(function (movies) {
      res.json({ movies: movies });
    });
}

router.get('/', routeCallback);
router.get('/:id', routeCallback2);
router.post('/new', routeCallbackPost);

export default router;

import typeorm from 'typeorm';

const Movie = new typeorm.EntitySchema({
  name: 'movie',
  columns: {
    id: {
      primary: true,
      type: Number,
      generated: true,
    },
    titre: {
      type: String,
    },
    date_de_sortie: { type: String },
    realisateur: { type: String },
  },
});

export default Movie;
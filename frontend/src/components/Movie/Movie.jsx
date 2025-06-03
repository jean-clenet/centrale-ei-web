function Movie({ ours }) {
  return (
    <table><caption>Les films de fou</caption>
        <thead>
            <th>Titre</th>
            <th colspan="2">Date de sortie</th>
            <th colspan="3">Illustration</th>
        </thead>
        <tbody>
          {ours.map((movie) => (
            <tr>
                <td>{movie.title}</td>
                <td>{movie.release_date}</td>
                <td><img src={"https://image.tmdb.org/t/p/w500"+movie.poster_path}/></td>
            </tr>
                ))}
        </tbody>
    </table>
  );
};

export default Movie;
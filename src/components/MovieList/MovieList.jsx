import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) =>
  movies.length > 0 && (
    <div className="movies">
      {movies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );

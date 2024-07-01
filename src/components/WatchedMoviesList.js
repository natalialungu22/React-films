import WatchedMovie from './WatchedMovie';

export default function WatchedMoviesList({ watched, onDeleteWatched }) {

  return (
      <ul className='list'>
          {watched && Array.isArray(watched) ? (
              watched.map((movie) => (
                  <WatchedMovie
                      movie={movie}
                      key={movie.imdbID}
                      onDeleteWatched={onDeleteWatched}
                  />
              ))
          ) : (
              <li>No watched movies</li>
          )}
      </ul>
  );

}


const average = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Input must be a non-empty array");
  }
  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
};


export default function WatchedSummary({ watched }) {
  const avgImdbRating = watched && Array.isArray(watched) && watched.length > 0
      ? average(watched.map((movie) => movie.imdbRating))
      : 0;

  const avgUserRating = watched && Array.isArray(watched) && watched.length > 0
      ? average(watched.map((movie) => movie.userRating))
      : 0;
  const avgRuntime = watched && Array.isArray(watched) && watched.length > 0
      ? average(watched.map((movie) => movie.runtime)) : 0;

  return (

    <div className='summary'>
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{(watched || []).length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(2)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(2)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}

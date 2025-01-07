const API_KEY = "2d2b357d";

export const searchMovies = async ({ search }) => {
  if (search === "") return null;
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
    );
    const json = await response.json();

    const movies = json.Search;

    return movies?.map((movie) => ({
      iid: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }));
  } catch (e) {
    console.error("Error searching movies: ", e);
    throw new Error("Error searching movies");
  }
};

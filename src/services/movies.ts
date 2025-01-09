interface Movie {
  id: string;
  title: string;
  year: string;
  poster: string;
}

interface ApiMovie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

interface SearchParams {
  search: string;
}

const API_KEY = process.env.REACT_APP_API_KEY || "default_api_key";

export const searchMovies = async ({
  search,
}: SearchParams): Promise<Movie[] | null> => {
  if (search === "") return null;
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
    );
    const json = await response.json();

    const movies = json.Search;

    return movies?.map((movie: ApiMovie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }));
  } catch (e) {
    console.error("Error searching movies: ", e);
    throw new Error("Error searching movies");
  }
};

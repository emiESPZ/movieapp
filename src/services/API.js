const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

//GET ALL POPULAR MOVIES

export const getPopularMovies = async (page) => {
  try {
    const response = await fetch(
      `${apiUrl}/popular?api_key=${apiKey}&page=${page}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

//GET ALL LATEST MOVIES

export const getLatestMovies = async () => {
  try {
    const response = await fetch(`${apiUrl}/top_rated?api_key=${apiKey}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

//GET MOVIE DETAILS

export const getMovieDetails = async (id) => {
  try {
    const response = await fetch(
      `${apiUrl}/${id}?api_key=${apiKey}&append_to_response=videos`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

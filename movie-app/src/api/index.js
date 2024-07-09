import axios from 'axios';

const TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmZiZDA5ZmRkOTc3M2JhZTcwNzc4N2RiOWYwYTYyZCIsIm5iZiI6MTcxOTg4NjY1NC45OTAzMDYsInN1YiI6IjY2NjExMTBlZTRkNzE3OWE2ZjI0NmQxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2KiaOFHmokARsn6UZOq_Es6jYM6w2AK5NJMS8AR911I';

export const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w185/';

export const apiInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

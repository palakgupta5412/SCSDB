import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/" ,
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTk4MjRjNTVlODdhMDEyNTJlMzcyNTZiZGY4NWYzNyIsIm5iZiI6MTc1MzUyMzk4MC45MzQsInN1YiI6IjY4ODRhNzBjYWFkZWQyYWQ2NjUyYTg3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oZk9nFlpmgecU2z2vWKELr4AWzqscf8eF5DAbpxrhxg'
    }
});



export default instance ;
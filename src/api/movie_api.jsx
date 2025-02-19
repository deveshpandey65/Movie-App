import axios from "axios";
const api_key ='b7f80465485dc60af2726c6dbd9f3bcb';
const api_url = 'https://api.themoviedb.org/3';
const trendingMovieEndPoint =`${api_url}/trending/movie/day?api_key=${api_key}`
const upcomingMovieEndPoint=`${api_url}/movie/upcoming?api_key=${api_key}`
const topRatedMovieEndPoint = `${api_url}/movie/top_rated?api_key=${api_key}`
const latestMovieEndPoint = `${api_url}/movie/popular?api_key=${api_key}`
const movieCreditEndPoint = id=> `${api_url}/movie/${id}/credits?api_key=${api_key}`
const personInfoEndPoint=id=> `${api_url}/person/${id}?api_key=${api_key}`
const  similarMovieEndPoint=id=>`${api_url}/movie/${id}/similar?api_key=${api_key}`
const api_call=async (endpoint,params) => {
    const options={
        method: 'GET',
        url: endpoint,
        params:params?params:{}
    }
    try{
        const response = await axios(options);
        return response.data;
    }
    catch(err){
        console.error(err);
    }
    
}
export const getTrendingMovies = async () => {
    return api_call(trendingMovieEndPoint);}
export const getUpcomingMovies=async () => {
    return api_call(upcomingMovieEndPoint);
}
export const getTopRatedMovies = async () => {
    return api_call(topRatedMovieEndPoint);
}
export const getlatestMovies = async () => {
    return api_call(latestMovieEndPoint);
}
export const getSearchMovie = async (query) => {
    const searchEndpoint = `${api_url}/search/movie?api_key=${api_key}&query=${query}`;
    return api_call(searchEndpoint);
};

export const getMovieCredit = async (id) => {
    return api_call(movieCreditEndPoint(id));
}
export const getPersonInfo=async (id)=>{
    return api_call(personInfoEndPoint(id))
}
export const getSimilarMovie=async (id)=>{
    return api_call(similarMovieEndPoint(id))
}
import axios from '../../Utils/axios'
import { loadmovie } from '../Reducers/movieReducer'
export {removemovie} from '../Reducers/movieReducer'
export const asyncMovieLoader = (id) => async (dispatch, getState) => {
    try {
        const details = await axios.get(`/movie/${id}`)
        const externalId = await axios.get(`/movie/${id}/external_ids`)
        const images = await axios.get(`/movie/${id}/images`)
        const recommendations = await axios.get(`/movie/${id}/recommendations`)
        const reviews = await axios.get(`/movie/${id}/reviews`)
        const similar = await axios.get(`/movie/${id}/similar`)
        const watchProviders = await axios.get(`/movie/${id}/watch/providers`)
        const videos = await axios.get(`/movie/${id}/videos`)
        console.log("Movie details:", details);
        
        const allDetails = {
            details: details.data,
            externalId: externalId.data,
            images: images.data,
            recommendations: recommendations.data.results,
            reviews: reviews.data.results,
            similar: similar.data.results,
            watchProviders: watchProviders.data.results.IN,
            videos: videos.data.results.find(video => video.type === 'Trailer' || video.type === 'Teaser') 
        }
        dispatch(loadmovie(allDetails));
        console.log("All movie details:", allDetails);

    } catch (error) {
        console.error("Error loading movie:", error)
    }
}

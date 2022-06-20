import './Home.scss'

import MovieListing from '../MoveListing/MovieListing'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movieSlice';
const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAsyncMovies())
        dispatch(fetchAsyncShows())
    }, [dispatch])

    return ( 
        <div>
            <MovieListing />
        </div>
     );
}
 
export default Home;
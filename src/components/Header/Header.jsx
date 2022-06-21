import user from '../../images/user.png'
import './Header.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movieSlice';
import { useDispatch } from 'react-redux';


const Header = () => {

    const dispatch = useDispatch()
    const [term, setTerm] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();

        if(term.trim() === '') return

        dispatch(fetchAsyncMovies(term)) 
        dispatch(fetchAsyncShows(term))

        setTerm('')

    }
    return ( 
        <div className='header'>
                <div className='logo'>
                    <Link to='/'>Movie App </Link>
                </div>
                <div className='search-bar'>
                    <form onSubmit={submitHandler}>
                        <input type="text"  placeholder='Search Movies' value={term} onChange={(e) => setTerm(e.target.value)} />
                        <button type='submit'><i className='fa fa-search'></i></button>
                    </form>

                </div>
            <div className='user-image'>
                <img src={user} alt="user" />
            </div>
        </div>
     );
}
 
export default Header;
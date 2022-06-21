import errorPage from '../../images/pnf.jpeg'
import './PageNotFound.scss'
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    const navigate = useNavigate()

    const home = ( ) => {
        navigate('/')
    }

    return ( 
        <div className='err'>
            <div className='err-pos'>
                <button onClick={home} className='errBtn'> home</button>
            </div>
            <img src={errorPage} alt="error page" />
        </div>
     );
}
 
export default PageNotFound;
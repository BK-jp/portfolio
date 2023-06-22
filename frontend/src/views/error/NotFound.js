import 'css/Error.css';
import { useNavigate } from 'react-router-dom';

function NotFound(){
    const navigate = useNavigate();

    const goBack = () =>{
        navigate(-1);
    };

    return (
        <div className='error-page'>
            <div className='error'>
                <h1>NotFound</h1>
                <button className='button c5' onClick={goBack}>Go Back</button>
            </div>
        </div>
    )
}

export default NotFound;
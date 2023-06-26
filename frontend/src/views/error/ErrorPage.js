import 'css/Error.css';
import { useNavigate, useRouteError } from 'react-router-dom';

function ErrorPage(){
    const error = useRouteError();

    const navigate = useNavigate();
    const goBack = () =>{
        navigate(-1);
    };

    return (
        <div className='error-page'>
            <div className='error'>
                <h1>{error.statusText}</h1>
                <button className='button c5' onClick={goBack}>Go Back</button>
            </div>
        </div>
    )
}

export default ErrorPage;
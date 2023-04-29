import { useNavigate, useParams } from 'react-router-dom';

const Method = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    console.log('id:', id);

    const redirectHome = () => {
        navigate('/');
    }
    
    return {
        redirectHome
    }
}

export default Method;
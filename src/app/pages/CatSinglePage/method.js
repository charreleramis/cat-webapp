import { useNavigate } from 'react-router-dom';

const Method = () => {
    const navigate = useNavigate();

    const redirectHome = () => {
        navigate('/');
    }
    return {
        redirectHome
    }
}

export default Method;
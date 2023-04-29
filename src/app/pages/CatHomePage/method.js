import { useNavigate } from 'react-router-dom';

const Method = () => {
    const navigate = useNavigate();

    const redirectCatDetails = () => {
        console.log('redirectCatDetails');
        navigate('/1290lsl');
    }
    return {
        redirectCatDetails
    }
}

export default Method;
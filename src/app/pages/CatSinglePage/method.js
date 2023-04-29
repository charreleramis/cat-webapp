import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CatContext } from '../../contexts/Provider';
import Api from '../../utilities/Api';

const Method = () => {
    const navigate = useNavigate();
    const { catDetailState, catDetailDispatch } = useContext(CatContext);
    const { details } = catDetailState;

    const { id } = useParams();


    useEffect(() => {
        catDetails();
    },[]);

    const redirectHome = () => {
        navigate('/');
    }

    const catDetails = async () => {
        try{
            const result = await Api.get(`v1/images/${id}`);
            catDetailDispatch({ type: 'details', payload: { details: result.data }})
            return
        } catch(error){
            console.error('Error: ', error);
            return false
        }
    }



    return {
        redirectHome,
        details
    }
}

export default Method;
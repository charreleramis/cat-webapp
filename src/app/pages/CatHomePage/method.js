import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Api from '../../utilities/Api';


const Method = () => {
    const navigate = useNavigate();
    const [breeds, setBreed] = useState([]);

    useEffect(() => {
        getBreeds();
    },[]);


    const getBreeds = async () => {
        try{
            const result = await Api.get('v1/breeds?limit=100&page=0');
            setBreed(result.data)
            return result.data;
        } catch(error){
            console.error('Error: ', error);
            return false
        }
    }

    // const searchCatImage = async(breedId ) => {
    //     try{
    //         const result = await Api.get('https://api.thecatapi.com/v1/images/search?page=1&limit=10&breed_id=abys');
    //         setBreed(result.data)
    //         return result.data;
    //     } catch(error){
    //         console.error('Error: ', error);
    //         return false
    //     }
    // }

    const redirectCatDetails = () => {
        console.log('redirectCatDetails');
        navigate('/1290lsl');
    }
    return {
        redirectCatDetails,
        breeds
    }
}

export default Method;
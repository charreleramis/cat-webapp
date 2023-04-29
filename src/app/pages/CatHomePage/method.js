import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CatContext } from '../../contexts/Provider';
import Api from '../../utilities/Api';


const Method = () => {
    const navigate = useNavigate();
    const [selectedBreed, setSelectedBreed] = useState('');
    const { breedState, breedDispatch, catState, catDispatch } = useContext(CatContext);

    const { breeds } = breedState;
    const { cats } = catState;

    useEffect(() => {
        getBreeds();
    },[]);

    useEffect(() => {
        if(selectedBreed) {
            searchCat();
        }
    },[selectedBreed]);


    const getBreeds = async () => {
        try{
            const result = await Api.get('v1/breeds');
            breedDispatch({ type: 'breeds', payload: { breeds: result.data } });
            return
        } catch(error){
            console.error('Error: ', error);
            return false
        }
    }


    const searchCat = async() => {
        try{
            const result = await Api.get(`v1/images/search?page=1&limit=12&breed_id=${selectedBreed}`);
            const data = result.data;
            let chunks = [];
            
            for (let index = 0; index < data.length; index+=4) {
                chunks.push(data.slice(index, index + 4));
            }

            catDispatch({ type: 'getCats', payload: { cats: chunks } });
            return 
        } catch(error){
            console.error('Error: ', error);
            return false
        }
    }

    const redirectCatDetails = (catId) => {
        navigate(`/${catId}`);
    }
    return {
        redirectCatDetails,
        setSelectedBreed,
        breeds,
        selectedBreed,
        cats
    }
}

export default Method;
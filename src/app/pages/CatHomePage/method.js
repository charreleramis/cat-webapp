import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CatContext } from '../../contexts/Provider';
import Api from '../../utilities/Api';


const Method = () => {
    const navigate = useNavigate();
    const { breedState, breedDispatch, catState, catDispatch } = useContext(CatContext);
    const { breeds } = breedState;
    const { cats, catName, page } = catState;

    const [selectedBreed, setSelectedBreed] = useState(catName);

    console.log(`CURRENT PAGE: ${page}`);
    
    useEffect(() => {
        getBreeds();
    },[]);

    useEffect(() => {
        if(selectedBreed) {
            if(selectedBreed == "Select breed") { 
                catDispatch({ type: 'resetCats'});
            } else {
                catDispatch({ type: 'setCatName', payload: { catName: selectedBreed }});
                searchCat();
            }
        }

    },[selectedBreed, page]);

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

    const isDisableBreedInput = () => {
        if(breeds.length) {
            return false;
        } else {
            return true;
        }
    }

    const searchCat = async() => {
        try{
            const result = await Api.get(`v1/images/search?page=${page}&limit=10&breed_id=${selectedBreed}`);
            const data = result.data;
            let chunks = [];
            
            for (let index = 0; index < data.length; index+=4) {
                chunks.push(data.slice(index, index + 4));
            }

            if(page <= 1) {
                catDispatch({ type: 'getCats', payload: { cats: chunks } });
            } else {
                const chunkLastItemIndex = cats.length - 1;
                const itemPerRow = 4;
                const remItemLength = itemPerRow - cats[chunkLastItemIndex].length

                if(remItemLength) {
                    let updatedCatList = [...cats.splice(chunkLastItemIndex)[0], ...data];
                    let chunks = [];
                    for (let index = 0; index < updatedCatList.length; index+=4) {
                        chunks.push(updatedCatList.slice(index, index + 4));
                    }
                    catDispatch({ type: 'getCats', payload: { cats: [...cats, ...chunks] } });

                } else {
                    catDispatch({ type: 'updateCatList', payload: { cats: chunks } });
                }
            }
            return 
        } catch(error){
            console.error('Error: ', error);
            return false
        }
    }

    const handleLoadMore = () => {
        catDispatch({ type: 'setPage', payload: { newpage:  page + 1 }});
    }

    const handleChangeBreed = (e) => {
        setSelectedBreed(e.target.value);
      }
    
    const isDisabled = () => {
        if(!selectedBreed || selectedBreed == "Select breed") {
            return true;
        } else {
            return false;
        }
    }

    const randomkey = () => {
        const min = 1;
        const max = 1000;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; // generates a random integer between min and max (inclusive)
        return randomNumber;
    }

    const redirectCatDetails = (catId) => {
        navigate(`/${catId}`);
    }
    return {
        redirectCatDetails,
        setSelectedBreed,
        handleLoadMore,
        handleChangeBreed,
        isDisabled,
        isDisableBreedInput,
        randomkey,
        breeds,
        selectedBreed,
        cats,
        catName
    }
}

export default Method;
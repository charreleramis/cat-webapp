import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CatContext } from '../../contexts/Provider';
import Api from '../../utilities/Api';


const Method = () => {
    const navigate = useNavigate();
    const { breedState, breedDispatch, catState, catDispatch } = useContext(CatContext);
    const { breeds } = breedState;
    const { cats, catName, page, isHideLoadButton, loadedImages, disableLoadButton } = catState;

    const [selectedBreed, setSelectedBreed] = useState(catName);
    const [error, setError] = useState(null);


    useEffect(() => {
        getBreeds();
    },[]);


    useEffect(() => {
        if(selectedBreed) {
            catDispatch({ type: 'setCatName', payload: { catName: selectedBreed }});
            if(selectedBreed != catName) {
                if(loadedImages.length) {
                    catDispatch({ type: 'ResetLoadedImages'});
                }
                catDispatch({ type: 'SetHideLoadButton', payload: { isHideLoadButton : false }});
            }
            catDispatch({ type: 'SetDisableLoadButton', payload: { disableLoadButton : false }});

        } else {
            catDispatch({ type: 'SetDisableLoadButton', payload: { disableLoadButton : true }})
            catDispatch({ type: 'resetCats'});
        }
    },[selectedBreed]);


    const getBreeds = async () => {
        try{
            const result = await Api.get('v1/breeds');
            breedDispatch({ type: 'breeds', payload: { breeds: result.data } });
            return
        } catch(error){
            setError("Cat Breed is temporary unavailable! Try to refresh");
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

    const searchImageAndRemoveDuplicate = async (page, selectedBreed) => {
        try {
            const result = await Api.get(`v1/images/search?page=${page}&limit=10&breed_id=${selectedBreed}`);
            const data = result.data;

            console.log('data:', data);
            console.log('loadedImages:', loadedImages);
            
            let uniqueCats = [] 

            // check if the image is already loaded
            for (let index = 0; index < data.length; index++) {
                const cat = data[index];
                if(!loadedImages.includes(cat.url)) {
                    catDispatch({ type: 'SetLoadedImages', payload: { catUrl: cat.url }})
                    uniqueCats.push(cat);
                }
            }
            return uniqueCats;
        } catch (error) {
            setError("Apologies but we could not load new cats for you this time! Miau!");
        }
    }


    const searchCat = async(page, selectedBreed) => {
        try{
            const data = await searchImageAndRemoveDuplicate(page, selectedBreed);
            if(!data.length) {
                catDispatch({ type: 'SetHideLoadButton', payload: { isHideLoadButton : true }});
            }

            // chunk the data by 4, since each row contains 4 columns
            let chunks = [];
            for (let index = 0; index < data.length; index+=4) {
                chunks.push(data.slice(index, index + 4));
            }

            if(page <= 1) {
                catDispatch({ type: 'getCats', payload: { cats: chunks } });
            } else {

                const chunkLastItemIndex = cats.length - 1;
                const itemPerRow = 4;

                // Identify the remaining slots of the incomplete array from the last item
                const remItemLength = itemPerRow - cats[chunkLastItemIndex].length
                
                // Manipulate the chunks, to fill up the incomplete array
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
        const encrement_page = page + 1
        catDispatch({ type: 'setPage', payload: { encrement_page }});
        searchCat(encrement_page, catName);
    }

    const handleChangeBreed = async (e) => {
        setSelectedBreed(e.target.value);
        if(e.target.value) {
            searchCat(1, e.target.value);
        }
      }
    
    const isDisabled = () => {
        if(selectedBreed) {
           return false; 
        } else {
            return true
        }
    }

    const randomkey = () => {
        const length = 8;
        let result = "";
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
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
        error,
        breeds,
        selectedBreed,
        cats,
        catName,
        isHideLoadButton,
        disableLoadButton
    }
}

export default Method;
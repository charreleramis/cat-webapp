import React, { createContext, useReducer } from 'react';

import breedInitialStates from './states/breedInitialStates';
import catsInitialStates from './states/catsInitiailStates';
import catDetailInitialStates from './states/catDetailsInitialStates';

import breedReducer from './reducers/breedReducer';

export const CatContext = createContext({});

const GlobalProvider = ({ children }) => {
    const [breedState, breedDispatch] = useReducer(breedReducer, breedInitialStates);
    
    return (
        <CatContext.Provider value={{ breedState, breedDispatch }}> 
            {children}
        </CatContext.Provider>
    );
}


export default GlobalProvider;
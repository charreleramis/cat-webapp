import React, { createContext, useReducer } from 'react';

import breedInitialStates from './states/breedInitialStates';
import catInitialStates from './states/catInitiailStates';
import catDetailInitialStates from './states/catDetailsInitialStates';

import breedReducer from './reducers/breedReducer';
import catReducer from './reducers/catReducer';

export const CatContext = createContext({});

const GlobalProvider = ({ children }) => {
    const [breedState, breedDispatch] = useReducer(breedReducer, breedInitialStates);
    const [catState, catDispatch] = useReducer(catReducer, catInitialStates);
    
    return (
        <CatContext.Provider value={{ breedState, catState, breedDispatch, catDispatch }}> 
            {children}
        </CatContext.Provider>
    );
}


export default GlobalProvider;
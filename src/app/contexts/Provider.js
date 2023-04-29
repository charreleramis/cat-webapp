import React, { createContext, useReducer } from 'react';

import breedInitialStates from './states/breedInitialStates';
import catInitialStates from './states/catInitiailStates';
import catDetailInitialStates from './states/catDetailsInitialStates';

import breedReducer from './reducers/breedReducer';
import catReducer from './reducers/catReducer';
import catDetailReducer from './reducers/catDetailReducer';

export const CatContext = createContext({});

const GlobalProvider = ({ children }) => {
    const [breedState, breedDispatch] = useReducer(breedReducer, breedInitialStates);
    const [catState, catDispatch] = useReducer(catReducer, catInitialStates);
    const [catDetailState, catDetailDispatch] = useReducer(catDetailReducer, catDetailInitialStates);
    
    return (
        <CatContext.Provider value={{ 
            breedState, catState, catDetailState, breedDispatch, catDispatch, catDetailDispatch
        }}>
            {children}
        </CatContext.Provider>
    );
}


export default GlobalProvider;
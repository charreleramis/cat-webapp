import catInitiailStates from "../states/catInitiailStates";

const catReducer = (state, { type, payload }) => {
    switch (type) {
      case 'getCats': {
        return {
            ...state,
            cats: payload.cats
        }
      }
      case 'updateCatList': {
        return {
            ...state,
            cats: [...state.cats, ...payload.cats]
        }
      }
      case 'setCatName': {
        return {
          ...state,
          catName: payload.catName
        }
      }
      case 'setPage': {
        return {
          ...state,
          page: payload.newpage
        }
      }
      case 'resetCats': {
        return catInitiailStates
      }
      default: {
        throw Error('Unknown action: ' + type);
      }
    }
  }

export default catReducer;

  
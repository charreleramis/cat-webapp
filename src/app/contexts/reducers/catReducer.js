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
          page: payload.encrement_page
        }
      }
      case 'SetDisableLoadButton': {
        return {
          ...state,
          isDisableLoadButton: payload.isDisableLoadButton
        }
      }
      case 'SetLoadedImages': {
        return {
          ...state,
          loadedImages: [...state.loadedImages, ...[payload.catUrl]]
        }
      }
      case 'ResetLoadedImages': {
        return {
          ...state,
          loadedImages: []
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

  
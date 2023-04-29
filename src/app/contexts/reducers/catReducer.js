import catInitiailStates from "../states/catInitiailStates";

const catReducer = (state, { type, payload }) => {
    switch (type) {
      case 'getCats': {
        return {
            ...state,
            cats: payload.cats
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

  
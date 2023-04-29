import catDetailsInitialStates from "../states/catDetailsInitialStates";
const catDetailReducer = (state, { type, payload }) => {
    switch (type) {
      case 'details': {
        return {
            ...state,
            details: payload.details
        }
      }
      case 'resetDetails': {
        return catDetailsInitialStates
      }

      default: {
        throw Error('Unknown action: ' + type);
      }
    }
  }

export default catDetailReducer;

  
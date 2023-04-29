const catReducer = (state, { type, payload }) => {
    switch (type) {
      case 'getCats': {
        return {
            ...state,
            cats: payload.cats
        }
      }
      default: {
        throw Error('Unknown action: ' + type);
      }
    }
  }

export default catReducer;

  
const catDetailReducer = (state, { type, payload }) => {
    switch (type) {
      case 'details': {
        return {
            ...state,
            details: payload.details
        }
      }
      default: {
        throw Error('Unknown action: ' + type);
      }
    }
  }

export default catDetailReducer;

  
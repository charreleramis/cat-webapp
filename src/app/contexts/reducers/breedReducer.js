const breedReducer = (state, action) => {
    switch (action.type) {
      case 'get': {
        return {
            ...state,
            breed: ['sample', 'sample 2']
        }
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }

export default breedReducer;

  
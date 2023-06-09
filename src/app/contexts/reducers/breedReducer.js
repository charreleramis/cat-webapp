const breedReducer = (state, { type, payload }) => {
    switch (type) {
      case 'breeds': {
        return {
            ...state,
            breeds: payload.breeds
        }
      }
      default: {
        throw Error('Unknown action: ' + type);
      }
    }
  }

export default breedReducer;

  
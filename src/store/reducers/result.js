const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Hello":
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result })
      };
    case "Hello11":
      // const id = 2;
      // const newArray = [...state.results];
      // newArray.splice(id, 1)
      const updatedArray = state.results.filter(
        result => result.id !== action.resultElId
      );
      return {
        ...state,
        results: updatedArray
      };
  }
  return state;
};

export default reducer;
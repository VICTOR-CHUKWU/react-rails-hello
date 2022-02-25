const LOAD_MESSAGE = 'helloRailsReact/message/LOAD_MESSAGE';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MESSAGE:
      return action.payload.message
    default:
      return state;
  }
};

export const loadGreetingData = (apiState) => ({
  type: LOAD_MESSAGE,
  payload: apiState,
})

export default reducer;
import { loadGreetingData } from "./greeting";

const URL = 'greetings';

export const getMessageData = async (dispatch) =>{
  const response = await fetch(URL);
  const data = await response.json();
  dispatch(loadGreetingData(data));
};
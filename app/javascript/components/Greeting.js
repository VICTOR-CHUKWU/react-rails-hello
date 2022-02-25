import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMessageData } from '../redux/API';
import store from '../redux/configureStore';
import './greeting.css';
store.dispatch(getMessageData);

const Greeting = () => {
  const messages = useSelector((state) => state.greetingData);

  return <p>{messages}</p>;
};

export default Greeting;
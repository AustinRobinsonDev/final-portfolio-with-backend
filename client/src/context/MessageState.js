import React, { useReducer } from 'react';
import MessageContext from './messageContext';
import axios from 'axios'
import messageReducer from './messageReducer';
import {
    ADD_MESSAGE
} from './types';

const MessageState = props => {
    const initialState = {
          fullMessage: {
            name: '',
            email: '',
            message: ''
          }
             
    };
    const [state, dispatch] = useReducer(messageReducer, initialState);

    //add waypoint
    const addMessage = async fullMessage => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/messages', fullMessage, config);
            dispatch({ type: ADD_MESSAGE, payload: res.data});
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <MessageContext.Provider
        value={{
            fullMessage: state.fullMessage,
            addMessage
        }}>
            {props.children}
        </MessageContext.Provider>
    )
};

export default MessageState;

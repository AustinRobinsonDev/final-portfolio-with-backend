import {ADD_MESSAGE} from './types';

export default (state, action) => {
    switch(action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                fullMessage: [action.payload, state.fullMessageOne]
            };
        default: 
            return state;
    }
}
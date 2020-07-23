import {CONSTANTS} from '../actions';

export const addList = (listId, text) => {
    return {
        type: CONSTANTS.ADD_CARD,
        payload : text
    }
}

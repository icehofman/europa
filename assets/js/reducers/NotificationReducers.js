/*
  @author Sam Heutmaker [samheutmaker@gmail.com]
*/

import CreateOrSetPropertyValue from './../util/CreateOrSetPropertyValue'

export default function NotificationReducers(state, action) {
    switch (action.type) {

        case 'UPDATE_NEW_NOTIFICATION':
            return updateNewNotification(state, action.data);
        
        default:
            return state;
    }
}

function updateNewNotification(state, data) {
    let newNotification = state.newNotification;
    CreateOrSetPropertyValue(newNotification, data.key, data.value);

    return {
        ...state,
        newNotification
    };
}
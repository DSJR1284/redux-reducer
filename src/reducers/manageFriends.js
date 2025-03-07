//https://redux.js.org/usage/structuring-reducers/immutable-update-patterns

export function manageFriends(state = {
    friends: [],
}, action) {
    switch(action.type) {  
    case "ADD_FRIEND":
        return (
        {...state,
            friends: [
                ...state.friends,
                action.friend
            ]
        }
    )  
    case "REMOVE_FRIEND":
        const removeFriend = state.friends.findIndex(friend => friend.id === action.id);
        return (
        {...state,
            friends: [
                ...state.friends.slice(0, removeFriend),
                ...state.friends.slice(removeFriend + 1)
            ]
        }
        )
    default:
        return state;  
    }
};
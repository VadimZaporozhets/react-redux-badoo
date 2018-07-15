import UserData from '../constants/user-data';

const matchesReducer = (
    state = {
        allUsers: UserData,
        likedUsers: [],
        matchesArray: []
    },
    action
) => {
    switch (action.type) {
        case 'LIKE_USER':
            const likedUser = action.payload;
            const newUsersAfterLike = state.allUsers.filter((user) => {
                return user.id !== likedUser.id;
            });
            const likedUsers = state.likedUsers.concat(likedUser);
            return {
                ...state,
                allUsers: newUsersAfterLike,
                likedUsers
            };
        case 'DISLIKE_USER':
            const newUsersAfterDislike = state.allUsers.filter((user) => {
                return user.id !== action.payload;
            });
            return {...state, allUsers: newUsersAfterDislike};
        case 'ADD_MATCH':
            return {...state, matchesArray: state.matchesArray.concat(action.payload)};
        default:
            return state;
    }
}

export default matchesReducer;
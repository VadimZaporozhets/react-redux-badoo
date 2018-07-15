const filterReducer = (
    state = {
        age: 25,
        gender: 'F'
    },
    action
) => {
    switch (action.type) {
        case 'FILTER_CHANGE_AGE':
            return {...state, age: action.payload};
        case 'FILTER_CHANGE_GENDER':
            return {...state, gender: action.payload};
        default:
            return state;
    }
}

export default filterReducer;
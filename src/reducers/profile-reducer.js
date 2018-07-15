import data from '../constants/user-data';

const profileReducer = (
    state = data[0],
    action
) => {
    switch (action.type) {
        case 'PROFILE_CHANGE_JOB':
            return {...state, job: action.payload};
        case 'PROFILE_CHANGE_EDUCATION':
            return {...state, education: action.payload};
        default: {
            return state;
        }
    }
}

export default profileReducer;
export const filterChangeAge = (age) => {
    return {
        type: 'FILTER_CHANGE_AGE',
        payload: age
    }
}

export const filterChangeGender = (gender) => {
    return {
        type: 'FILTER_CHANGE_GENDER',
        payload: gender
    }
}
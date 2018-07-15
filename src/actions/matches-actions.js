export const likeUser = (user) => {
    return {
        type: 'LIKE_USER',
        payload: user
    }
}

export const dislikeUser = (userId) => {
    return {
        type: 'DISLIKE_USER',
        payload: userId
    }
}

export const addMatch = (user) => {
    return {
        type: 'ADD_MATCH',
        payload: user
    }
}
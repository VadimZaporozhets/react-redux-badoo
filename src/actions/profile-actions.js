export const profileChangeJob = (job) => {
    return {
        type: 'PROFILE_CHANGE_JOB',
        payload: job
    }
}

export const profileChangeEducation = (education) => {
    return {
        type: 'PROFILE_CHANGE_EDUCATION',
        payload: education
    }
}
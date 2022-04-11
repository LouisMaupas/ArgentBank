import axios from 'axios';

const url = 'http://localhost:3001/api/v1'

/**
 * Authentification
 * @param {string} userEmail 
 * @param {string} userPassword 
 */
const postLogin = async(userEmail,userPassword) => {
    return axios({
        method: 'post',
        url: url + "/user/login", 
        data: {
            email: userEmail,
            password: userPassword
        },
    })
}

/**
 * Post token to get token
 * @param {string} token 
 * @returns {string} token
 */
const postToken = async(token) => {
    return axios({
        method: 'post',
        url: url + "/user/profile",
        data: {
        },
        headers: {
            Authorization: "Bearer " + token, accept: "application/json"
        }
    })
}


/**
 * Update user's profile
 * @param {string} token 
 * @param {string} firstName 
 * @param {string} lastName 
 * @returns 
 */
const putEditProfil = async(token, firstName, lastName) => {
    return axios({
        method: 'put',
        url: url + "/user/profile", 
        data: {
            firstName: firstName,
            lastName: lastName
        },
        headers: {
            Authorization: "Bearer " + token, accept: "application/json"
        }
    })
}

export { postLogin, postToken, putEditProfil };
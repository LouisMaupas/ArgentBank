import axios from 'axios';

const url = 'http://localhost:3001/api/v1'

/**
 * Authentification
 * @param {string} userEmail 
 * @param {string} userPassword 
 */
const postLogin = async(userEmail,userPassword) => {
    return axios({
        method: 'POST',
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
        method: 'POST',
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
 * @param {string} email 
 * @param {string} password 
 * @returns 
 */
const putEditProfil = async(token, firstName, lastName, email, password) => {
    return axios({
        method: 'PUT',
        url: url + "/user/profile", 
        data: {
            firstName: firstName,
        },
        headers: {
            Authorization: "Bearer " + token.payload, accept: "application/json"
        }
    })
}

export { postLogin, postToken, putEditProfil };
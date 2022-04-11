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

// TODO Pouvoir faire requete PUT / CHECK SI BON URL + SI BESOIN DE l'ID dans l'url ...

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
 * @returns 
 */
const putEditProfil = async(token, firstName) => {
    return axios({
        method: 'PATCH',
        url: url + "/user/profile", 
        data: {
            firstName: firstName,
        },
        headers: {
            Authorization: "Bearer " + token, accept: "application/json"
        }
    })
}

export { postLogin, postToken, putEditProfil };
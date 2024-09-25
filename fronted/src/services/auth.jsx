import axios from "axios";


export function apiPost(route = "", body = {}) {
    return axios.post("https://crmbackend-cb0d09d6d7ad.herokuapp.com/" + route, body, { withCredentials: true })
}

export function apiFetch(route = "") {
    return axios.get("https://crmbackend-cb0d09d6d7ad.herokuapp.com/" + route, { withCredentials: true })
}

export async function isLoggedIn() {
    try {
        const response = await apiFetch("auth/is-logged-in");
        const loggedIn = response.data;
        return loggedIn;
    } catch (error) {
       
        return false;
    }
}

  
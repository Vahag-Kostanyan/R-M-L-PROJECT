import * as api from "../api/users"


export const registration = (value) => async (dispatch) => {
    const res = await api.registration(value);
    const data = await res.json();
    if(data.status == "error"){
        return data.error
    }
    window.location.assign("login")
}

export const authentication = (value) => async (dispatch) => {
    const res = await api.authentication(value);
    const data = await res.json();
    if(data.status == "error"){
        return data.error
    }
    sessionStorage.removeItem("token");
    sessionStorage.setItem("token", data.data)

    window.location.assign("home")
}


export const getUser = (value) => async (dispatch) => {
    const res = await api.getUser(value);
    const data = await res.json();

    dispatch({ type: "GET_USER", payload: data.data.user })
}
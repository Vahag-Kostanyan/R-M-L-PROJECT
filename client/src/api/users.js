const backUrl = "http://127.0.0.1:8000";


export const registration = (value) => fetch(backUrl + "/api/user/registration", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(value)
})

export const authentication = (value) => fetch(backUrl + "/api/user/authentication", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(value)
})

export const getUser = (value) => fetch(backUrl + "/api/user/getUser", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${value}`
    },
})
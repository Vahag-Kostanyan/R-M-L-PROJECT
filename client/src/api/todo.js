const backUrl = "http://127.0.0.1:8000";

export const addTodo = (value) => fetch( backUrl + '/api/add', {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({data: value})
}
)

export const getTodos = (token) => fetch( backUrl + '/api/get', {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
    },
})

export const changeCompleted = (id) => fetch( backUrl + '/api/changeCompleted', {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({id: id})
})

export const deleTetodo = (id) => fetch( backUrl + '/api/delete', {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({id: id})
})
export const editTodo = (id, editInputVal) => fetch( backUrl + '/api/edit', {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({id: id, editInputVal})
})

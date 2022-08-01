import * as api from '../api/todo';

export const addTodo = (value) => async (dispatch) => {

    const res = await api.addTodo(value);
    const data = await res.json();

    dispatch({ type: "ADD_TODOS", payload: data.data })
}


export const getTodos = (token) => async (dispatch) => {
    const res = await api.getTodos(token);
    const data = await res.json();  
    dispatch({ type: "GET_TODOS", payload: data.data })
}

export const changeCompleted = (id) => async (dispatch) => {
    const res = await api.changeCompleted(id);
    const data = await res.json();

    dispatch({ type: "CHANGE_COMPLETED", payload: data.data })
}

export const deleTetodo = (id) => async (dispatch) => {

    const res = await api.deleTetodo(id);
    const data = await res.json();

    dispatch({ type: "DELETE_TODOS", payload: data.id })
}

export const edit = (id, editInputVal) => async (dispatch) => {
    const res = await api.editTodo(id, editInputVal);
    const data = await res.json();

    dispatch({ type: "EDIT_TODOS", payload: data.data })
}
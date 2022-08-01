import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../actions/todo";
import { getUser } from "../actions/users";
import Todo from "./Todo"   

const Todos = () => {

    const token = sessionStorage.getItem('token');

    if(!token){
        window.location.assign('/login')
    }
    useEffect(() => {
         dispatch(getUser(token))
       }, [])

    const todos = useSelector(state => state.todo);

    const dispatch = useDispatch();

    const user = useSelector(state => state.user);

    useEffect(() => {
     dispatch(getTodos(token))
    }, [dispatch])

    return(
        <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
            {todos.map(item => {
                return <Todo  name = {item.name} completed = {item.completed} id = {item.id} />
            })}
        </div>
    )
}

export default Todos;
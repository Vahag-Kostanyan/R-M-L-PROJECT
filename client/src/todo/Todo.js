import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCompleted, deleTetodo, edit } from "../actions/todo"
import { BiX } from "react-icons/bi";
import { AiFillEdit } from "react-icons/ai";



const Todo = ({ name, completed, id }) => {
    const [inputState, setinputState] = useState(false)
    const [editInputVal, setEditInputVal] = useState(name);
    const dispatch = useDispatch();

    const changeCompletedHandeler = () => {
        dispatch(changeCompleted(id));
    }


    const deleteTodoHandler = () => {
        dispatch(deleTetodo(id));
    }

    const editInput = () => {
        setinputState((e) => e = !e)
    }

    const editHandler = (e) => {
        e.preventDefault()
        dispatch(edit(id, editInputVal));
        setinputState((e) => e = !e)
    }

    return (
        <div className="todo" key={id} style={{ display: "flex", alignItems: "center", gap: "20px", justifyContent: "space-between", width: "80vw", border: "1px solid #999", padding: "5px 10px" }}>
            <div className="todo-conteiner" style={{ display: "flex", gap: "10px" }}>
                <input type="checkbox" checked={completed}
                    onClick={changeCompletedHandeler}
                />
                {!inputState ? (
                    <span style={{ textDecoration: completed ? "line-through" : "none" }}>{name}</span>
                ) : (
                    <form className="todo-conteiner-edit-form">

                        <input type="text" className="form-control todo-conteiner-edit-form-input"
                            value={editInputVal}
                            onChange={(e) => setEditInputVal(e.target.value)}
                        />
                        <button onClick={editHandler} className="btn btn-primary btn-edit-todo"><AiFillEdit /></button>

                    </form>
                )}

            </div>
            <span>
                <button onClick={deleteTodoHandler} className="btn btn-danger btn-delete-todo"><BiX /></button>
                <button onClick={editInput} className="btn btn-primary btn-edit-todo"><AiFillEdit /></button>
            </span>
        </div>
    )
}

export default Todo;
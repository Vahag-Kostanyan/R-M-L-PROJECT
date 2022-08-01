import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, } from "../actions/todo";


const TodoForm = () => {
    const [value, setValue] = useState('')

    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    const addTodoHandler = (e) => {
        e.preventDefault();

        const data = {
            name:  value,
            user_id: user.id
        }

        dispatch(addTodo(data));

        setValue('')
    }


    return (
        <div>
            <form onSubmit={addTodoHandler} className = "todos-form">
                <input className="form-control" type="text" placeholder="add Todo"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                /><br />
                <button type="submit" class="add-btn">Add</button>

            </form>

        </div>
    )
}

export default TodoForm;
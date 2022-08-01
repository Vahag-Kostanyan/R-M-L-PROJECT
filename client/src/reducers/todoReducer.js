export default (todos = [], action) => {
    switch (action.type) {
        case "GET_TODOS":
            return action.payload;
        case "ADD_TODOS":
            return [action.payload, ...todos];
        case "CHANGE_COMPLETED":
             return todos.map(item => {
                if(item.id === action.payload){
                    return {...item, completed: !item.completed}
                }else {
                    return item;
                } 
            })
        case "DELETE_TODOS":
            return todos.filter(item => item.id != action.payload)
        case "EDIT_TODOS": 
            return todos.map(item => {
                if(item.id === action.payload.id){
                    return {...item, name: action.payload.value}
                }else {
                    return item;
                } 
            })
        default:
            return todos;
    }
}
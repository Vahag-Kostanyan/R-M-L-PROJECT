export default (user = [], action) => {
    switch (action.type) {
        case "registration":
            return user; 
        case "GET_USER":
            return user = action.payload
        default:
            return user;
    }
}
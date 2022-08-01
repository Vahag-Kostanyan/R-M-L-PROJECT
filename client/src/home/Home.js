import Navbar from "../components/navbar/Navbar";
import TodoForm from "../form/TodoForm"
import Todos from "../todo/Todos"

const Home = () => {
    return (
        <div>
            <Navbar/>
            <div className="home-conteiner">
            <TodoForm />
            <Todos />
            </div>
        </div>
    )
}

export default Home;
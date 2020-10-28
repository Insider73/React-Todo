import React, {useEffect}  from 'react'
import TodoList from "./Todo/TodoList";
import Context from './context'
import Loader from './loader'
import Modal from "./Modal/Modal";

//chunky!
const AddTodo = React.lazy(() => import('./Todo/AddTodo'))

function App() {
    // const [todos, setTodos] = React.useState([
    //     {id:1, comleted: false, title: 'Купить хлеб'},
    //     {id:2, comleted: false, title: 'Купить масло'},
    //     {id:3, comleted: false, title: 'Купить творог'},
    // ])

    const [todos, setTodos] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(todos => {
                setTimeout(() => {
                    setTodos(todos)
                    setLoading(false)
                },2000)
            })
    },[])

    function toggleTodo(id) {
        setTodos(
            todos.map(todo => {
                if(todo.id === id) {
                    todo.comleted = !todo.comleted
                }
                return todo
            })
        )
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function addTodo(title) {
        setTodos(
            todos.concat([
                {
                    title,
                    id: Date.now(),
                    comleted: false
                }
            ])
        )
    }

    return (
        <Context.Provider value={{removeTodo}}>
            <div className='wrapper'>
                <h1>Todo List</h1>

                <Modal/>

                <React.Suspense fallback={<p>Loading...</p>}>
                    <AddTodo onCreate={addTodo}></AddTodo>
                </React.Suspense>

                {loading && <Loader/>}

                {todos.length ? (
                    <TodoList todos={todos} onToggle={toggleTodo}></TodoList>
                ) : (
                    loading ? null : <p>No todos</p>
                )}
            </div>
        </Context.Provider>
    );
}

export default App;

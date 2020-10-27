import React from 'react'
import TodoList from "./Todo/TodoList";
import AddTodo from "./Todo/AddTodo";
import Context from './context'

function App() {
  const [todos, setTodos] = React.useState([
    {id:1, comleted: false, title: 'Купить хлеб'},
    {id:2, comleted: false, title: 'Купить масло'},
    {id:3, comleted: false, title: 'Купить творог'},
  ])


  function toggleTodo(id) {
    setTodos(
        todos.map(todo => {
          if(todo.id === id) {
            todo.comleted = !todo.comleted
          }
          console.log(id)
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
            <AddTodo onCreate={addTodo}></AddTodo>
            {todos.length ? <TodoList todos={todos} onToggle={toggleTodo}></TodoList> : <p>No todos</p>}
        </div>
    </Context.Provider>
  );
}

export default App;

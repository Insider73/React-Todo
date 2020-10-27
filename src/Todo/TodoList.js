import React from 'react'
import List from '@material-ui/core/List';
import PropTypes from 'prop-types'
import TodoItem from "./TodoItem";

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

function TodoList(props) {
    return (
        <List style={styles.ul}>
            { props.todos.map((todo,index) => {
                return (
                    <TodoItem todo={todo}
                              key={todo.id}
                              index={index}
                              onChange={props.onToggle}>
                    </TodoItem>
                )
            }) }
        </List>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}

export default TodoList
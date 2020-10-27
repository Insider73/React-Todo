import React, {useContext} from 'react'
import { Button } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from "prop-types";
import Context from '../context'

const styles = {
    todoItem: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px'
    },
    li: {
        display:'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        paddingRight: '95px'
    },
    input: {
        marginRight: '1rem'
    },
    button: {
        position: 'absolute',
        right: '18px'
    }
}

function TodoItem({todo, index, onChange}) {
    const {removeTodo} = useContext(Context)
    const classes = []

    if(todo.comleted) {
        classes.push('done')
    }
    return (
        <div className="todo-item" style={styles.todoItem}>
            <ListItem button style={styles.li} onClick={() => onChange(todo.id)}>
             <span className={classes.join(' ')}>
                <Checkbox
                    color="primary"
                    checked={todo.comleted}
                    style={styles.input}/>
                <strong style={{marginRight:'5px'}}>{index + 1}</strong>
                 {todo.title}
            </span>
            </ListItem>
            <Button onClick={()=>removeTodo(todo.id)} style={styles.button} variant="contained" color="primary">&times;</Button>
        </div>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem
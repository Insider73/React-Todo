import React, {useState} from 'react'
import { Button,Input } from '@material-ui/core';
import PropTypes from 'prop-types'

function AddTodo({onCreate}) {
    const [value,setValue] = useState('')

    function submitHandler(event) {
        event.preventDefault()

        if(value.trim()) {
            onCreate(value)
            setValue('')
        }
    }

    return (
        <form style={{marginBottom: '1rem'}} onSubmit={submitHandler}>
            <Input value={value} onChange={event => setValue(event.target.value)} style={{marginRight: '1rem',minWidth:'250px'}}></Input>
            <Button type="submit" variant="contained" color="primary">Add todo</Button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo
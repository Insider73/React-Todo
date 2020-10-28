import React, {useState} from 'react'
import { Button,Input } from '@material-ui/core';
import PropTypes from 'prop-types'

//создаем свой хук!
function  useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue)

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}

function AddTodo({onCreate}) {
    const input = useInputValue('')

    function submitHandler(event) {
        event.preventDefault()

        if(input.value().trim()) {
            onCreate(input.value)
            input.clear()
        }
    }

    return (
        <form style={{marginBottom: '1rem'}} onSubmit={submitHandler}>
            <Input {...input.bind} style={{marginRight: '1rem',minWidth:'250px'}}></Input>
            <Button type="submit" variant="contained" color="primary">Add todo</Button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo
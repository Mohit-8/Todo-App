import React from 'react'
import { render } from '@testing-library/react';

const Todo = (props) => {
    const todoRecieved = props.todol;
    const deletetodo = props.del;

    const todolist = todoRecieved.length ? (
        todoRecieved.map(work => {
            return(
                <div className="collection-item" key={work.id}>
                    <span onClick={() => {deletetodo(work.id)}}>{work.content}</span>
                </div>
            )
        })
    ) : (
        <p>Yeah!!! Everything is done.</p>
    )

        return(
            <div className="todos collection">
                {todolist}
            </div>
        )


        
}
export default Todo;
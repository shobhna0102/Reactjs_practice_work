import React from "react";
import './index.css';

const TodoList = ({ id, text, onSelect }) => {

    return (<> <div className='todo_style'>
        <i class="fa fa-times" aria-hidden="true" onClick={() => {
            onSelect(id);
        }} />
        <li>{text}</li>
    </div>
    </>
    )

}
export default TodoList;
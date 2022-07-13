import React from "react"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Note = (props) => {
    const deleteNote = () => {
        props.delete(props.id);
    }
    return (

        <div className="display">
            <div className="note">
                <h1>{props.title}</h1>
                <br />
                <p>{props.content}</p>
                <button className="btn" onClick={deleteNote} c>
                    <DeleteOutlineIcon className="deleteIcon" />
                </button>
            </div>
        </div>
    );

}

export default Note;


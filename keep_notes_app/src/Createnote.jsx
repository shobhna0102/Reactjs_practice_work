import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const Createnote = (props) => {
    const [crntNote, setNote] = useState({ title: "", content: "" });

    const inputEvent = (event) => {
        const { value, name } = event.target;
        setNote((preValue) => ({ ...preValue, [name]: value }));
    };
    const addEvent = () => {
        props.passNote(crntNote);
        setNote({ title: "", content: "" });
    }
    return (

        <div className="main_note">
            <form>
                <input
                    type="text"
                    placeholder="Title"
                    autoCapitalize="off"
                    value={crntNote.title}
                    onChange={inputEvent}
                    name="title"
                />
                <textarea
                    rows=""
                    column=""
                    placeholder="Write a notes"
                    value={crntNote.content}
                    onChange={inputEvent}
                    name="content"
                ></textarea>

                <Button onClick={addEvent}>
                    <AddIcon className="plus_sign" />
                </Button>

            </form>
        </div>

    );
};
export default Createnote;

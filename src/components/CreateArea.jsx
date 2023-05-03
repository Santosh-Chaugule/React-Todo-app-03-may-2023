import React, { useState } from "react";
import Fab from "@material-ui/core/Fab"
import AddIcon from "@material-ui/icons/Add"

function CreateArea(props) {


    const [isExpandeed, setExpanded] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handelChange(event) {
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };

        })
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault();
    }

    function expand() {
        setExpanded(true)
    }
    return (
        <div>
            <form className="create-note">
                {isExpandeed && (
                    <input type="text"
                        name="title"
                        placeholder="Title"
                        onChange={handelChange}
                        value={note.title} />
                )}
                <textarea name="content"
                    rows={isExpandeed ? 3 : 1}
                    onClick={expand}
                    onChange={handelChange}
                    value={note.content}
                    placeholder="Take a note..."></textarea>

                <Fab onClick={submitNote}>
                    <AddIcon></AddIcon>
                </Fab>
            </form>
        </div>
    )
}

export default CreateArea
import React from "react";
import "../css/deletePage.css";
import { useDispatch } from "react-redux";
import { deleteTodoRequest } from "../../actions";

const DeletePage = (props) => {
    const dispatch = useDispatch();
    const todoDelete = {
        content: props.match.params.content,
        id: props.match.params.id,
    };

    return (
        <div className="deletePage-Main">
            <div className="deletePage-Header">
                <label>Delete</label>
            </div>
            <div className="deletePage-Body">
                <button
                    type="submit"
                    className="deletePage-Button"
                    onClick={() => dispatch(deleteTodoRequest(todoDelete))}
                >
                    Yes
                </button>
                <button
                    type="submit"
                    className="deletePage-Button"
                    onClick={() => (document.location = "/")}
                >
                    No
                </button>
            </div>
        </div>
    );
};

export default DeletePage;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoRequest } from "../../actions";
import "../css/addTodoPage.css";

const INITIALSTATE = {
    addTodo: "",
    id: "",
    accessToken: "",
};

const AddTodoPage = () => {
    const [todo, setTodo] = useState(INITIALSTATE);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const token = useSelector((state) => state.token);
    const { addTodo } = todo;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTodo({
            ...todo,
            [name]: value,
            id: user.user._id,
            accessToken: token.token,
        });
    };

    const handleSubmit = () => {
        dispatch(addTodoRequest(todo));
    };

    return (
        <div className="addTodo-Main">
            <div className="addTodo-Header">
                <label>Add Todo</label>
            </div>
            <div className="addTodo-Body">
                <input
                    type="text"
                    placeholder="Add Todo"
                    className="addTodo-Input"
                    value={addTodo}
                    name="addTodo"
                    onChange={handleChange}
                />
            </div>
            <div className="addTodo-Footer">
                <button className="addTodo-Button" onClick={handleSubmit}>
                    Add
                </button>
            </div>
        </div>
    );
};

export default AddTodoPage;

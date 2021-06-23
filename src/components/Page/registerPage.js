import React, { useState } from "react";
import axios from "axios";
import "../css/registerPage.css";

const INITIALSTATE = {
    username: "",
    password: "",
    error: "",
};

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

const RegisterPage = () => {
    const [user, setUser] = useState(INITIALSTATE);

    const { username, password, error } = user;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = () => {
        axios
            .post(`${REACT_APP_API_URL}/user/register`, user)
            .then((res) => console.log(res))
            .catch((error) => {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
            });

        setUser(INITIALSTATE);
    };

    return (
        <div className="register-Page-Main">
            <div className="register-Input-main">
                <div className="register-Header">
                    <label>Register</label>
                </div>
                <label className="register-Label">Username</label>
                <input
                    type="text"
                    placeholder="Username"
                    className="user-Input"
                    value={username}
                    name="username"
                    onChange={handleChange}
                />
                <label className="register-Label">Password</label>
                <input
                    type="text"
                    placeholder="Password"
                    className="user-Input"
                    value={password}
                    name="password"
                    onChange={handleChange}
                />
                <button
                    type="submit"
                    className="register-Button"
                    onClick={handleSubmit}
                >
                    Register
                </button>
            </div>
        </div>
    );
};

export default RegisterPage;

import React, { useState } from "react";
import "../css/registerPage.css";
import { dispatchLogin, loginRequest } from "../../actions";
import ErrorMessage from "../utils/errorMessage";
import { useDispatch, useSelector } from "react-redux";

const INITIALSTATE = {
    username: "",
    password: "",
};

const LoginPage = () => {
    const [user, setUser] = useState(INITIALSTATE);
    const dispatch = useDispatch();
    const noti = useSelector((state) => state.noti);

    const { username, password } = user;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginRequest(user));
        localStorage.setItem("firstLogin", true);
        dispatch(dispatchLogin());
        setUser(INITIALSTATE);
    };

    return (
        <div className="register-Page-Main">
            <div className="register-Input-main">
                <div className="register-Header">
                    <label>Login</label>
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
                    className="login-Button"
                    onClick={handleSubmit}
                >
                    Login
                </button>
                <button
                    type="submit"
                    className="link-Register-Button"
                    onClick={() => (window.location = "/register")}
                >
                    Register
                </button>
            </div>
            {noti.showMessage ? (
                <ErrorMessage errorMessage={noti.errorMessage} />
            ) : null}
        </div>
    );
};

export default LoginPage;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/homePage.css";

const HomePage = () => {
    const auth = useSelector((state) => state.auth);

    return (
        <div className="homePage-main">
            <div className="homePage-title">
                <label className="todo-Title">Todo List</label>
                <div className="homePage-button">
                    <button
                        className="homePage-Button-Login"
                        onClick={() => {
                            document.location = "/login";
                        }}
                    >
                        Login
                    </button>
                    <button
                        className="homePage-Button-Register"
                        onClick={() => {
                            document.location = "/register";
                        }}
                    >
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;

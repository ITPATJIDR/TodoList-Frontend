import React from "react";
import "../css/errorMessage.css";

const ErrorMessage = ({ errorMessage }) => {
    return (
        <div className="error-Message-Main">
            <label>{errorMessage}</label>
        </div>
    );
};

export default ErrorMessage;

import React from "react";
import { Router, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../store";
import HomePage from "../components/Page/homePage";
import LoginPage from "../components/Page/loginPage";
import RegisterPage from "../components/Page/registerPage";
import "../components/css/App.css";

class App extends React.Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/register" component={RegisterPage} />
                </Router>
            </div>
        );
    }
}
export default App;

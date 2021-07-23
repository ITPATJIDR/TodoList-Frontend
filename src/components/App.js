import React, { useEffect } from "react";
import { Router, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../store";
import HomePage from "../components/Page/homePage";
import LoginPage from "../components/Page/loginPage";
import RegisterPage from "../components/Page/registerPage";
import TodoListPage from "../components/Page/TodoListPage";
import AddTodoPage from "../components/Page/addTodoPage";
import DeletePage from "../components/Page/deletePage";
import TodoDonePage from "../components/Page/todoDonePage";
import { getToken, dispatchLogin, getUser, getTodoRequest } from "../actions";
import "../components/css/App.css";

const App = () => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    const auth = useSelector((state) => state.auth);
    const user = useSelector((state) => state.user);
    const userId = user.user._id;

    useEffect(() => {
        const firstLogin = localStorage.getItem("firstLogin");
        if (firstLogin) {
            dispatch(getToken());
        }
    }, [auth.isLogged, dispatch]);

    useEffect(() => {
        if (token.token) {
            dispatch(dispatchLogin());
            dispatch(getUser(token));
        }
    }, [token, dispatch]);

    useEffect(() => {
        if (user) {
            dispatch(getTodoRequest({ id: userId }));
        }
    }, [user, dispatch]);

    return (
        <div>
            <Router history={history}>
                <Route
                    exact
                    path="/"
                    component={auth.isLogged ? TodoListPage : HomePage}
                />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/register" component={RegisterPage} />
                <Route
                    exact
                    path="/todolist"
                    component={auth.isLogged ? TodoListPage : LoginPage}
                />
                <Route exact path="/addtodo" component={AddTodoPage} />
                <Route
                    exact
                    path="/deletetodo/:id/:content/"
                    component={DeletePage}
                />
                <Route exact path="/tododone" component={TodoDonePage} />
            </Router>
        </div>
    );
};

export default App;

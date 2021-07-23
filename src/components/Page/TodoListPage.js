import React, { useState, useEffect } from "react";
import "../css/todoListPage.css";
import { useSelector, useDispatch } from "react-redux";
import {
    RiCheckboxBlankCircleLine,
    RiDeleteBack2Fill,
    RiCheckboxBlankCircleFill,
} from "react-icons/ri";
import { logOut } from "../../actions";
import { io } from "socket.io-client";

const TodoListPage = () => {
    const todo = useSelector((state) => state.todo);
    const dispatch = useDispatch();
    const username = todo.user;
    const todoList = todo.todo;
    const [click, setClick] = useState(false);
    const socket = io("ws://localhost:8900");

    const handleLogOut = async () => {
        dispatch(logOut());
    };

    const handleChangeStauts = (id, content) => {
        const data = { id, content };
        socket.emit("changeStatus", data);
    };

    return (
        <div className="todoList-Main">
            <div className="todoList-Header">
                <label className="todoList-Title">
                    {username ? username : "user"}
                </label>
                <label className="todoList-Task">Task</label>
            </div>
            <div className="todoList-Body">
                <div className="todoList-List-Main">
                    {todoList?.length
                        ? todoList.map((item, i) => {
                              return (
                                  <div key={i} className="todoList-List">
                                      <div className="todoList-List-header">
                                          {click ? (
                                              <RiCheckboxBlankCircleFill
                                                  onClick={() =>
                                                      handleChangeStauts(
                                                          item._id,
                                                          item.content
                                                      )
                                                  }
                                              />
                                          ) : (
                                              <RiCheckboxBlankCircleLine
                                                  onClick={() =>
                                                      handleChangeStauts(
                                                          item._id,
                                                          item.content
                                                      )
                                                  }
                                              />
                                          )}
                                      </div>
                                      <div className="todoList-List-Body">
                                          {item.content}
                                      </div>
                                      <div className="todoList-List-Footer">
                                          <RiDeleteBack2Fill
                                              onClick={() =>
                                                  (document.location = `/deletetodo/${item._id}/${item.content}`)
                                              }
                                          />
                                      </div>
                                  </div>
                              );
                          })
                        : null}
                </div>
            </div>
            <div className="todoList-Footer">
                <div
                    className="todoList-addTodo"
                    onClick={() => (document.location = "/addtodo")}
                >
                    Add Todo
                </div>
                <div className="todoList-logOut" onClick={() => handleLogOut()}>
                    Logout
                </div>
            </div>
        </div>
    );
};
export default TodoListPage;

import React from "react";
import { useSelector } from "react-redux";
import { getToDoList } from "../../redux/selector";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
  const items = useSelector(getToDoList);
  const listItems = items.map((item, index) => (
    <ToDoItem key={index} item={item} />
  ));

  return <div className="toDoList">{listItems}</div>;
};

export default ToDoList;

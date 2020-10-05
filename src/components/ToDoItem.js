import React from "react";
import styles from "./../styles.module.css";

const ToDoItem = (props) => {
  return (
    <div className={styles.item}>
      <input type="checkbox" checked={props.item.completed} onChange={()=>props.handleChange(props.item.id)}/>
      <label>{props.item.text}</label>
    </div>
  );
};

export default ToDoItem;

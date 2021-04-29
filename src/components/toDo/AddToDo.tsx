import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addToDo } from "../../redux/action";

const AddToDo = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const addItemToList = () => {
    if (name.length > 0) {
      const newItem = {
        name,
        completed: false,
      };
      setName("");
      dispatch(addToDo(newItem));
    }
  };

  return (
    <div className="header">
      <div className="addToDo">
        <>
          <TextField
            label="Enter task"
            value={name}
            size="small"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          ></TextField>
          <Button
            size="large"
            variant="contained"
            color="primary"
            onClick={addItemToList}
          >
            Add task
          </Button>
        </>
      </div>
    </div>
  );
};

export default AddToDo;

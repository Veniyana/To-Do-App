import React, { useState } from "react";
import { FormControl, TextField, Button } from "@material-ui/core";
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
        <FormControl>
          <TextField
            label="Enter task"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          ></TextField>
          <Button onClick={addItemToList}>Add task</Button>
        </FormControl>
      </div>
    </div>
  );
};

export default AddToDo;

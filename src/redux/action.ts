import { ToDoType, NoteType } from "./types";

export const addToDo = (item: ToDoType) => ({
  type: "addToDo",
  item,
});

export const removeToDo = (item: ToDoType) => ({
  type: "deleteToDo",
  item,
});

export const changeToDoCompleteness = (item: ToDoType) => ({
  type: "toDoCompleteness",
  item,
});

export const addNote = (note: NoteType) => ({
  type: "addNote",
  note,
});

export const changeDescription = (note: NoteType) => ({
  type: "changeDescription",
  note,
});

export const deleteNote = (note: NoteType) => ({
  type: "deleteNote",
  note,
});

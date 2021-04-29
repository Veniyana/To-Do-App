import { RootState } from "./types";

export const getToDoList = (state: RootState) => {
  return state.toDoList;
};

export const getNoteList = (state: RootState) => {
  return state.noteList;
}

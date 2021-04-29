import { RootState } from "./types";

const initialState = {
  toDoList: [],
  noteList: [],
} as RootState;

const reducer = (state: RootState = initialState, action: any): RootState => {
  switch (action.type) {
    case "addToDo": {
      return { ...state, toDoList: [...state.toDoList, action.item] };
    }
    case "deleteToDo": {
      const newList = state.toDoList.filter((x) => x.name !== action.item.name);
      return { ...state, toDoList: [...newList] };
    }
    case "toDoCompleteness": {
      const newList = state.toDoList.filter((x) => x.name !== action.item.name);
      return {
        ...state,
        toDoList: [
          ...newList,
          { name: action.item.name, completed: !action.item.completed },
        ],
      };
    }
    case "addNote": {
      return { ...state, noteList: [...state.noteList, action.note] };
    }
    case "deleteNote": {
      const newList = state.noteList.filter((x) => x.name !== action.note.name);
      return { ...state, noteList: [...newList] };
    }
    case "changeDescription": {
      const newList = state.noteList.filter((x) => x.name !== action.note.name);
      return {
        ...state,
        noteList: [
          ...newList,
          { name: action.note.name, description: action.note.description },
        ],
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;

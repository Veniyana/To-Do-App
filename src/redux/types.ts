export type ToDoType = {
  name: string;
  completed: boolean;
};

export type NoteType = {
  name:string,
  description:string,
}

export type RootState = {
  toDoList: ToDoType[];
  noteList: NoteType[];
};

import React from "react";
import { useSelector } from "react-redux";
import { getNoteList } from "../../redux/selector";
import NoteItem from "./NoteItem";

const NoteList = () => {
  const notes = useSelector(getNoteList);
  const listItems = notes.map((note, index) => {
    return <NoteItem key={index} note={note} />;
  });
  return <div className="noteList">{listItems}</div>;
};

export default NoteList;

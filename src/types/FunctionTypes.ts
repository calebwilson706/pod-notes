import { ChangeEvent } from "react";
import { Note } from "./PodNote";


export type addNewNoteMethod = (newNote : Note) => void
export type handleChange = (e : ChangeEvent<HTMLInputElement>) => void
export type ChangeSelection = (index : number) => void
export type UpdateNoteText = (newNoteText : string) => void
export type UpdateTextArea = (newString : string) => void
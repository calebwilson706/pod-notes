import { FormEvent } from "react";
import { ChangeEvent } from "react";
import { Note } from "./PodNote";


export type addNewNoteMethod = (newNote : Note) => void
export type handleChange = (e : ChangeEvent<HTMLInputElement>) => void
export type ChangeSelection = (index : number) => void
export type UpdateNoteText = (newNoteText : string) => void
export type UpdateTextArea = (newString : string) => void
export type DeletePodnoteProcedure = (i : number) => void
export type HandleSubmit = (e: FormEvent<HTMLButtonElement>) => void
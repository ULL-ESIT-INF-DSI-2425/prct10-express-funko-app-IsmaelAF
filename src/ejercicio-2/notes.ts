//import fs from "fs";
import * as fs from 'fs/promises'
//import * as path from 'path'
import { Note, ResponseType } from "./types.js";
import path from "path";

export function readNote (titulo: string): Promise<ResponseType> {
    return new Promise<ResponseType>((resolve, reject) => {
        loadNotes()
            .then((result) => {
                const notes: Note[] = JSON.parse(result);
                const foundNote = notes.find((note) => note.title === titulo);
                const response: ResponseType = {
                    type: "read",
                    success: foundNote ? true : false,
                    notes: foundNote ? [foundNote] : undefined,
                }
                resolve(response);
            })
            .catch((error) => {
                const response: ResponseType = {
                    type: "read",
                    success: false
                }
                reject(response);
            })
    })
}

export function loadNotes(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        fs.readFile("public/notes/notes.json")
            .then((data) => {resolve(data.toString())})
            .catch((err) => {reject("Error")})
    })
}

/*const loadNotes = new Promise<string>((resolve, reject) => {
    //const data = fs.readFile("public/notes/notes.json");
    return fs.readFile("public/notes/notes.json")
        .then((data) => {resolve(data.toString())})
        .catch((err) => {reject("Error")})
    
})*/


/*
export const readNoteold = (
  title: string,
  cb: (err: string | undefined, res: ResponseType | undefined) => void,
) => {
  loadNotesold((err, data) => {
    if (err) {
      cb(err, undefined);
    } else if (data) {
      const notes: Note[] = JSON.parse(data);
      const foundNote = notes.find((note) => note.title === title);
      const response: ResponseType = {
        type: "read",
        success: foundNote ? true : false,
        notes: foundNote ? [foundNote] : undefined,
      };
      cb(undefined, response);
    }
  });
};

const loadNotesold = (
  cb: (err: string | undefined, data: string | undefined) => void,
) => {
  fs.readFile("public/notes/notes.json", (err, data) => {
    if (err) {
      cb(`Error reading notes file: ${err.message}`, undefined);
    } else {
      cb(undefined, data.toString());
    }
  });
};
*/
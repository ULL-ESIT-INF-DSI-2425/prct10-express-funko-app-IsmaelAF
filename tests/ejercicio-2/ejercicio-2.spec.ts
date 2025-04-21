import { afterAll, beforeAll, describe, expect, test, vi } from "vitest";

import fs from "fs";
//import request from 'supertest';
import path from "path";


import { afterEach, beforeEach } from "node:test";

import {readNote, loadNotes} from "../../src/ejercicio-2/notes"
import { Note, ResponseType } from "../../src/ejercicio-2/types";
import {app} from "../../src/ejercicio-2/server"

//import {app} from "../../src/ejercicio-1/server";
//import { request } from "http";
import request from "supertest";

let server: any;

describe("funciones", () => {
    test("readNotes, nota existente", () => {
        return readNote("Blue note").then((data) => {
            expect(data.success).to.be.eql(true);
        })
    })

    test("readNotes, nota NO existente", () => {
        return readNote("NO EXISTE").catch((err) => {
            expect(err.success).to.be.eql(false);
        })
    })

    /*test("loadNotes", () => {
        return loadNotes().then((data) => {
            expect(data).to.be.toEqual();
        })
    })*/

})


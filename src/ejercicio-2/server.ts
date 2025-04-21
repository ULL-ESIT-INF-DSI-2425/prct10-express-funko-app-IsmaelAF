import express from "express";
import { readNote } from "./notes.js";

export const app = express();
app.disable('x-powered-by');

app.get("/notes", (req, res) => {
  if (!req.query.title) {
    res.send({
      error: "A title has to be provided",
    });
  } else {
    readNote(req.query.title as string)
    .then((result) => {
        res.send(result);
    })
    .catch((error) => {
        res.send(error);
    })
    /*readNote(req.query.title as string, (err, data) => {
      if (err) {
        res.send({
          error: err,
        });
      } else if (!data!.success) {
        res.send({
          error: `No note was found`,
        });
      } else {
        res.send({
          notes: data!.notes,
        });
      }
    });*/
  }
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});

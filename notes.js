import fs from "fs";
import chalk from "chalk";

//Add Note function
const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("Note added");
  } else {
    console.log("Note title already used!");
  }
};

//Creating remove function
const removeNote = function (title) {
  const notes = loadNotes();
  const keepUniqueNotes = notes.filter((note) => note.title !== title);
  if (notes.length > keepUniqueNotes.length) {
    console.log(chalk.green.inverse("Note removed"));
  } else {
    console.log(chalk.red.inverse("Note not found"));
  }
  saveNotes(keepUniqueNotes);
};

//Creating list notes function
const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.blue.inverse("Your Notes!"));
  notes.forEach((element) => {
    console.log(element.title);
  });
};

//Creating read notes function
const readNotes = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(chalk.blue(note.title, "\n", note.body));
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }
};

//Load notes function
const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

//save notes function
const saveNotes = function (notes) {
  const dataToString = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataToString);
};

//exports
export { readNotes, addNote, removeNote, listNotes };

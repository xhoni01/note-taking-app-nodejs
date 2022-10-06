import { readNotes, addNote, removeNote, listNotes } from "./notes.js";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

// Create add command
yargs(hideBin(process.argv))
  .command({
    command: "add",
    describe: "Adding command",
    builder: {
      title: {
        describe: "Note Title",
        demandOption: true,
        type: "string",
      },
      body: {
        describe: "Add more information about the note",
        demandOption: true,
        type: "string",
      },
    },
    handler: (argv) => {
      addNote(argv.title, argv.body);
    },
  })
  .parse();

//  Create remove command
yargs(hideBin(process.argv))
  .command({
    command: "remove",
    describe: "Removing a note command",
    builder: {
      title: {
        describe: "Note Title",
        demandOption: true,
        type: "string",
      },
    },
    handler: (argv) => {
      removeNote(argv.title);
    },
  })
  .parse();

// Create list command
yargs(hideBin(process.argv))
  .command({
    command: "list",
    describe: "Listing notes",
    handler: () => {
      listNotes();
    },
  })
  .parse();

//  Create read command
yargs(hideBin(process.argv))
  .command({
    command: "read",
    describe: "Reading notes",
    builder: {
      title: {
        describe: "Note title",
        demandOption: true,
        type: "string",
      },
    },
    handler: (argv) => {
      readNotes(argv.title);
    },
  })
  .parse();

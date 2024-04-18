const {Router} = require("express") ;
const express = require("express");
const {getNote,addNote,deleteNote} = require("../controllers/notecontroller")

const noteRouter = new Router();

noteRouter.use(express.json())
noteRouter.use(express.urlencoded({ extended: true }))

noteRouter.get("/note/all",getNote);
noteRouter.post("/note/add",addNote);
noteRouter.delete("/note/delete/:id",deleteNote);

module.exports = {
    noteRouter
}
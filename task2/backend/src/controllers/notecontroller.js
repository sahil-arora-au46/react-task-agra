const { text } = require("express");
const {getConnection} = require("../../configDB");
const { v4: uuidv4 } = require('uuid');


async function getNote(req, res) {
  const connection = await getConnection();
  try {
    const [rows] = await connection.query('SELECT * FROM notes');
    res.status(200).json(rows); 
  } catch (err) {
    console.error('Error fetching notes:', err);
    res.status(500).send('Internal Server Error');
  } finally {
    connection.release();
  }
}



 async function deleteNote(req, res) {
  const connection = await getConnection();
  try {
    // Assuming you have a parameter for the note id to delete
    const { id } = req.params;
    await connection.query('DELETE FROM notes WHERE id = ?', [id]);
    res.status(200).send('Note deleted successfully');
  } catch (err) {
    console.error('Error deleting note:', err);
    res.status(500).send('Internal Server Error');
  } finally {
    connection.release();
  }
}

async function addNote(req, res) {
  const connection = await getConnection();
  const { note } = req.body;
  const id = uuidv4();
  try {
    await connection.query(`INSERT INTO notes (id, text) VALUES (?,?)`,[id,note]);
    const [rows] = await connection.query('SELECT * FROM notes WHERE id = ?', [id]);
    const insertedData = rows[0];
    res.status(200).json(insertedData);
    console.log(insertedData)
  } catch (err) {
    console.error('Error adding note:', err);
    res.status(500).send('Internal Server Error');
  } finally {
    connection.release();
  }
}


module.exports = { getNote,addNote,deleteNote};
const { text } = require("express");
const {getConnection} = require("../../configDB");


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
  const { id, note } = req.body;
  console.log(id,note)
  try {
    await connection.query(`INSERT INTO notes (id, text) VALUES (?,?)`,[id,note]);
    res.status(200).send('Note added successfully');
  } catch (err) {
    console.error('Error adding note:', err);
    res.status(500).send('Internal Server Error');
  } finally {
    connection.release();
  }
}


module.exports = { getNote,addNote,deleteNote};
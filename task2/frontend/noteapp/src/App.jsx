import { useEffect, useRef, useState } from 'react'
import './App.css'
import HeaderComponent from './components/Header'
import Card from './components/Card'
import axios from 'axios';
function App() {
  const [notes, setNotes] = useState([])
  const inputEle = useRef(null)
  // console.log(inputEle)
useEffect( ()=>{
  const fetchData = async () => {
    try {
      // Make an API call or fetch data from a source
      const response = await axios.get('http://localhost:3000/note/all');
      setNotes(response.data)
    } catch (error) {
      // Handle errors if any
      console.error('Error fetching data:', error);
    }
  };
  fetchData()

},[])

async function addNote() {
  try {
    
    const body = { note: inputEle.current.value };
  
    const response = await axios.post('http://localhost:3000/note/add', body);

    // Update the state with the response data
    setNotes([...notes, response.data]);
    inputEle.current.value = '';
  } catch (error) {
    console.error('Error adding note:', error);
  
  }
}


async function deleteNote(id){
  let filteredNotes = notes.filter(note => note.id != id)
  await axios.delete(`http://localhost:3000/note/delete/${id}`);
  setNotes([...filteredNotes])
}
  return (
    <>
  <HeaderComponent/>
  <div className='w-100 h-screen bg-slate-400'>
    <div className='flex justify-center '>  
<div>
<input ref={inputEle} type="text" className=' bor border-gray-700  border-solid border-2 rounded-md border-r-0 rounded-r-none h-11 mt-8' />
<button onClick={addNote} className='border-gray-700  border-solid border-2 rounded-md border-l-0 rounded-l-none bg-slate-500 p-2'>Add Note</button>
</div>
     </div>
    <div className='flex flex-wrap items-start' >  
    {notes.map((todo)=>{
      return <Card key={todo.id} id={todo.id} onDelete={deleteNote} text={todo.text} date={todo.created_at}/>
    })}
    </div>
  </div>
    </>
  )
}

export default App

import { useState } from 'react'

function App() {

  const[tasks, setTasks] = useState([]);
  const [newtask, setNewTask] = useState("");

  function agregarTarea(event: any){
    setNewTask(event.target.value); //captura el valor del input y lo envia a setNewtask
  }

  function addTask(){
    if(newtask.trim() !== ""){
    setTasks([...tasks, newtask]);
    setNewTask("");
    }else {
      alert("ingrese una tarea valida");
    }
  }
  
  function deleteTask(index: any){
    const updateTask = tasks.filter((_, i) => i!== index);
    setTasks(updateTask);
  }
  
  return (<>
    <div className="To-do-list">

     <h1>To-do list</h1>

     <div className='ingreso-tarea'>
      <input type='text' 
      placeholder='Ingresa la tarea' 
      value={newtask} 
      onChange={agregarTarea}></input>

      <button  onClick={addTask}>
        agregar tarea
      </button>
      </div> 

      <ol className='tareas'>
        {tasks.map((tasks, index)=>
        <li key={index}>

          <span>{tasks}</span>

          <button className='boton' onClick={() => deleteTask(index)}>
            Eliminar tarea
          </button>

        </li>)}
      </ol>
    </div>
  
    </>)
}

export default App

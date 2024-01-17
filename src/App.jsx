import {useState } from 'react';
import './App.css';
import {ListTareas} from './components/listTareas'
import UselocalStorage from './hooks/useLocalStorage'
import UseTareas from './hooks/useTareas';
function App() {
  const [tareas,setTareas] = useState([])
  UselocalStorage({setTareas,tareas})
  const [error,setError] = useState(null)
  const {completarTarea,eliminarTarea} = UseTareas({setTareas,tareas})
  

  const agregarTarea = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const tareaExistente = tareas.find((tarea) => tarea.title === data.inputTarea);
    if (tareaExistente) {
      setError("Ya tienes una tarea con el mismo nombre")
      setTimeout(() => {
        setError(null);
      }, 2000);
      return;
    }
    setTareas((prevTareas) => [
      ...prevTareas,
      { title: data.inputTarea, description: data.inputDescription, isCompleted: false },
    ]);
    
  };

  return (
    <>
    <header>
      <h1>To Do List📝</h1>
      <form onSubmit={agregarTarea}>
        <label htmlFor="inputTarea">Escribe tu tarea</label><br />
        <input type="text" name="inputTarea" required /><br />
        <label htmlFor="inputTarea">Descripcion</label><br />
        <input type="text" name="inputDescription" required/><br />
        <input type="submit" value="Agregar Tarea"/>
      </form>
    </header>
      {error && <h3 className='error'>{error}</h3>}
      <ListTareas tareas={tareas} completarTarea={completarTarea} eliminarTarea={eliminarTarea}/>
    </>
  );
}

export default App;

// hooks/useTareasEffect.js
import { useEffect } from 'react';

export function UseLocalStorage({setTareas,tareas}) {
  
  useEffect(() => {
    try {
      const tareasLocal = localStorage.getItem("tareas");
      if (tareasLocal) {
        setTareas(JSON.parse(tareasLocal));
      }
    } catch (error) {
      console.error("Error al analizar datos del localStorage:", error);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);
  
}

export default UseLocalStorage;

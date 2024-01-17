function UseTareas({setTareas,tareas}) {
  const completarTarea = (title) => {
    const newLista = tareas.map((item,index) => {
      if(title === item.title) {
        const completed = item.isCompleted
        return{...item,isCompleted:!completed}
      }
      return item
    })
    setTareas(newLista)
  }
  const eliminarTarea = (title) => {
    const newLista = tareas.filter((item,index) => title !== item.title)
    setTareas(newLista)
  }
  return {completarTarea,eliminarTarea}
}
export default UseTareas
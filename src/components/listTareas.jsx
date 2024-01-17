import check from "../check.svg"
import x from "../x.svg"
export function ListTareas({ tareas, completarTarea, eliminarTarea}) {
    const renderTareas = (completed) =>
      tareas.map((tarea, index) => {
        if (tarea.isCompleted === completed) {
          return(
          <article key={index}>
            <div className='btnTarea'>
              <button
                onClick={() => completarTarea(tarea.title)}
                className={tarea.isCompleted ? 'completado' : 'btn'}
              >
                {tarea.isCompleted ? <img src={check} alt="" /> : ''}
              </button>
              <button className='btnEliminar' onClick={() => eliminarTarea(tarea.title)}>
                <img src={x} alt="" />
              </button>
            </div>
            <div className='textTarea'>
              <h1>{tarea.title}</h1>
              <p>{tarea.description}</p>
            </div>
          </article>
        )}});
  
    return (
      <main id='lista'>
        <section>
          <h1>Por completar</h1>
          {renderTareas(false)}
        </section>
        <section>
          <h1>Completadas</h1>
          {renderTareas(true)}
        </section>
      </main>
    );
  }
  export default ListTareas;
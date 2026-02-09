import React from 'react'

export const ShowTask = ({tasklist, setTasklist, currenttask, setCurrenttask}) => {

  const handleEdit = (taskid) => {
    const selectedTask = tasklist.find((task)=>(task.id===taskid));
    setCurrenttask(selectedTask);
  }
  
  const handleDelete = (taskId) => { 
    /* other method
    const deleteIndex = tasklist.findIndex((task)=>(task.id===taskId));

    setTasklist(tasklist.toSpliced(deleteIndex, 1));
    */
    const updatedTasklist = tasklist.filter((task)=>(task.id!==taskId));
    setTasklist(updatedTasklist);

  }
  

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className='title'>Todo</span>
          <span className='count'>{tasklist.length}</span>
        </div>
        <button className='clearAll' onClick={()=>setTasklist([])}>Clear All</button>
      </div>
      <ul>
        {tasklist.map((task)=>(
          <li key={task.id}>
            <p>
              <span className='name'>{task.name}</span>
              <span className='time'>{task.time}.</span>
            </p>
            <i className='bi bi-pencil-square' onClick={() =>handleEdit(task.id)}></i>
            <i className='bi bi-trash' onClick={() =>handleDelete(task.id)} ></i>
          </li>
        ))}
      </ul>
    </section>
  )
}

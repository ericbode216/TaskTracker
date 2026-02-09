import React from 'react'

export const AddTask = ({tasklist, setTasklist, currenttask, setCurrenttask}) => {
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    
    if(currenttask.id){
      const date = new Date();
      /*
      const updatedTasklist = tasklist.map((task)=> 
        (task.id ===currenttask.id) ? 
          //if true
          {
            id: currenttask.id,
            name: currenttask.name, 
            time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
          } :
          //if false keep the same
          task
      );
      
      setTasklist(updatedTasklist);
      */

      //this should be faster than replacing every task
      const updatedTask =    {
            id: currenttask.id,
            name: currenttask.name, 
            time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
          };
      const indexToReplace = tasklist.findIndex((task)=>(task.id===currenttask.id));
      setTasklist(tasklist.toSpliced(indexToReplace, 1, updatedTask));

      setCurrenttask({});
    
    }else{
      const date = new Date();
    
      const newTask = {
        id: date.getTime(),
        name: currenttask.name, 
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      }
      setTasklist([...tasklist, newTask]);
      setCurrenttask({});
    }

    

    
  }
  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" autoComplete='off' placeholder='add task' maxLength="25" value={currenttask.name ||""} onChange={e => setCurrenttask({...currenttask, name:e.target.value})}/>
        <button type="submit">{(currenttask.id)? "Update": "Add"}</button>
      </form>

    </section>
  )
}

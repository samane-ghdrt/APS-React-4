import { useState,useEffect } from "react"


export default function TodoList(){
const [dataTask,setDataTask]=useState([])
const [newTask,setNewTask]=useState('');

const toggleComplete = (id) => {
    setDataTask(dataTask.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
    ));
};
function handle() {
 if (newTask.trim() !== "") {
    setDataTask([...dataTask, { id: dataTask.length+1 , title: newTask, completed: false }]);
        setNewTask("");
 }
}
const deleteTask = (id) => {
    setDataTask(dataTask.filter(task => task.id !== id));
};

     useEffect(()=>{
        
        const todo=async ()=>{
        const res = await fetch(
         "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5"
       );
       const info =await res.json();
       setDataTask(info);
       
    }
  todo();
},[])

    
    return(
        <div>
            <div>
                <input type="text" className="form-control" value={newTask} onChange={(e) => setNewTask(e.target.value)}
                 />
                <button  className="btn"  onClick={handle}>
                    add
                </button>
            </div>
            <div>
             { dataTask.map((item)=>{
return        <div>
                  <input type="checkbox" className="form-check-input me-2"
                                 checked={item.completed}
                            onChange={() => toggleComplete(item.id)} /> 
         <span style={{ textDecoration: item.completed ? "line-through" : "none" }}>
        {item.title}
        </span>
                  <button className="btn btn-danger btn-sm" onClick={() =>deleteTask(item.id)} ><i className="bi bi-trash"></i> </button>
              </div>
             })}
            </div>
        </div>
    )
}
import {useState} from 'react'

export default function NewTask({onAdd}){
    const [enteredTask ,setEnteredTask]=useState()


    function handleChange(event){
       setEnteredTask(event.target.value)
    }

    function handleClick(){
        onAdd(enteredTask)
       setEnteredTask('')
    }
    return(
        <div className="flex items-center gap-4"> 
            <input 
            type="text"
            className="w-64 px-2 py-1 rounded-sm bg-stone-200"
            onChange={handleChange}
            value={enteredTask}
            />
            <button 
            className="bg-stone-200 hover:950 px-1 py-1"
            onClick={handleClick}
            >Add Task</button>
        </div>
    )
}
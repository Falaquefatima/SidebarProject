import { useRef } from 'react'
import Input from './Input.jsx'
import Modal from './ErrorModal.jsx'

export default function NewProject({onAdd,onCancel}){
    const modal=useRef()
    const title=useRef()
    const description=useRef()
    const dueDate=useRef()

    function handleSave(){
        const enteredTitle=title.current.value
        const enteredDescription=description.current.value
        const enteredDueDate=dueDate.current.value

        //if  input not valid
        if(enteredTitle.trim()==='' || enteredDescription==='' || enteredDueDate===''){
           modal.current.open()
           return;
        }

        onAdd({
            title:enteredTitle,
            description:enteredDescription,
            dueDate:enteredDueDate
        })
    }
    return(
        <>
        <Modal ref={modal}>
            <h2 className='p-4 font-bold'>Invalid-Input</h2>
            <p className='p-4'>Oops...looks like you  forget enter value</p>
            <p className='p-4'>Please make sure you provide valid input</p>
        </Modal>
        <div className='w-[35rem] mt-16'>
            <menu className='flex items-center justify-end gap-4 my-4'>
                <li><button className='text-stone-800 hover:text-stone-950 ' onClick={onCancel}>Cancel</button></li>
                <li><button onClick={handleSave}
                 className='bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md'>Save</button></li>
            </menu>
            <div>
               <Input type="text" ref={title} label='Title'/>
               <Input ref={description} label='Description' textArea/>
               <Input type="date" ref={dueDate} label='Due Date'/>
            </div>
        </div>
        </>
    )
}
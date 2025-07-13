import noProject from '../assets/no-projects.png'
import Button from './Button.jsx'
export default function NoProjectSelected({onStartProject}){
return(
<div className="mt-24 text-center w-2/3 ">
    <img src={noProject} alt="project-Img" className='w-16 h-16 object-contain mx-auto' />
    <h2 className='text-xl font-bold text-stone-500 mt-4 my-4'>No Project Seleced</h2>
    <p className='text-stone-400  mb-4'>Select  a project or get started with new one</p>
    <p className='mt-8'>
        <Button onClick={onStartProject}>Create a new project</Button>
    </p>
</div>
)
}
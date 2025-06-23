import TaskList from "../components/Q5";

export default function List(){
    const task = [{
    id : 1,
    name : "Nextjs"
  },
{
    id : 2,
    name : "Reactjs"
  },
{
    id : 3,
    name : "Express"
  }]
    return(
        <>
         <TaskList data ={task} />
        </>
    );
}
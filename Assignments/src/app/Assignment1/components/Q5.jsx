// 5.Create a functional component named TaskList that accepts an array of task names as a prop.
// Use the map function to render each task name as a list item.
// Import and render the TaskList component in the App component with an array of tasks.

export default function TaskList(props) {
    const {data} = props
  const taskl = data.map((task) => <li key={task.id}>{task.name}</li>);
  return (
    <>
      <h1> {taskl}</h1>
    </>
  );
}







// const task = [
//     'training',
//     'Hit the Gym',
//     'Reactjs',                      // this give the error keys error in this we neeed to add keys
//     'Nextjs'
// ]

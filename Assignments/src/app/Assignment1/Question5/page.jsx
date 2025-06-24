import TaskList from "../components/Q5";

export default function App() {
  const tasks = ['Training', 'Hit the Gym', 'ReactJS', 'NextJS'];

  return (
    <div>
      <TaskList data={tasks} />
    </div>
  );
}

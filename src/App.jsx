import Todos from "./components/todos";
import AddTodo from "./components/AddTodo";
const Home = () => {
  return (
    <div className="min-h-screen min-w-[200px]">
      <div className="flex flex-col gap-4">
        <p className="text-lg font-bold">Tasks</p>
        <AddTodo />
      </div>
    </div>
  );
};

export default Home;

import TodoList from "./components/TodoList";
const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gradient-to-br from-pink-800 via-purple-800 to-indigo-800 p-4">
      <div className="">
        <TodoList />
      </div>
    </div>
  );
};
export default Home;

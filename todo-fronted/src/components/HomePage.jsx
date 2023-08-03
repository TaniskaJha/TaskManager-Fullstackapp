import AddNewTodoForm from "./AddNewTodoForm";
import TodosList from "./TodosList";

const HomePage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="my-5 text-4xl font-bold text-black">
          {" "}
          TASK Manager Full-stack App{" "}
        </h1>
        <AddNewTodoForm />
        <TodosList />
      </div>
    </div>
  );
};

export default HomePage;

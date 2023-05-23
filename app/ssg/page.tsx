type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const fetchTodo = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`, { cache: 'force-cache' });
  const todo: TodoType[] = await res.json();
  return todo;
};

async function Ssg() {
  const todo = await fetchTodo();

  return (
    <div>
      ssg 페이지입니다.
      <ul>
        {todo.map(({ id, title }: any) => (
          <h4 key={id}>{title}</h4>
        ))}
      </ul>
    </div>
  );
}

export default Ssg;

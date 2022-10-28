const ToDoList = ({ todos, onDeleteToDo }) => {
  return (
    <ul>
      {todos.map(({ id, text }) => {
        return (
          <li key={id}>
            <p>{text}</p>
            <button onClick={() => onDeleteToDo(id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default ToDoList;

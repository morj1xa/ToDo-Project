export default function InputForm() {
  return (
    <form className="inputForm">
      <input type="text" className="taskInput" placeholder="Add a new task" />
      <button type="submit" className="addBtn">
        Add
      </button>
    </form>
  );
}

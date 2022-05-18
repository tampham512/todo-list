import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <br></br>
      <Link to="/todo-list">TodoList App</Link>
      <br></br>
      <Link to="/show-todo-list">Show Todo-List User</Link>
    </div>
  );
}

export default App;

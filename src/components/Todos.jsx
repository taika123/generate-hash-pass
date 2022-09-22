import React from "react";
import "../App.css";
import { connect } from "react-redux";
import { deleteTodo } from "../store/action/todoAction";
function Todos({ todos, deleteTodo }) {
  return (
    <div className="checktext">
      {/* <ol type="">
        <p className="text-bios">BIOS PASSWORD: </p>
          {todos?.map((todo) => (
            // <li key={todo.id}>{todo.bios}</li>
           
          ))}
      </ol> */}

      <table>
        <tbody>
          <tr>
            <th>BIOS PASSWORD:</th>
            <th>HOST NAME:</th>
          </tr>
          {todos?.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.bios}</td>
              <td>
                {todo.hostname}{" "}
                <span
                  className="spanDelete"
                  onClick={deleteTodo.bind(this, todo.id)}
                >
                  &times;
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <ol>
        <p className="text-bios">HOST NAME:</p>
          {todos?.map((todo) => (
            <li key={todo.id}>{todo.hostname}
              <span className="spanDelete" onClick={deleteTodo.bind(this, todo.id)}>&times;</span>
            </li>
          ))}
      </ol> */}
    </div>
  );
}

const mapStateToProps = (state) => ({
  todos: state.myTodos.todos,
});
export default connect(mapStateToProps, { deleteTodo })(Todos);

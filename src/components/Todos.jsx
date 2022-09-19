import React from "react";
import "../App.css";
import { connect } from "react-redux";

function Todos({ todos }) {
  return (
    <div className="checktext">
      <ol type="">
        <p className="text-bios">BIOS PASSWORD: </p>
        {todos?.map((todo) => (
          <li key={todo.id}>{todo.bios}</li>
        ))}
      </ol>

      <ol>
        <p className="text-bios">HOST NAME:</p>
        {todos?.map((todo) => (
          <li key={todo.id}>{todo.hostname}</li>
        ))}
      </ol>
    </div>
  );
}

const mapStateToProps = (state) => ({
  todos: state.myTodos.todos,
});
export default connect(mapStateToProps, {})(Todos);

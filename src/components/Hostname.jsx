import React from 'react'
import { connect } from "react-redux";

function Hostname({todos}) {
  return (
    <div>
        
    </div>
  )
}

const mapStateToProps = (state) => ({
    todos: state.myTodos.todos,
  });
  export default connect(mapStateToProps, {})(Hostname);
  
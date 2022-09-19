import React from 'react'
import { connect } from "react-redux";

function Bios({todos}) {
  return (
    <div>
        
    </div>
  )
}

const mapStateToProps = (state) => ({
    todos: state.myTodos.todos,
  });
  export default connect(mapStateToProps, {})(Bios);
  
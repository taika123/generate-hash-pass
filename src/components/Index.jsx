import React from "react";
import TodoForm from "./TodoForm";
// import {md5} from "./main.js"

function Index() {
//   const [state, setState] = useState([md5("PF!FAGTX")])

//   const handleClick = () => {
//     setState([])
//   }
//   console.log(state)
  return (
    <div className="formWidth">
      <div className="form-todo">
      <h1>IT Admin - Password Generator</h1>
        <TodoForm />
      </div>
    </div>
  );
}

export default Index;

import React, { useState } from "react";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (todo) => {
    const tempTodoList = [...todoList];
    tempTodoList.push(todo);
    setTodoList(tempTodoList);
    // setCount((prev) => prev + 1);
  };

  const onDelete = () => {
    if(window.confirm("삭제하시겠습니까?")){
      deleteTodo();
      alert("삭제되었습니다.");
    }
    else {
      alert("취소하였습니다.");
    }
  }
  const deleteTodo = (index) => {
    const tempTodoList = [...todoList];
    tempTodoList.splice(index, 1);
    setTodoList(tempTodoList);
  };

  return (
    <div>
      <h1>부모</h1>
      <hr />
      <Child1 data={todoList} setData={addTodo} />
      <Child2 data={todoList} deleteData = {onDelete}/>
    </div>
  );
};

export default App;

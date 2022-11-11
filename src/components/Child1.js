import React, { useRef } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

// props = { data, setData }

const Child1 = ({ data, setData }) => {
  const todoRef = useRef();

  const onInsert = () => {
    if (todoRef.current.value === "") {
      alert("할일을 입력해주세요.");
      return;
    }

    if (data.includes(todoRef.current.value)) {
      alert("이미 등록한 할일입니다.");
      todoRef.current.value = "";
      todoRef.current.focus();
      return;
    }

    if (window.confirm("등록하시겠습니까?")) {
      insertTodo();
      alert("등록되었습니다.");
    } else {
      alert("취소되었습니다.");
      todoRef.current.value = "";
      todoRef.current.focus();
    }
  };
  const insertTodo = () => {
    setData(todoRef.current.value);
    todoRef.current.value = "";
    todoRef.current.focus();
  };

  const enterTodo = (e) => {
    if (e.key === "Enter") {
      onInsert();
    }
  };

  return (
    <div>
      <h1>자식1</h1>
      <InputGroup className="mb-3" style={{ width: "300px" }}>
        <Form.Control
          ref={todoRef}
          placeholder="할일을 입력하세요."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onKeyUp={enterTodo}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={onInsert}
        >
          Insert
        </Button>
      </InputGroup>
    </div>
  );
};

export default Child1;

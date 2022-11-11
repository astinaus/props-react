import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const Child2 = ({ data, deleteData }) => {
  return (
    <div>
      <h1>자식2</h1>
      <Card style={{ width: "18rem" }}>
        <Card.Header>할일 목록</Card.Header>
        <ListGroup variant="flush">
          {data.map((todo, index) => {
            return (
              <ListGroup.Item>
                {todo} <button onClick={() => deleteData(index)}>삭제</button>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Card>
    </div>
  );
};

export default Child2;

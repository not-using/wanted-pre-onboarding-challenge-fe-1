import React from "react";
import { useParams } from "react-router-dom";

const TodoDetailPage = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default TodoDetailPage;

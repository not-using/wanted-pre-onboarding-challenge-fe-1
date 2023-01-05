import React, { useEffect, useState } from "react";
import "../assets/css/TodoDetail.css";
import useApi from "../hooks/useApi";
import usePath from "../hooks/usePath";
import { todoItemDto } from "../types/todoItemDto";
import { amendState } from "../utils/amendState";
import Input from "./Input";

// interface todoDetailProps {
//   item: todoItemDto;
// }
const TodoDetail = () => {
  const [itemInfo, setItemInfo] = useState<todoItemDto | undefined>(undefined);

  const path = usePath();
  const { request } = useApi();

  useEffect(() => {
    request(
      {
        method: "get",
        url: `/todos${path}`,
      },
      (response: any) => {
        setItemInfo(response.data?.data);
      }
    );
  }, [path, request]);

  if (itemInfo === undefined) return null;
  return (
    <section className="todo-detail__wrapper">
      <Input
        value={itemInfo.title}
        onChange={(value: string) =>
          amendState(itemInfo, setItemInfo, "title", value)
        }
      />
    </section>
  );
};

export default TodoDetail;

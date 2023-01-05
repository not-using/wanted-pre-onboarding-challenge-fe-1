import React, { useEffect, useState } from "react";
import useApi from "../hooks/useApi";
import usePath from "../hooks/usePath";
import Input from "./Input";
import Button from "./Button";
import Textarea from "./Textarea";
import { todoItemDto } from "../types/todoItemDto";
import { amendState } from "../utils/amendState";
import { ReactComponent as EditIcon } from "../assets/image/edit.svg";
import { ReactComponent as TrashIcon } from "../assets/image/trash.svg";
import "../assets/css/TodoDetail.css";
import { useNavigate } from "react-router-dom";

interface todoDetailProps {
  updateTodo: (newTodo: todoItemDto) => void;
  removeTodo: (todoId: string) => void;
}
const TodoDetail = ({ updateTodo, removeTodo }: todoDetailProps) => {
  const [editMode, setEditMode] = useState(false);
  const [itemInfo, setItemInfo] = useState<todoItemDto | undefined>(undefined);
  const [originInfo, setOriginInfo] = useState<todoItemDto | undefined>(
    undefined
  );

  const path = usePath();
  const navigate = useNavigate();
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
    setEditMode(false);
  }, [path, request]);

  const onClickEdit = () => {
    if (!editMode) {
      setOriginInfo(itemInfo);
      setEditMode(true);
      return;
    }
    request(
      {
        method: "put",
        url: `/todos${path}`,
        data: {
          title: itemInfo?.title,
          content: itemInfo?.content,
        },
      },
      (response: any) => {
        const newTodo = response.data?.data;
        updateTodo(newTodo);
        setItemInfo(newTodo);
        setEditMode(false);
      }
    );
  };
  const onClickDelete = () => {
    request(
      {
        method: "delete",
        url: `/todos${path}`,
      },
      () => {
        removeTodo(path.slice(1));
        navigate("/");
      }
    );
  };
  const onClickUndo = () => {
    setEditMode(false);
    setItemInfo(originInfo);
  };

  if (itemInfo === undefined) return null;
  return (
    <section className="todo-detail__wrapper">
      <Input
        className="todo-detail__title"
        value={itemInfo.title}
        onChange={(value: string) =>
          amendState(itemInfo, setItemInfo, "title", value)
        }
        disabled={!editMode}
      />
      {editMode ? null : (
        <div className="todo-detail__date">
          <p>최초 생성일 : {itemInfo.createdAt.slice(0, 10)}</p>
          <p>최근 수정일 : {itemInfo.updatedAt.slice(0, 10)}</p>
        </div>
      )}
      <Textarea
        className="todo-detail__content"
        value={itemInfo.content ?? ""}
        onChange={(value: string) =>
          amendState(itemInfo, setItemInfo, "content", value)
        }
        disabled={!editMode}
      />
      <div className="todo-detail__buttons">
        <Button
          color={editMode ? "primary" : "tertiary"}
          value="수정"
          isFilled={editMode}
          onClick={onClickEdit}
          icon={<EditIcon />}
        />
        <Button
          className={editMode ? "no-icon" : ""}
          value={editMode ? "취소" : "삭제"}
          color="tertiary"
          icon={editMode ? undefined : <TrashIcon />}
          onClick={editMode ? onClickUndo : onClickDelete}
        />
      </div>
    </section>
  );
};

export default TodoDetail;

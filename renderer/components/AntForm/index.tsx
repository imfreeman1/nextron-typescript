import React, { useState } from "react";
import { Form, Input } from "antd";
import Button from "../Button";
import { useRecoilState } from "recoil";
import { todoListAtom } from "../../recoil/todo";
import { defaultTodoType } from "../../recoil/todo/type";
import { v4 as uuidv4 } from "uuid";

const { TextArea } = Input;

const AntForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [todoList, setTodoList] = useRecoilState(todoListAtom);
  const inputChange = ({ target }) => {
    setTitle(target.value);
  };
  const textareaChange = ({ target }) => {
    setContent(target.value);
  };
  const submitTodo = (e) => {
    e.preventDefault();
    const todo: defaultTodoType = {
      id: uuidv4(),
      title,
      content,
      isCompleted: false,
    };
    setTitle("");
    setContent("");
    setTodoList([...todoList, todo]);
  };
  const cancelHandler = () => {
    setTitle("");
    setContent("");
  };

  return (
    <div className="w-fit">
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
      >
        <Form.Item label="제목">
          <Input className="w-auto" onChange={inputChange} value={title} />
        </Form.Item>
        <Form.Item label="내용">
          <TextArea
            onChange={textareaChange}
            cols={18}
            rows={4}
            value={content}
            style={{ resize: "none" }}
          />
        </Form.Item>
        <div className="flex justify-evenly">
          <Button
            className="btn-blue"
            type="submit"
            onClick={submitTodo}
            disabled={title && content ? false : true}
          >
            {"완료"}
          </Button>
          <Button
            className="btn-white"
            type="button"
            onClick={cancelHandler}
            disabled={title || content ? false : true}
          >
            {"취소"}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AntForm;

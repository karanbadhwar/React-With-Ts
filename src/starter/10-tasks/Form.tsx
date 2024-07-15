import React, { useState } from "react";
import { useAppDispatch } from "../../hooks";
import { addTask } from "./slice";

function Form() {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text) {
      alert("Please enter a valid task");
      return;
    }
    //Adding Task to the slice
    dispatch(addTask(text));
    setText("");
  };

  return (
    <form className="form task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name=""
        className="form-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="btn" type="submit">
        Add Task
      </button>
    </form>
  );
}

export default Form;

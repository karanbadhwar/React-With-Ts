import React from "react";
import { useAppSelector } from "../../hooks";
import { taskState } from "./slice";

function List() {
  const tasks = useAppSelector((state) => state.task);
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    const st = JSON.parse(storedTasks);
    return st.map((task: taskState, index: number) => (
      <ul>
        <li className="list" key={index}>
          {task.text}
        </li>
      </ul>
    ));
  }
  return (
    <ul>
      {tasks &&
        tasks.map((task, index) => (
          <li className="list" key={index}>
            {task.text}
          </li>
        ))}
    </ul>
  );
}

export default List;

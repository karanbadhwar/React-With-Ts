import { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";
import type { Task } from "./types";
import { useAppSelector } from "../../hooks";

function Component() {
  const tasks = useAppSelector((state) => state.task);

  useEffect(() => {}, []);

  const upgradeStorage = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  return (
    <section>
      <Form />
      <List />
    </section>
  );
}
export default Component;

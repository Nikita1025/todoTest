import React from "react";
import s from "./App.module.scss";
import { Todo } from "../features/Todo";

const App = (): JSX.Element => {
  return (
    <div className={s.app}>
      <Todo />
    </div>
  );
};

export default App;

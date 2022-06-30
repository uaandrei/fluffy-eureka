import { useState } from "react";
import { Icon } from "../../../components";
import { TaskModel } from "../models";
import { useProjectsContext } from "../state/ProjectsState";

interface TaskProps {
  projectNo: number;
  task: TaskModel;
}

const TaskRowItem = ({ projectNo, task }: TaskProps) => {
  const { toggleCompleted, moveDown, moveUp } = useProjectsContext();
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="flex flex-row items-center border-b">
      <div className="flex-none font-bold mr-3">{task.orderNo}</div>
      <div className={`flex-1 ${task.completed && "line-through"}`}>
        <span>{task.title}</span>
      </div>
      <div className="flex-none">
        <span
          className={`mr-2 ml-4 ${showOptions ? "bg-gray-200" : ""}`}
          onClick={() => setShowOptions(!showOptions)}
        >
          <Icon type="v-dots" />
        </span>
        <div
          className={`${
            showOptions ? "visible" : "hidden"
          } absolute bg-white border p-4 border-black right-1 md:right-auto divide-y divide-black`}
        >
          <div>
            <label className="px-2 rounded-2xl hover:bg-slate-200 bg-transparent transition-all duration-500 hover:cursor-pointer">
              <input
                type="checkbox"
                title="completed"
                className="hover:cursor-pointer mr-1"
                checked={task.completed}
                onChange={() => toggleCompleted(projectNo, task.orderNo)}
              />
              mark {task.completed ? "not done" : "done"}
            </label>
          </div>
          <div>
            <span onClick={() => moveUp(projectNo, task.orderNo)}>
              <label className="px-2 rounded-2xl hover:bg-slate-200 bg-transparent transition-all duration-500 hover:cursor-pointer">
                <Icon type="up" />
                move item up
              </label>
            </span>
          </div>
          <div>
            <span onClick={() => moveDown(projectNo, task.orderNo)}>
              <label className="px-2 rounded-2xl hover:bg-slate-200 bg-transparent transition-all duration-500 hover:cursor-pointer">
                <Icon type="down" />
                move item down
              </label>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { TaskRowItem };

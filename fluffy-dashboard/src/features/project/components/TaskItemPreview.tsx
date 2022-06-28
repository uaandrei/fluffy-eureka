import { TrashIcon, UpIcon } from "../../../components/icons";
import { DownIcon } from "../../../components/icons/DownIcon";
import { VerticalDotsIcon } from "../../../components/icons/VerticalDotsIcon";
import { TaskModel } from "../models";
import { useProjectsContext } from "../state/ProjectsState";

interface TaskProps {
  projectNo: number;
  task: TaskModel;
}

const TaskItemPreview = ({ projectNo, task }: TaskProps) => {
  const { toggleCompleted, moveDown, moveUp } = useProjectsContext();
  return (
    <div className="flex flex-row items-center border-b">
      <div className="flex-none font-bold">{task.orderNo}</div>
      <div className="flex flex-col mx-4">
        <span onClick={() => moveUp(projectNo, task.orderNo)}>
          <UpIcon />
        </span>
        <span onClick={() => moveDown(projectNo, task.orderNo)}>
          <DownIcon />
        </span>
      </div>
      <div className={`flex-1 ${task.completed && "line-through"}`}>
        <span className="hover:underline hover:cursor-pointer">
          {task.title}
        </span>
      </div>
      <div className="flex-none">
        <label className="py-1 px-2 rounded-2xl hover:bg-slate-200 bg-transparent transition-all duration-500 hover:cursor-pointer">
          <input
            type="checkbox"
            title="completed"
            className="hover:cursor-pointer"
            checked={task.completed}
            onChange={() => toggleCompleted(projectNo, task.orderNo)}
          />
        </label>
      </div>
      <div className="flex-none">
        <span className="mr-2 ml-4">
          <VerticalDotsIcon />
        </span>
      </div>
    </div>
  );
};

export { TaskItemPreview };

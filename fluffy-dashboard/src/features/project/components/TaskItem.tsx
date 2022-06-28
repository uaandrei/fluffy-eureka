import { TaskModel } from "../models";
import { useProjectsContext } from "../state/ProjectsState";

interface TaskProps {
  projectId: string;
  task: TaskModel;
}

const TaskItem = ({ projectId, task }: TaskProps) => {
  const { toggleCompleted, moveDown, moveUp } = useProjectsContext();
  return (
    <div className="flex flex-row items-center">
      <div className="flex flex-col">
        <button
          className="mx-2"
          type="button"
          onClick={() => moveUp(projectId, task.orderNo)}
        >
          ^
        </button>
        <button
          className="mx-2"
          type="button"
          onClick={() => moveDown(projectId, task.orderNo)}
        >
          v
        </button>
      </div>
      <div className="flex-none mr-2">{task.orderNo}.</div>
      <div className="flex-1">
        <label>
          <input
            type={"checkbox"}
            title="completed"
            checked={task.completed}
            onChange={() => toggleCompleted(projectId, task.orderNo)}
          />
          <span className="ml-1">{task.title}</span>
        </label>
      </div>
    </div>
  );
};

export { TaskItem };

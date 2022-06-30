import _ from "lodash";
import { EditableValue, Icon, Label } from "../../../components";
import { ProjectModel } from "../models";
import { useProjectsContext } from "../state/ProjectsState";
import { TaskRowItem } from ".";

interface ProjectProps {
  project: ProjectModel;
}

const ProjectRowItem = ({ project }: ProjectProps) => {
  const { toggleExpand, moveProjectDown, moveProjectUp } = useProjectsContext();
  return (
    <div className="my-4">
      <div className="flex flex-row border-b-4 items-center">
        <div
          className="flex-none mr-2"
          onClick={() => toggleExpand(project.orderNo)}
        >
          {project.expanded ? <Icon type="collapse" /> : <Icon type="expand" />}
        </div>
        <div className="flex-auto text-xl">
          <EditableValue
            displayValue={project.name}
            onSave={(newValue) => {}}
          />
        </div>
        <div className="flex-none mr-10">
          <Label type="green" value="ITG" />
          <Label type="blue" value="ITG" />
          <Label type="fuchsia" value="ITG" />
        </div>
        <div className="flex-none">
          <span
            className="mr-2"
            onClick={() => {
              moveProjectUp(project.orderNo);
            }}
          >
            <Icon type="up" />
          </span>
          <span
            onClick={() => {
              moveProjectDown(project.orderNo);
            }}
          >
            <Icon type="down" />
          </span>
        </div>
      </div>
      {project.expanded &&
        _.map(project.tasks, (item) => (
          <div className="my-2" key={item.id}>
            <TaskRowItem projectNo={project.orderNo} task={item} />
          </div>
        ))}
    </div>
  );
};

export { ProjectRowItem };

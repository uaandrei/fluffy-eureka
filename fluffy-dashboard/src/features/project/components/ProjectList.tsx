import _ from "lodash";
import { CollapseIcon, ExpandIcon, UpIcon } from "../../../components/icons";
import { DownIcon } from "../../../components/icons/DownIcon";
import { ProjectModel } from "../models";
import { useProjectsContext } from "../state/ProjectsState";
import { TaskItemPreview } from "./";

interface ProjectProps {
  project: ProjectModel;
}

const ProjectList = ({ project }: ProjectProps) => {
  const { toggleExpand, moveProjectDown, moveProjectUp } = useProjectsContext();
  return (
    <div className="my-4">
      <div className="flex flex-row border-b-4 items-center">
        <div
          className="flex-none mr-2"
          onClick={() => toggleExpand(project.orderNo)}
        >
          {project.expanded ? <CollapseIcon /> : <ExpandIcon />}
        </div>
        <div className="flex-auto text-xl mb-1 hover:cursor-pointer">
          <h1 onClick={() => toggleExpand(project.orderNo)}>{project.name}</h1>
        </div>
        <div className="flex flex-col mx-4">
          <span
            onClick={() => {
              moveProjectUp(project.orderNo);
            }}
          >
            <UpIcon />
          </span>
          <span
            onClick={() => {
              moveProjectDown(project.orderNo);
            }}
          >
            <DownIcon />
          </span>
        </div>
      </div>
      {project.expanded &&
        _.map(project.tasks, (item) => (
          <div key={item.id}>
            <TaskItemPreview projectNo={project.orderNo} task={item} />
          </div>
        ))}
    </div>
  );
};

export { ProjectList };

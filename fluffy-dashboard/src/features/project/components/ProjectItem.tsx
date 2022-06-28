import { ProjectItemModel } from "../models";

interface ProjectItemProps {
  item: ProjectItemModel;
}

const ProjectItem = ({ item }: ProjectItemProps) => (
  <div className="flex">
    <div className="flex-none">{item.orderNo}</div>
    <div className="flex-1">
      <label>
        <input type={"checkbox"} title="completed" />
        <span className="ml-1">{item.task}</span>
      </label>
    </div>
    <div className="flex-none">
      <button className="mx-2" type="button">
        ^
      </button>
      <button className="mx-2" type="button">
        v
      </button>
    </div>
  </div>
);

export { ProjectItem };

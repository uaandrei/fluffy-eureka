import { ProjectListModel } from "../models";
import { ProjectItem } from "./";

interface ProjectListProps {
  list: ProjectListModel;
}

const ProjectList = ({ list }: ProjectListProps) => (
  <div>
    <h1>{list.name}</h1>
    {list.expanded &&
      list.items.map((item) => <ProjectItem item={item} key={item.id} />)}
  </div>
);

export { ProjectList };

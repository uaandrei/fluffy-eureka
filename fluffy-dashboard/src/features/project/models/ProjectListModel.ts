import { ProjectItemModel } from "./ProjectItemModel";

export interface ProjectListModel {
  id: string;
  name: string;
  items: ProjectItemModel[];
  labels?: string[];
  expanded: boolean;
}

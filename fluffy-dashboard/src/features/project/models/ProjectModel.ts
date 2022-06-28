import { ObjectList } from "../../../models";
import { TaskModel } from "./TaskModel";

export interface ProjectModel {
  id: string;
  name: string;
  tasks: ObjectList<TaskModel>;
  orderNo: number;
  labels?: string[];
  expanded: boolean;
}

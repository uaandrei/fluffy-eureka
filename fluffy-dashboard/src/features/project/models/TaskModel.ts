export interface TaskModel {
  id: string;
  title: string;
  orderNo: number;
  completed: boolean;
  description?: string;
  progress?: number;
  dateAdded?: Date;
  labels?: string[];
}

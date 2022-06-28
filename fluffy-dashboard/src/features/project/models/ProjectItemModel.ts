export interface ProjectItemModel {
  id: string;
  task: string;
  progress?: number;
  dateAdded?: Date;
  orderNo?: number;
  labels?: string[];
  // time
  // weight
  // reps
  // rounds
  // todo: asta trebuie transformat in model ce poate urmari progres, gen: ziua 1 2 kg, 10 min
  // ceva sa suporte jump rope, dar si cross training, dar si weightlift
}

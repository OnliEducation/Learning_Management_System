import { ICourse } from "./course";

export interface ICategory {
  id: string,
  label: string,
  description: string,
  courses: Array<ICourse["id"]>,
}
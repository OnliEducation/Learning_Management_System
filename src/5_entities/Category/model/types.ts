import { Error, ICategory, ICourse, Status } from "../../../6_shared/types"
interface ICategoryCardCompact {
  id: string,
  label: string,
  courses: Array<ICourse["id"]>,
}

interface CategoryState {
  categories: ICategory[] | null,
  status: Status,
  error: Error,
}

export type {
  ICategoryCardCompact,
  CategoryState,
}
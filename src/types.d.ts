export interface Todo {
  id: string
  title: string
  completed: boolean
}

export type ListOfTodos = Todo[] //  puede ser también Array<Todo>

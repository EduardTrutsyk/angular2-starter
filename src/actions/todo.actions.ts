import { uid } from '../utils';


export interface ITodoAction {
  type: string;
  id: string;
  name?: string;
}

export function addTodo(name: string) : ITodoAction {
  return {
    id: uid(),
    type: 'ADD_TODO',
    name,
  };
}

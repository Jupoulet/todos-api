import sql from './db'

export interface Todo {
  id: number
  name: string
  creation_date: string;
  status: 'pending' | 'completed' | 'deleted';
  user_id: number;
}

export async function list() {
  return sql<Todo[]>`
    SELECT * FROM todos
  `;
}

export async function create(todo: Todo) {
  return sql<Todo[]>`
    INSERT INTO todos (name, user_id) VALUES (${todo.name}, ${todo.user_id})
    RETURNING *
  `;
}

export async function update(todo: Todo) {
  return sql<Todo[]>`
    UPDATE todos SET status=${todo.status} WHERE id=${todo.id}
    RETURNING id, name, status
  `;
}

export async function remove(todo: Todo) {
  return sql<Todo[]>`
    DELETE FROM todos WHERE id=${todo.id}
    RETURNING id, name, status
  `;
}
import sql from './db'

export interface ToDo {
  id: number
  name: string
  creation_date: string;
  status: 'pending' | 'completed' | 'deleted';
}

export async function list() {
  return sql<ToDo[]>`
    SELECT * FROM todos
  `;
}

export async function create(todo: ToDo) {
  return sql<ToDo[]>`
    INSERT INTO todos (name) VALUES (${todo.name})
    RETURNING id, name, status, creation_date
  `;
}

export async function update(todo: ToDo) {
  return sql<ToDo[]>`
    UPDATE todos SET status=${todo.status} WHERE id=${todo.id}
    RETURNING id, name, status
  `;
}

export async function remove(todo: ToDo) {
  return sql<ToDo[]>`
    DELETE FROM todos WHERE id=${todo.id}
    RETURNING id, name, status
  `;
}
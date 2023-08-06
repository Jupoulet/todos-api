import sql from './db'
import {Todo} from "./todos";

export type User = {
  id: number;
  first_name: string;
  last_name: string;
  creation_date: string;
}
export const listTodosByUserId = (userId: string) => {
  return sql<Todo[]>`SELECT  users.first_name AS user, todo.user_id, todo.name, todo.status, todo.creation_date, todo.id FROM todos AS todo
    INNER JOIN users ON todo.user_id = users.id
    WHERE todo.user_id = ${userId}
  `
};

export const listUsers = () => {
  return sql<User[]>`SELECT * FROM users`
}

export const createUser = (body: User) => {
  return sql<User[]>`
    INSERT INTO users (first_name, last_name) VALUES (${body.first_name}, ${body.last_name})
    RETURNING *
  `;
}
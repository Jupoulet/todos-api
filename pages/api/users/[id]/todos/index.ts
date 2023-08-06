import * as users from '../../../../../lib/users';
import type { NextApiRequest, NextApiResponse } from 'next';
import { type Todo } from '../../../../../lib/todos'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Todo[] | string>
) {
  switch (req.method) {
    case 'GET':
      return res.status(200).json(await users.listTodosByUserId(req.query.id as string))
    default:
      return res.status(405).send('Method Not Allowed')
  }
}
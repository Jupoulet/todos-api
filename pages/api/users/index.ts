import {NextApiRequest, NextApiResponse} from "next";
import * as users from '../../../lib/users';
import {User} from "../../../lib/users";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[] | string>
) {
  switch (req.method) {
    case 'GET':
      return res.status(200).json(await users.listUsers())
    case 'POST':
      return res.status(201).json(await users.createUser(req.body))
    default:
      return res.status(405).send('Method Not Allowed')
  }
}
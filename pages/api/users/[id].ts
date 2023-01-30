// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import User from '@/models/User'

type Data = {
  result: object[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
): Promise<void> {
  // const user = await User.create({
  //   firstName: 'Kenneth',
  //   lastName: 'Andales',
  // })

  const users = await User.findAll({
    attributes: ['id', 'firstName', 'lastName'],
    where: {
      id: req.query.id,
    },
  })
  res.status(200).json({
    result: users,
  })
}

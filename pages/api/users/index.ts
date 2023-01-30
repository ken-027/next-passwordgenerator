// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import requestIP from 'request-ip'
import User from '@/models/User'

type Data = {
  result?: object[]
  firstName?: string
  lastName?: string
  message?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
): Promise<void> {
  // const user = await User.create({
  //   firstName: 'Kenneth',
  //   lastName: 'Andales',
  // })
  // const clientIp = requestIP.getClientIp(req)
  // res.status(200).send({ message: `ip address: ${clientIp}` })
  switch (req.method) {
    case 'GET':
      const users = await User.findAll({
        attributes: ['id', 'firstName', 'lastName'],
      })
      res.status(200).json({
        result: users,
      })
      break
    case 'POST':
      const { firstName, lastName } = req.body

      if (!firstName) {
        res.status(400).send({ message: 'firstName is required' })
      }
      if (!lastName) {
        res.status(400).send({ message: 'lastName is required' })
      }
      res.status(201).send({ firstName: firstName, lastName: lastName })
      break
    default:
      res.status(404).send({ message: 'Invalid method request' })
      break
  }
}

export const config = {
  api: {
    bodyParser: true,
  },
}

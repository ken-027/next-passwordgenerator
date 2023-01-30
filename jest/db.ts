import { describe, expect, test } from '@jest/globals'
import User from '../models/User'

test('DB should store data', async () => {
  const [result, metadata] = await User.create({
    firstName: 'Kyleen',
    lastName: 'Menudo',
  })

  expect(result).toEqual({ id: 4 })
})

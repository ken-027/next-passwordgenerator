import { describe, expect, test } from '@jest/globals'
import { testConnection } from '@/config/connection'

test('testing database connection', async () => {
  await testConnection()
})

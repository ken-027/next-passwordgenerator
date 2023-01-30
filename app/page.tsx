'use client'

import { Inter } from '@next/font/google'
import dynamic from 'next/dynamic'
import { Skeleton, Card } from 'antd'

import Form from '@/components/Form'

const inter = Inter({ subsets: ['latin'] })

const DynamicContent = dynamic(() => import('@/components/Form'), {
  loading: () => (
    <Card
      style={{
        width: 500,
        margin: 'auto',
      }}>
      <Skeleton active />
    </Card>
  ),
  ssr: false,
})

export default function Page() {
  // const users = await getUsers()

  // console.log(users)

  return (
    <>
      <main className=''>
        <div className='container'>
          <DynamicContent />
          {/* <Form /> */}
        </div>
      </main>
    </>
  )
}

async function getUsers() {
  const req = await fetch(`http://localhost:3000/api/users`)
  const users = await req.json()
  return users
}

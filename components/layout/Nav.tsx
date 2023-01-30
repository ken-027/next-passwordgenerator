import React from 'react'
import Image from 'next/image'
import logoWithText from '@/images/png/logo-with-text.png'
import Link from 'next/link'
import '@/sass/components/_navbar.scss'

const Nav = () => {
  return (
    <>
      <nav>
        <Link href='/'>
          <Image
            height={100}
            alt='Logo with text'
            priority
            src={logoWithText}
          />
        </Link>
        <ul>
          <li>
            <Link href='/logs'>Logs</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav

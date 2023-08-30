"use client"

import { sidebarLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Bottombar = () => {
  return (
    <section className='bottombar'>
        <div className='bottombar_wrapper'>
          {sidebarLinks.map((link) => (
            <Link 
              href={link.route}
              key={link.label}
              className='bottombar_link'
            >
              <Image
                src={link?.imgUrl}
                alt={link?.label || ""}
                width={30}
                height={30}
              />
              <p>{link.label}</p>
            </Link>
          ))}
        </div>
    </section>
  )
}

export default Bottombar
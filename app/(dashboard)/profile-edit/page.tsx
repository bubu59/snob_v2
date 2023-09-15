import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
    const router = useRouter()
  return (
    <button onClick={() => router.push('/profile')}>
        Skip
    </button>
  )
}

export default page
'use client' // Error components must be Client Components
 
import { ArrowBack } from '@/components/icons/ArrowBack'
import Image from 'next/image'
import Link from 'next/link'
import { Heading } from '@/components/Heading'

import { useEffect } from 'react'
 
import style from './error/error.module.css'
import banner from './error/500.png'

export default function Error({
  error,
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className={style.container}>
      <Image src={banner}/>
      <Heading>Oops! Something has happened.</Heading>
      <p className={style.text}>We couldn't load the page correctly.</p>
      <Link href="/">
        Back to the home page <ArrowBack color='#81FE88'/>
      </Link>
    </div>
  )
}
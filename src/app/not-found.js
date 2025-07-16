import { Heading } from "@/components/Heading";
import { ArrowBack } from "@/components/icons/ArrowBack";
import Image from "next/image";
import Link from "next/link";

import style from './error/error.module.css'
import banner from './error/404.png'

export default async function NotFound() {
  return (
    <div className={style.container}>
      <Image src={banner}/>
      <Heading>Oops! Something has happened.</Heading>
      <p className={style.text}>We couldn't load the page correctly.</p>
      <Link href="/">
        Back to home page <ArrowBack color='#81FE88'/>
      </Link>
    </div>
  )
}
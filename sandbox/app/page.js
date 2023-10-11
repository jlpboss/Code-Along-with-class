"use client"
import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import MyButton from './Componets/Atoms/button'

export default function Home() {
  function clickHandle(e){
    console.log(e)
  }
  
  return (
    <main className={styles.main}>
      <h1>Welcome!</h1>
      <MyButton
      onClick={clickHandle}
      text={"Set State"}
      />
    </main>
  )
}

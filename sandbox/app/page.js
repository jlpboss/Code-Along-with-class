"use client"
import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import MyButton from './Componets/Atoms/button'
import SearchInput from './Componets/Molocuels/searchInput'

export default function Home() {
  function clickHandle(e){
    console.log(e)
  }
  
  return (
    <main className={styles.main}>
      <h1>Welcome!</h1>
      <SearchInput
        title={"Search"}
        btnText={"Go"}
        onClick={clickHandle}
      />
      <MyButton
      onClick={clickHandle}
      text={"Set State"}
      />
    </main>
  )
}

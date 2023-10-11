"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import MyButton from './Componets/Atoms/button'
import SearchInput from './Componets/Molocuels/searchInput'
import SearchResults from './Componets/Molocuels/searchReults'

export default function Home() {
  const [searchRestuts, setSearchResults] = useState([])
  const [searchTxt, setSerchTxt] = useState('')
  
  function clickHandleBtn(e){
    console.log(e)
  }
  function clickHandleSerchBtn(e){
    let results = []
    results.push("one")
    results.push("one")
    results.push("one")
    setSearchResults(results)
  }

  
  return (
    <main className={styles.main}>
      <h1>Welcome!</h1>
      <div className='search-input-wrapper'>
        <SearchInput
          title={"Search"}
          btnText={"Go"}
          onClick={clickHandleSerchBtn}
        />
        <SearchResults 
          data={searchRestuts}
        />
      </div>
      <MyButton
      onClick={clickHandleBtn}
      text={"Set State"}
      />
    </main>
  )
}

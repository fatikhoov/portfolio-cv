import React from 'react'
import HeaderFatih from '../../modules/header/HeaderPage.js'

export default function Layout({ children }) {
  return (
    <>
      <div>
        <HeaderFatih />
        {/*  <SidebarFatih /> */}
        {/* <NavFix /> */}
      </div>
      <main className="App-main">
        {/*  <div className="box_sidebarpage"></div> */}
        {children}
      </main>
    </>
  )
}

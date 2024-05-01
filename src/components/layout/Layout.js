import React from 'react'

import HeaderFatih from '../../modules/header/HeaderPage.js'
import SidebarFatih from '../../modules/Sidebar/SidebarPage.js'
import NavFix from '../../modules/Nav/NavFix.js'
import { Worker } from '@react-pdf-viewer/core'

export default function Layout({ children }) {
  return (
    <>
      <div>
        <HeaderFatih />
        {/*  <SidebarFatih /> */}
        <NavFix />
      </div>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <main className="App-main">
          {/*  <div className="box_sidebarpage"></div> */}
          {children}
        </main>
      </Worker>
    </>
  )
}

import { Viewer } from '@react-pdf-viewer/core'

import '@react-pdf-viewer/core/lib/styles/index.css'

export default function HomeHead() {
  return (
    <>
      <Viewer fileUrl="/pdf/cv-elmira.pdf" />
    </>
  )
}

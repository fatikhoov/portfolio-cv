import { Viewer } from '@react-pdf-viewer/core'

import '@react-pdf-viewer/core/lib/styles/index.css'

export default function PriceHead() {
  return (
    <>
      <Viewer fileUrl="/pdf/price-elmira.pdf" />
    </>
  )
}

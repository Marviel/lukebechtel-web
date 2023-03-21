import 'react-pdf/dist/esm/Page/TextLayer.css'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'

import React, { useState } from 'react'

import _ from 'lodash'
import Link from 'next/link'
import url from 'pdfjs-dist/build/pdf.worker'
import { Document, Page, pdfjs } from 'react-pdf'

import { useMediaQuery } from '@mui/material'

pdfjs.GlobalWorkerOptions.workerSrc = url

export default function Resume() {
  const [numPages, setNumPages] = useState(null)
  const isSmallDevice = useMediaQuery('(max-width: 600px)')
  const isVerySmallDevice = useMediaQuery('(max-width: 400px)')

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
        Resume
      </h1>
      <h3>
        <Link
          href="/static/pdfs/luke_bechtel_current_resume.pdf"
          style={{ textDecoration: 'underline' }}
        >
          Download
        </Link>
      </h3>
      <h3>
        <i>
          You can also see my{' '}
          <u>
            <Link href={'/projects'}>Projects</Link>
          </u>{' '}
          or{' '}
          <u>
            <Link href={'/about'}>About</Link>
          </u>{' '}
          for more info :{`)`}
        </i>
      </h3>
      <div style={{ zoom: isSmallDevice ? (isVerySmallDevice ? 0.5 : 0.7) : 1 }}>
        <Document
          file="/static/pdfs/luke_bechtel_current_resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {_.range(1, numPages + 1).map((pageNumber) => (
            <Page key={`page_${pageNumber}`} pageNumber={pageNumber} />
          ))}
        </Document>
      </div>
    </div>
  )
}

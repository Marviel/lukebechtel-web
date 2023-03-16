import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'

// import '@/css/docsearch.css' // Uncomment if using algolia docsearch
// import '@docsearch/css' // Uncomment if using algolia docsearch
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Analytics } from 'pliny/analytics'
import { SearchProvider } from 'pliny/search'
import { theme } from 'styles/theme'

import LayoutWrapper from '@/components/LayoutWrapper'
import siteMetadata from '@/data/siteMetadata'
import { ThemeProvider as MUIThemeProvider } from '@mui/material'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MUIThemeProvider theme={theme}>
      <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <Analytics analyticsConfig={siteMetadata.analytics} />
        <LayoutWrapper>
          <SearchProvider searchConfig={siteMetadata.search}>
            <Component {...pageProps} />
          </SearchProvider>
        </LayoutWrapper>
      </ThemeProvider>
    </MUIThemeProvider>
  )
}

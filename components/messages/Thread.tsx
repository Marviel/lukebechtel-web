import { theme } from 'styles/theme'

import { Paper, ThemeProvider } from '@mui/material'

export default function Thread({ children }) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 500
  const extraPadding = isMobile ? '8px' : '15px'
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={10} sx={{ padding: extraPadding }}>
        <div className="flex flex-col space-y-2">{children}</div>
      </Paper>
    </ThemeProvider>
  )
}

import React from 'react'

import { Grid, Typography } from '@mui/material'

interface AGQSectionHeaderProps {
  number: number
  title: string
  subHeader: string[]
}

export function AGQSectionHeader({ number, title, subHeader }: AGQSectionHeaderProps) {
  return (
    <Grid container direction="column" alignItems="center" gap={0}>
      <Grid item xs={12}>
        <line />
      </Grid>
      <Grid container direction="row" alignItems="center" justifyContent="space-between">
        <Grid item xs={4}>
          <hr style={{ margin: 0 }} />
        </Grid>
        <Grid item>
          <Typography
            variant="h1"
            style={{ fontFamily: 'KaTeX_Math', marginTop: '1rem', marginBottom: '1rem' }}
          >
            {number}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <hr style={{ margin: 0 }} />
        </Grid>
      </Grid>
      <Grid container item xs={12} height={'10px'} width={'100%'}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <hr style={{ margin: 10 }} />
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
      <Grid item>
        <Typography
          variant="h2"
          style={{ fontFamily: 'KaTeX_Math', marginTop: '1rem', marginBottom: '1rem' }}
        >
          {title}
        </Typography>
      </Grid>
      <Grid container item xs={12} height={'10px'} width={'100%'}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <hr style={{ margin: 10 }} />
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
      <Grid container item xs={12} height={'10px'} width={'100%'}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <hr style={{ margin: 20 }} />
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      <Grid container direction="row" justifyContent="center" style={{ paddingTop: '10px' }}>
        <Grid item xs={4}>
          <Typography
            variant="h6"
            style={{ fontFamily: 'KaTeX_Math', textAlign: 'center', margin: 0 }}
          >
            {subHeader[0]}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" style={{ fontFamily: 'KaTeX_Math', textAlign: 'center' }}>
            {subHeader[1]}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" style={{ fontFamily: 'KaTeX_Math', textAlign: 'center' }}>
            {subHeader[2]}
          </Typography>
        </Grid>
      </Grid>
      <Grid container direction="row" justifyContent="space-between">
        <Grid item xs={4}>
          <hr style={{ margin: 0 }} />
        </Grid>
        <Grid item />
        <Grid item xs={4}>
          <hr style={{ margin: 0 }} />
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <hr style={{ margin: 20 }} />
      </Grid>
    </Grid>
  )
}

import { useEffect, useState } from 'react'

import _ from 'lodash'

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Stack,
  Typography,
} from '@mui/material'

const values = [
  'Love',
  'Wealth',
  'Family',
  'Morals',
  'Success',
  'Knowledge',
  'Power',
  'Friends',
  'Free Time',
  'Adventure',
  'Variety',
  'Calmness',
  'Freedom',
  'Fun',
  'Recognition',
  'Nature',
  'Popularity',
  'Responsibility',
  'Honesty',
  'Humor',
  'Loyalty',
  'Reason',
  'Independence',
  'Achievement',
  'Beauty',
  'Spirituality',
  'Respect',
  'Peace',
  'Stability',
  'Wisdom',
  'Fairness',
  'Creativity',
  'Relaxation',
  'Safety',
]

// Adjust ELO
function getNewELOs(winnerELO: number, loserELO: number) {
  const K = 32
  const winnerExpectedScore = 1 / (1 + Math.pow(10, (loserELO - winnerELO) / 400))
  const loserExpectedScore = 1 / (1 + Math.pow(10, (winnerELO - loserELO) / 400))

  const winnerNewELO = winnerELO + K * (1 - winnerExpectedScore)
  const loserNewELO = loserELO + K * (0 - loserExpectedScore)

  return {
    winnerNewELO,
    loserNewELO,
  }
}

export default function ValuesPage() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const [rankings, setRankings] = useState(
    values.map((valueName, index) => {
      return {
        valueName,
        rank: 10000,
      }
    })
  )

  const [players, setPlayers] = useState<{ player1Idx: number; player2Idx: number }>(() => {
    const player1Idx = _.random(values.length - 1)
    let player2Idx = _.random(values.length - 1)

    while (player1Idx === player2Idx) {
      player2Idx = _.random(values.length - 1)
    }

    return {
      player1Idx,
      player2Idx,
    }
  })

  const handlePick = (winnerIdx: number, loserIdx: number) => {
    /////////////////////////////
    // Handle ELO adjustment
    const winner = rankings[winnerIdx]
    const loser = rankings[loserIdx]

    const { winnerNewELO, loserNewELO } = getNewELOs(winner.rank, loser.rank)
    setRankings(
      rankings.map((ranking, index) => {
        if (index === winnerIdx) {
          return {
            ...ranking,
            rank: winnerNewELO,
          }
        } else if (index === loserIdx) {
          return {
            ...ranking,
            rank: loserNewELO,
          }
        } else {
          return ranking
        }
      })
    )

    ////////////////////////////
    // Set players
    const player1Idx = _.random(values.length - 1)
    let player2Idx = _.random(values.length - 1)

    while (player1Idx === player2Idx) {
      player2Idx = _.random(values.length - 1)
    }

    setPlayers({
      player1Idx,
      player2Idx,
    })
  }

  return (
    <Stack suppressHydrationWarning gap={3}>
      <Typography variant="h3">Which is more important?</Typography>
      <Stack
        direction={'row'}
        gap={8}
        alignItems={'center'}
        justifyItems={'center'}
        justifyContent={'center'}
        suppressHydrationWarning
      >
        <Button
          size="large"
          sx={{ height: '150px' }}
          suppressHydrationWarning
          onClick={() => {
            handlePick(players.player1Idx, players.player2Idx)
          }}
        >
          {rankings[players.player1Idx].valueName}
        </Button>
        <span>or</span>
        <Button
          size="large"
          sx={{ height: '150px' }}
          suppressHydrationWarning
          onClick={() => {
            handlePick(players.player2Idx, players.player1Idx)
          }}
        >
          {rankings[players.player2Idx].valueName}
        </Button>
      </Stack>
      <Accordion suppressHydrationWarning>
        <AccordionSummary suppressHydrationWarning>
          <span>Rankings</span>
        </AccordionSummary>
        <AccordionDetails suppressHydrationWarning>
          {_.sortBy(rankings, (a) => -a.rank).map((ranking, index) => {
            return (
              <Stack suppressHydrationWarning key={index} direction={'row'} gap={2}>
                <span>{ranking.rank}</span>
                <span>{ranking.valueName}</span>
              </Stack>
            )
          })}
        </AccordionDetails>
      </Accordion>
    </Stack>
  )
}

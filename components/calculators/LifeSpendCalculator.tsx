import { useState } from 'react'

function TimeButton(props: { name: string; minutes: number; setTime: (time: number) => void }) {
  return (
    <button
      onClick={() => props.setTime?.(props.minutes)}
      style={{ backgroundColor: 'grey', color: 'white', padding: '10px', borderRadius: '10px' }}
    >
      {props.name}
    </button>
  )
}

// Minutes A Day -> Days a year calculator
export default function LifeSpendCalculator(props: {
  subjectName?: string
  onSubjectName?: string
  enableWorkdays?: boolean
}) {
  const [minutes, setMinutes] = useState<number | null>(null)

  const minutesAWeekRounded = (minutes * 7).toFixed(2)
  const minutesAMonthRounded = (minutes * 30).toFixed(2)
  const minutesAYearRounded = (minutes * 365).toFixed(0)
  const daysAYearRounded = ((minutes * 365) / 60 / 24).toFixed(1)
  const workDaysAYearRounded = (minutes * (365 / 60 / 24) * 3).toFixed(1)

  const subjectName = props.subjectName ?? 'this'
  const onSubjectName = props.onSubjectName ?? 'on this'

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: '10px',
        padding: '10px',
      }}
    >
      <p style={{ fontSize: '2em' }}>Life Spend Calculator</p>
      <p>
        How many minutes a day do you spend <b>{subjectName}</b>
      </p>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
        <TimeButton name="🕐  5 minutes" minutes={5} setTime={setMinutes} />
        <TimeButton name="🕰️ 15 minutes" minutes={15} setTime={setMinutes} />
        <TimeButton name="🕑30 minutes" minutes={30} setTime={setMinutes} />
        <TimeButton name="🕒 1 hour" minutes={60} setTime={setMinutes} />
        <TimeButton name="🕓 2 hours" minutes={120} setTime={setMinutes} />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyItems: 'center',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <input
          type="number"
          value={minutes}
          onChange={(e) => setMinutes(parseInt(e.target.value))}
          style={{
            color: 'black',
            width: '75px',
          }}
          min={0}
          max={24 * 60}
        />
        <span style={{ verticalAlign: 'center' }}>Minutes A Day</span>
      </div>

      <br />
      {minutes ? (
        <>
          <p style={{ fontSize: '1.5em' }}>
            You spend{' '}
            <u>
              <b>~ {minutesAYearRounded} minutes a year</b>
            </u>{' '}
            {onSubjectName}
          </p>
          <p style={{ fontSize: '1.5em' }}>
            That's{' '}
            <u>
              <b>~ {daysAYearRounded} full days</b>
            </u>{' '}
            {onSubjectName}
          </p>
          {props.enableWorkdays ? (
            <p style={{ fontSize: '1.5em' }}>
              That's{' '}
              <u>
                <b>~ {workDaysAYearRounded} work days</b>
              </u>{' '}
              {onSubjectName}
            </p>
          ) : null}
        </>
      ) : null}
    </div>
  )
}

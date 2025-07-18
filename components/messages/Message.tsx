import { Avatar, Card, Stack, Typography } from '@mui/material'

import { theme } from '../../styles/theme'

export interface MessageProps extends React.PropsWithChildren<any> {
  name?: string
  avatarUrl?: string
  avatarText?: string
  date?: string
  isOwn?: boolean
  compact?: boolean
}

export default function Message({
  name,
  avatarUrl,
  avatarText,
  date,
  children,
  isOwn,
  compact,
  showName = false,
}: MessageProps) {
  const endOrStart = isOwn ? 'end' : 'start'
  // Check if device is mobile the next.js way
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  const avatarSize = isMobile ? '25px' : '30px'
  const extraPadding = isMobile ? '10px' : '15px'

  return (
    <Stack width={isMobile ? '95%' : '90%'} alignSelf={endOrStart}>
      <Card
        style={{
          padding: extraPadding,
          backgroundColor: isOwn ? theme.palette.primary.main : theme.palette.grey[800],
          width: 'fit-content',
          minWidth: '100px',
          alignContent: endOrStart,
          alignItems: endOrStart,
          alignSelf: endOrStart,
        }}
      >
        <Stack direction="row" justifyContent={'start'} gap={0.5} sx={{ width: '100%' }}>
          {avatarUrl ? (
            <Avatar
              alt={name}
              src={avatarUrl && avatarUrl !== '' ? avatarUrl : undefined}
              sx={{ width: avatarSize, height: avatarSize, textAlign: 'center' }}
            >
              {avatarText}
            </Avatar>
          ) : avatarText ? (
            <div style={{ width: avatarSize, height: avatarSize }}>{avatarText}</div>
          ) : (
            <Avatar sx={{ width: avatarSize, height: avatarSize, textAlign: 'center' }}>
              {name}
            </Avatar>
          )}
          <Stack>
            {showName && (
              <Typography variant="overline" fontWeight={'bold'}>
                {name}
              </Typography>
            )}
            <Typography variant="body2" style={{ marginBottom: '0px' }}>
              {children}
            </Typography>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  )
}

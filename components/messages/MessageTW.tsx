import React from 'react'

export interface MessageProps extends React.PropsWithChildren<any> {
  name?: string
  avatarUrl?: string
  date?: string
  isOwn?: boolean
}

export default function Message({ name, avatarUrl, date, children, isOwn }: MessageProps) {
  const endOrStart = isOwn ? 'end' : 'start'
  const bgColor = isOwn ? 'bg-primary' : 'bg-gray-800'
  const alignSelf = isOwn ? 'self-end' : 'self-start'

  return (
    <div className={`w-4/5 ${alignSelf}`}>
      <div className={`min-w-[100px] ${bgColor} ${alignSelf} inline-flex rounded-lg py-4 px-6`}>
        <div className={`flex items-${endOrStart}`}>
          {!isOwn && (
            <img
              alt={name}
              src={avatarUrl && avatarUrl !== '' ? avatarUrl : undefined}
              className="mr-2 h-6 w-6 rounded-full"
            />
          )}
          <div>
            <p className="text-xs font-semibold">{name}</p>
            <p className="text-sm">{children}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

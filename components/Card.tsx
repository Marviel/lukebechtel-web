import { useState } from 'react'

import Image from './Image'
import Link from './Link'

const Card = ({
  title,
  description,
  imgSrcHovering,
  imgSrcStatic,
  href,
  role,
  tasks,
}: {
  title: string
  description: string
  imgSrcHovering?: string
  imgSrcStatic: string
  href: string
  role?: string
  tasks?: string
}) => {
  const [isHovering, setIsHovered] = useState(false)
  const onMouseEnter = () => setIsHovered(true)
  const onMouseLeave = () => setIsHovered(false)

  const imWidth = 544
  const imHeight = 306

  const imComp = isHovering ? (
    <Image
      alt={title}
      src={imgSrcHovering || imgSrcStatic}
      className="object-cover object-center md:h-36 lg:h-48"
      width={imWidth}
      height={imHeight}
    />
  ) : (
    <Image
      alt={title}
      src={imgSrcStatic}
      className="object-cover object-center md:h-36 lg:h-48"
      width={imWidth}
      height={imHeight}
    />
  )

  return (
    <div
      className="md max-w-[544px] p-4 md:w-1/2"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className={`${
          imgSrcStatic && 'h-full'
        }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
      >
        <div
          style={{
            display: 'flex',
            justifyItems: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {imgSrcStatic &&
            (href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                <div>{imComp}</div>
              </Link>
            ) : (
              imComp
            ))}
        </div>
        <div className="p-6" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div
            className="mb-3"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyItems: 'center',
              gap: '20px',
              minHeight: '60px',
            }}
          >
            <h2 className="text-2xl font-bold leading-8 tracking-tight">
              {href ? (
                <Link href={href} aria-label={`Link to ${title}`}>
                  {title}
                </Link>
              ) : (
                title
              )}
            </h2>
            <div
              style={{
                borderLeft: '1px solid #e5e7eb',
                height: '25px',
                width: '1px',
                backgroundColor: '#e5e7eb',
              }}
            />
            {role && <p className="prose max-w-none text-gray-500 dark:text-gray-500"> {role}</p>}
          </div>

          {tasks && <p className="prose max-w-none text-gray-500 dark:text-gray-400">{tasks}</p>}
          <p className="prose max-w-none text-gray-500 dark:text-gray-400">{description}</p>
          {href && (
            <Link
              href={href}
              className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`Link to ${title}`}
            >
              Learn more &rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card

import Image from 'next/image'

import headerNavLinks from '@/data/headerNavLinks'
import siteMetadata from '@/data/siteMetadata'

import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const Header = () => {
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-1">
              <Image
                alt={'Luke Bechtel Logo'}
                src={'/static/images/logo.png'}
                className=""
                width={50}
                height={50}
              />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>

      <div className="flex items-center text-base leading-5">
        <div className="hidden sm:block">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <iframe
          src="https://github.com/sponsors/Marviel/button"
          title="Sponsor Marviel"
          height="32"
          width="114"
          style={{ border: 0, borderRadius: '6px' }}
        ></iframe>
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header

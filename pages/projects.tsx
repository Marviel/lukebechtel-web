import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import projectsData from '@/data/projectsData'
import siteMetadata from '@/data/siteMetadata'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            I've had the pleasure of working on a wide variety of neat projects, with some awesome
            people.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Hover over cards to see animations :{`)`}{' '}
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrcStatic={d.imgSrcStatic}
                imgSrcHovering={d.imgSrcHovering}
                href={d.href}
                role={d.role}
                tasks={d.tasks}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

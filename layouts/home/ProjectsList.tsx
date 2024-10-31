import { Project } from '@/data/projectsData'
import Card from '@/components/projectcard/SsrProjectCard'
import { LocaleTypes } from '@/app/[locale]/i18n/settings'

interface FeaturedProjectsProps {
  projects: Project[]
  locale: LocaleTypes
  t: (key: string) => string
}

const ProjectsList = ({ projects, locale, t }: FeaturedProjectsProps) => {
  return (
    <>
      {projects.map((project) => (
        <Card
          key={project.title}
          title={project.title}
          description={project.description}
          imgSrc={project.imgSrc}
          href={project.href}
          locale={locale}
          t={t}
        />
      ))}
    </>
  )
}

export default ProjectsList

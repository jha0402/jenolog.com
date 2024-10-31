import { createTranslation } from 'app/[locale]/i18n/server'
import { LocaleTypes } from 'app/[locale]/i18n/settings'

import LayoutHeader from './LayoutHeader'
import { Project } from '@/data/projectsData'
import ProjectsList from './ProjectsList'
import ButtonLink from '@/components/home/ButtonLink'

interface FeaturedProjectsProps {
  projects: Project[]
  params: { locale: LocaleTypes }
}

const MAX_DISPLAY = 3

export default async function FeaturedProjects({
  projects,
  params: { locale },
}: FeaturedProjectsProps) {
  const { t } = await createTranslation(locale, 'home')
  return (
    <>
      <section id="featured-posts" className="divide-y divide-gray-200 dark:divide-gray-700">
        <LayoutHeader title={t('featuredprojects')} />
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            <ProjectsList projects={projects} locale={locale} t={t} />
            <div className="flex py-2 pl-4">
              <ButtonLink href="/projects">{t('moreprojects')}</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

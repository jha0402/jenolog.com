import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import FeaturedLayout from '@/layouts/FeaturedLayout'
import HomeLayout from '@/layouts/HomeLayout'
import { LocaleTypes } from './i18n/settings'
import Hero from '@/components/home/Hero'
import projectsData from '@/data/projectsData'
import FeaturedProjects from '@/layouts/home/FeaturedProjects'

type HomeProps = {
  params: { locale: LocaleTypes }
}

export default async function Page({ params: { locale } }: HomeProps) {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  const filteredPosts = posts.filter((p) => p.language === locale)
  const hasFeaturedPosts = filteredPosts.filter((p) => p.featured === true)
  const projectArray = projectsData[locale]
  const featuredProjects = projectArray.filter((project) => project.featured === true)

  return (
    <>
      <Hero />
      <FeaturedProjects projects={featuredProjects} params={{ locale }} />
      {hasFeaturedPosts && <FeaturedLayout posts={hasFeaturedPosts} params={{ locale }} />}
      <HomeLayout posts={filteredPosts} params={{ locale }} />
    </>
  )
}

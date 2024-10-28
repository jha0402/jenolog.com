import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/mdxcomponents/Image'

import { LocaleTypes } from 'app/[locale]/i18n/settings'
import { createTranslation } from 'app/[locale]/i18n/server'
import CloudinaryImg from '@/components/images/CloudinaryImg'

interface AuthorLayoutProps {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
  params: { locale: LocaleTypes }
}

export default async function AuthorLayout({
  children,
  content,
  params: { locale },
}: AuthorLayoutProps) {
  const { name, avatar, occupation, company, twitter, linkedin, github } = content
  const { t } = await createTranslation(locale, 'about')

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-heading-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-heading-100">
            {t('about')}
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            <CloudinaryImg
              className="float-right ml-6 w-40 md:w-72"
              publicId="v1674558425/zenolog/about/profile2_fqfbdx.jpg"
              width={1500}
              height={1500}
              alt="Me"
              preview={false}
            />
            <h2 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">{name}</h2>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="x" href={twitter} />
            </div>
          </div>
          <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

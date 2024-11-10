'use client'

import clsx from 'clsx'
import Accent from './Accent'
import ButtonLink from './ButtonLink'
import UnstyledLink from './UnstyledLink'

import { IoArrowDownOutline, IoNewspaperSharp } from 'react-icons/io5'
import { SiGithub } from 'react-icons/si'
import { useParams } from 'next/navigation'
import { LocaleTypes } from '@/app/[locale]/i18n/settings'
import { useTranslation } from '@/app/[locale]/i18n/client'
import { delay, motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, x: 0, y: -25 },
  enter: { opacity: 1, x: 0, y: 0 },
}

const Hero = () => {
  const locale = useParams()?.locale as LocaleTypes
  const { t } = useTranslation(locale, 'hero')

  return (
    <section className="min-h-hero w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <article className="layout font-extrabold">
        <motion.div variants={variants} initial="hidden" animate="enter">
          <h2 className="text-2xl md:text-4xl 2xl:text-5xl">{t('greeting')}</h2>
          <h1 className="mt-1 text-3xl md:text-5xl 2xl:text-6xl">
            {t('secondline')} <Accent>{t('name')}</Accent>
            {locale === 'ko' ? t('namesubfix') : ''}
          </h1>
          <p
            className={clsx(
              'mt-4 max-w-4xl text-gray-700 md:mt-6 dark:text-gray-200',
              'md:text-lg 2xl:text-xl'
            )}
          >
            {t('description')}
          </p>
        </motion.div>
        <motion.div
          className="mt-8 flex flex-wrap gap-4 md:!text-lg"
          variants={variants}
          initial="hidden"
          animate="enter"
          transition={{ delay: 0.1 }}
        >
          <div className="group relative">
            <motion.div
              className={clsx(
                'animate-tilt absolute -inset-0.5 rounded blur',
                'bg-gradient-to-r from-primary-300 to-primary-400',
                'dark:from-primary-300 dark:to-primary-400',
                'opacity-75 transition duration-1000 group-hover:opacity-100 group-hover:duration-200'
              )}
            />
            <ButtonLink href="/blog">{t('firstbutton')}</ButtonLink>
          </div>
          <ButtonLink href={`/${locale}/about/jeonghyunan`}>{t('secondbutton')}</ButtonLink>
        </motion.div>
        <motion.div
          className="mt-4 flex flex-wrap gap-4 gap-y-2 md:mt-8"
          variants={variants}
          initial="hidden"
          animate="enter"
          transition={{ delay: 0.2 }}
        >
          <UnstyledLink
            href="https://bit.ly/3RxfGKW"
            className={clsx(
              'inline-flex items-center gap-1 text-sm font-medium md:text-base',
              'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white',
              'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
              'transition-colors'
            )}
          >
            <IoNewspaperSharp className="shrink-0" />
            <span>{t('resume')}</span>
          </UnstyledLink>
          <UnstyledLink
            href="https://github.com/jha0402"
            className={clsx(
              'inline-flex items-center gap-1 text-sm font-medium md:text-base',
              'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white',
              'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
              'transition-colors'
            )}
          >
            <SiGithub className="shrink-0" />
            <span>{t('github')}</span>
          </UnstyledLink>
        </motion.div>
      </article>
      <UnstyledLink
        href="#featured-posts"
        className={clsx(
          'absolute bottom-2 left-1/2 -translate-x-1/2 md:bottom-10',
          'cursor-pointer rounded-md transition-colors',
          'hover:text-primary-300 focus-visible:text-primary-300'
        )}
      >
        <IoArrowDownOutline className="h-8 w-8 animate-bounce md:h-10 md:w-10" />
      </UnstyledLink>
    </section>
  )
}

export default Hero

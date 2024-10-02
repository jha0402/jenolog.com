'use client'

import clsx from 'clsx'
import useLoaded from '@/hooks/useLoaded'
import Accent from './Accent'
import ButtonLink from './ButtonLink'
import UnstyledLink from './UnstyledLink'

import { IoNewspaperSharp } from 'react-icons/io5'
import { SiGithub } from 'react-icons/si'

const Hero = () => {
  // TODO:
  // const isLoaded = useLoaded()

  return (
    <section className="fade-in-start w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <article className="layout font-extrabold">
        <h2 className="text-2xl md:text-4xl 2xl:text-5xl" data-fade="1">
          Hi!
        </h2>
        <h1 className="mt-1 text-3xl md:text-5xl 2xl:text-6xl" data-fade="2">
          You can call me <Accent>John</Accent>
        </h1>
        <p
          className={clsx(
            'mt-4 max-w-4xl text-gray-700 dark:text-gray-200 md:mt-6',
            'md:text-lg 2xl:text-xl'
          )}
          data-fade="3"
        >
          I'm a software developer working mainly with React and Typescript. Currently I work on SEO
          and frontend devops.
        </p>
        <div data-fade="5" className="mt-8 flex flex-wrap gap-4 md:!text-lg">
          <div className="group relative">
            <div
              className={clsx(
                'animate-tilt absolute -inset-0.5 rounded blur',
                'bg-gradient-to-r from-primary-300 to-primary-400',
                'dark:from-primary-300 dark:to-primary-400',
                'opacity-75 transition duration-1000 group-hover:opacity-100 group-hover:duration-200'
              )}
            />
            <ButtonLink href="/blog">Read the blog</ButtonLink>
          </div>
          <ButtonLink href="/about">Learn more about me</ButtonLink>
        </div>
        <div data-fade="6" className="mt-4 flex flex-wrap gap-4 gap-y-2 md:mt-8">
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
            <span>Resume</span>
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
            <span>Jeong Hyun An</span>
          </UnstyledLink>
        </div>
      </article>
      {/* <UnstyledLink
            href='#featured-posts'
            className={clsx(
              'absolute bottom-2 left-1/2 -translate-x-1/2 md:bottom-10',
              'cursor-pointer rounded-md transition-colors',
              'hover:text-primary-300 focus-visible:text-primary-300'
            )}
          >
            <IoArrowDownOutline className='h-8 w-8 animate-bounce md:h-10 md:w-10' />
          </UnstyledLink> */}
    </section>
  )
}

export default Hero

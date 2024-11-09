import Link from '../mdxcomponents/Link'
import { useParams } from 'next/navigation'
import { LocaleTypes } from 'app/[locale]/i18n/settings'

import { motion } from 'framer-motion'
import { useTranslation } from 'app/[locale]/i18n/client'
import CloudinaryImg from '../images/CloudinaryImg'
import { FiGlobe } from 'react-icons/fi'
import { SiGoogledocs } from 'react-icons/si'

const variants = {
  hidden: { opacity: 0, x: 0, y: -25 },
  enter: { opacity: 1, x: 0, y: 0 },
}

interface CardProps {
  title: string
  description: string
  imgSrc?: string
  href?: string
  blogUrl?: string
}

const Card: React.FC<CardProps> = ({ title, description, imgSrc, href, blogUrl }) => {
  const locale = useParams()?.locale as LocaleTypes
  const { t } = useTranslation(locale, 'projects')
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: 'linear' }}
      className="md max-w-[544px] p-4 md:w-1/2"
    >
      <div
        className={`${
          imgSrc && 'h-full'
        }  flex flex-col overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
      >
        {imgSrc &&
          (href ? (
            <Link
              href={href.startsWith('http') ? href : `/${locale}${href}`}
              aria-label={`${t('linkto')}${title}`}
            >
              <CloudinaryImg
                className="h-48 cursor-pointer object-cover object-center md:h-40 lg:h-40 xl:h-48"
                publicId={imgSrc}
                width={544}
                height={306}
                alt={title}
                preview={false}
                linked
              />
            </Link>
          ) : (
            <CloudinaryImg
              className="h-48 object-cover object-center md:h-40 lg:h-40 xl:h-48"
              publicId={imgSrc}
              width={544}
              height={306}
              alt={title}
              preview={false}
            />
          ))}
        <div className="flex flex-1 flex-col justify-between p-6">
          <div>
            <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
              {href ? (
                <Link
                  href={href.startsWith('http') ? href : `/${locale}${href}`}
                  aria-label={`${t('linkto')}${title}`}
                >
                  {title}
                </Link>
              ) : (
                title
              )}
            </h2>
            <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
          </div>
          <div className="flex flex-wrap justify-evenly gap-x-2">
            {href && (
              <Link
                href={href.startsWith('http') ? href : `/${locale}${href}`}
                className="flex text-center text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label={`${t('linkto')}${title}`}
              >
                <FiGlobe className="mr-2 mt-[3px] block" />
                {href.startsWith('http') && `${t('visit')}`}{' '}
              </Link>
            )}
            {blogUrl && (
              <Link
                href={blogUrl.startsWith('http') ? blogUrl : `/${locale}${blogUrl}`}
                className="flex text-center text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label={`${t('linkto')}${title}`}
              >
                <SiGoogledocs className="mr-2 mt-[3px] block" />
                {`${t('read')}`}
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
export default Card

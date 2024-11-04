'use client'

import { buildUrl } from 'cloudinary-build-url'
import clsx from 'clsx'
import Image, { ImageProps } from 'next/image'
import { useState } from 'react'
import Lightbox from 'react-image-lightbox'

import 'react-image-lightbox/style.css'

type CloudinaryImgType = {
  publicId: string
  height: number
  width: number
  alt: string
  title?: string
  className?: string
  preview?: boolean
  linked?: boolean
  noStyle?: boolean
  aspect?: {
    width: number
    height: number
  }
  mdx?: boolean
} & React.ComponentPropsWithoutRef<'figure'> &
  Omit<ImageProps, 'src'>

const CloudinaryImg = ({
  publicId,
  height,
  width,
  alt,
  title,
  className,
  preview = true,
  linked = false,
  noStyle = false,
  mdx = false,
  style,
  aspect,
  fill,
  ...rest
}: CloudinaryImgType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const urlBlurred = buildUrl(publicId, {
    cloud: {
      cloudName: 'jeonghyunan',
    },
    transformations: {
      effect: {
        name: 'blur:1000',
      },
      quality: 1,
      rawTransformation: aspect
        ? `c_fill,ar_${aspect.width}:${aspect.height},w_${width}`
        : undefined,
    },
  })
  const url = buildUrl(publicId, {
    cloud: {
      cloudName: 'jeonghyunan',
    },
    transformations: {
      rawTransformation: aspect
        ? `c_fill,ar_${aspect.width}:${aspect.height},w_${width}`
        : undefined,
    },
  })
  const aspectRatio = aspect ? aspect.height / aspect.width : undefined

  return (
    <figure
      className={clsx(className, {
        'overflow-hidden rounded shadow dark:shadow-none': !noStyle,
        'mx-auto w-full': mdx && width <= 800,
      })}
      style={{
        ...(mdx && width <= 800 ? { maxWidth: width } : {}),
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          position: 'relative',
          height: 0,
          paddingTop: aspectRatio ? `${aspectRatio * 100}%` : `${(+height / +width) * 100}%`,
          cursor: (preview && 'zoom-in') || (linked && 'pointer') || 'default',
        }}
        className="img-blur"
        onClick={preview ? () => setIsOpen(true) : undefined}
      >
        <style jsx>{`
          .img-blur::before {
            content: '';
            position: absolute;
            inset: 0;
            filter: blur(20px);
            z-index: 0;
            background-image: url(${urlBlurred});
            background-position: center center;
            background-size: 100%;
          }
        `}</style>
        <div className="absolute left-0 top-0">
          <Image
            width={width}
            height={height}
            src={url}
            alt={alt}
            title={title || alt}
            fill={fill}
          />
        </div>
      </div>
      {isOpen && <Lightbox mainSrc={url} onCloseRequest={() => setIsOpen(false)} />}
    </figure>
  )
}

export default CloudinaryImg

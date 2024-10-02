import { Button } from '@headlessui/react'
import React from 'react'

interface HeroLayoutProps {
  title?: string
  description?: string
}

const HeroLayout: React.FC<HeroLayoutProps> = ({ title, description }) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Frontend Developer
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
              Crafting beautiful and functional web experiences with modern technologies.
            </p>
          </div>
          <div className="space-x-4">
            <Button>View Projects</Button>
            <Button>Contact Me</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroLayout

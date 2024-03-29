import * as React from 'react'

interface PageHeroProps {
  title: string
  description?: string
  image?: string
}

import defaultImage from '@/svg/undraw/undraw_programming_re_kg9v.svg'

const PageHero = ({ title, description, image }: PageHeroProps) => (
  <div className="mb-4 md:mb-0 w-full max-w-screen-xl mx-auto relative h-96 text-white">
    <div className="absolute left-0 bottom-0 w-full h-full z-10 bg-gradient-to-t from-gray-700"></div>
    <img
      src={image ? image : defaultImage}
      alt="featured image"
      className="absolute left-0 top-0 w-full h-full z-0 object-contain"
    />
    <div className="p-4 absolute bottom-0 left-0 z-20">
      <h2 className="text-4xl font-bold text-gray-300 leading-tight">{title}</h2>
      <h2 className="text-xl font-medium italic text-gray-300">{description}</h2>
    </div>
  </div>
)
export default PageHero

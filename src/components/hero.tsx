import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

export default function Hero() {
  return (
    <div className="relative z-10 bg-white light:bg-black text-white light:text-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 bg-white light:bg-black">
          <div className="bg-white light:bg-black text-white light:text-black transition-all duration-200">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
          </div>
          <main className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
            <div className="text-center sm:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl text-left">
                <span className="block xl:inline text-gray-400">PubliusLogic</span>{' '}
                <span className="block text-gray-400 xl:inline">Law</span>
              </h1>
              <p className="mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 text-gray-400">
                At PubliusLogic we Publish Logic as Common Sense. Publius was taken from The Federalist Papers and my extensive studies Of the USA Books at Large = Us Congressional Reports most of my focus was on Books I and II. 
              </p>
              <p className="mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 text-gray-400"> 
                Logic came from Thomas Payne's book, "Common Sense", = Logic.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow text-white bg-red-600 hover:bg-red-700">
                  <Link
                    to="/about"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-200 md:py-4 md:text-lg md:px-10"
                  >
                    About
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3 text-red-300">
                  <a
                    href="https://github.com/sponsors/hellotham"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-red-300 hover:bg-red-400 md:py-4 md:text-lg md:px-10"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Sponsor Us
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-opacity-25">
        <StaticImage className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src='../images/jpg/digital_box_1400-compressor.jpg' alt='PubliusLogic' />
      </div>
    </div>
  )
}

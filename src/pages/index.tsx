import * as React from 'react'

import SEO from '@/components/seo'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Features from '@/components/features'
import FindOutMore from '@/components/findoutmore'
import LatestArticles from '../components/latestarticles'
import CTA from '../components/cta'
import Footer from '@/components/footer'

import OGImage from '@/images/undraw/undraw_Programming_re_kg9v.png'

export default function Home() {
  const ogimage = {
    src: OGImage,
    width: 1342,
    height: 1024,
  }

  return (
    <div className="font-sans">
      <SEO
        type="homepage"
        title="Home"
        description="PubliusLogic topics on Law Congress Programing and Human Anything."
        image={ogimage}
      />
      <Header />
      <Hero />
      <Features />
      <FindOutMore />
      <LatestArticles />
      <CTA />
      <div className="p-24 md:p-1" />
      <Footer />
    </div>
  )
}

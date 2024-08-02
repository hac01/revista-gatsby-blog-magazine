import React from 'react'
import Layout from '../components/Layout'
import AboutUs from '../components/About/AboutUs'
import Vision from '../components/About/Vision'
import Network from '../components/About/Network'
import Seo from '../components/SEO'

const about = () => {
  return (
    <Layout>
      <Seo
        title="About Me"
        description="Hey it's me Hac, I am make cyber security related content and sometimes i also stream on twitch."
      />

      <AboutUs />
      <Vision />
      <Network />
    </Layout>
  )
}

export default about

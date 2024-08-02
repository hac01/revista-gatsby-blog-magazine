import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/SEO'
import ContactForm from '../components/ContactForm'

const contact = () => {
  return (
    <Layout>
      <Seo
        title="Contact Me"
        description="Temporairaly unavailable"
      />
      <ContactForm />
    </Layout>
  )
}

export default contact

import React from 'react'
import Link from 'next/link'
import api from '../../lib/api'
import Layout from '../../components/layout'

const Page = ({ directory }) => (
  <Layout>
    <h2>Directory</h2>
    <div>
    {directory.map( direct => (
      <Link href="/directory/[slug]" as={`/directory/${direct.slug}`}>
        <a>
          <h3>{direct.name}</h3>
        </a>
      </Link>
    ))}
    </div>
  </Layout>
)

Page.getInitialProps = async (req) => {
  const directory = await api('org')

  return {
    directory: directory.json
  }
}

export default Page

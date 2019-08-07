import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/layout'
import api from '../../lib/api'

const Page = ({ entry }) => (
  <Layout>
    <div>
      <div>
        <p>{entry.website}</p>
        <p>{entry.phone_num}</p>
        <p>{entry.email_address}</p>
      </div>
      <div>
      {entry.address && (
        <p>{entry.address.concat(" ",entry.postcode)}</p>
      )}

      </div>
    </div>
    <h3>About</h3>
    <p>{entry.descr}</p>
    /*Add images here*/
  </Layout>
)

Page.getInitialProps = async ({ query }) => {
  const entry = await api(`org/${query.slug}`)

  return {
    entry: entry.json
  }
}

export default Page

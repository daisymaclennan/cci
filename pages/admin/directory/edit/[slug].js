import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../../../components/layout'
import api from '../../../../lib/api'
import { Formik, Form, Field, FieldArray } from 'formik';

const Page = ({ org }) => (
  <div>
    <h1>Edit {org.name}</h1>
    <Formik
          initialValues={{name : org.name, address: org.address, postcode: org.postcode, owner: org.owner, descr: org.descr, phone_num: org.phone_num, website: org.website}}
          onSubmit={async values => {
            // const register = await api('directory/add', {
            const register = await api(`org/${org.slug}`, {
              method: 'PATCH',
              body: JSON.stringify(values),
              headers: {
                "content-type": "application/json"
              }
            })
          }
          }
          render={({ values, handleSubmit }) => (
            <form onSubmit={
              handleSubmit
            }>
              <div>
                <label for="name">Name:</label>
                <Field type="text" name="name"/>
              </div>
              <div>
                <label for="address">Address:</label>
                <Field type="text" name="address"/>
              </div>
              <div>
                <label for="postcode">Postcode:</label>
                <Field type="text" name="postcode"/>
              </div>
              <div>
                <label for="owner">Owner(s):</label>
                <Field type="text" name="owner"/>
              </div>
              <div>
                <label for="descr">Description:</label>
                <Field component="textarea" name="descr"/>
              </div>
              <div>
                <label for="feat_img">Featured image:</label>
                <Field type="file" name="feat_img"/>
              </div>
              <div>
                <label for="phone_num">Phone number:</label>
                <Field type="text" name="phone_num"/>
              </div>
              <div>
                <label for="website">Website:</label>
                <Field type="text" name="website"/>
              </div>
              <button type="submit">Save changes</button>
            </form>
          )}
        />
      </div>
)

Page.getInitialProps = async ({ query }) => {
  const org = await api(`org/${query.slug}`)

  return {
    org: org.json
  }
}

export default Page
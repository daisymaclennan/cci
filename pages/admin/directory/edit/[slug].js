import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../../../components/layout'
import api from '../../../../lib/api'
import { Formik, Form, Field, FieldArray } from 'formik';
import AdminLayout from '../../../../components/admin-layout'
import AdminContentSection from '../../../../components/admin-content-section'

const Page = ({ org, cats }) => (
  <AdminLayout>
    <AdminContentSection>
      <h1>Edit {org.name}</h1>
      <Formik
            initialValues={{name : org.name,
                            address: org.address,
                            postcode: org.postcode,
                            email_address: org.email_address,
                            owner: org.owner,
                            descr: org.descr,
                            excerpt: org.excerpt,
                            phone_num: org.phone_num, 
                            website: org.website}}
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
                  <label htmlFor="name">Name:</label>
                  <Field type="text" name="name"/>
                </div>
                <div>
                  <label htmlFor="address">Address:</label>
                  <Field type="text" name="address"/>
                </div>
                <div>
                  <label htmlFor="postcode">Postcode:</label>
                  <Field type="text" name="postcode"/>
                </div>
                <div>
                  <label htmlFor="email_address">Email address:</label>
                  <Field type="email" name="email_address"/>
                </div>
                <div>
                  <label htmlFor="owner">Owner(s):</label>
                  <Field type="text" name="owner"/>
                </div>
                <div>
                  <label htmlFor="descr">Description:</label>
                  <Field component="textarea" name="descr"/>
                </div>
                <div>
                  <label htmlFor="excerpt">Excerpt:</label>
                  <Field type="text" name="excerpt"/>
                </div>
                <div>
                  <label htmlFor="feat_img">Featured image:</label>
                  <Field type="file" name="feat_img"/>
                </div>
                <div>
                  <label htmlFor="phone_num">Phone number:</label>
                  <Field type="text" name="phone_num"/>
                </div>
                <div>
                  <label htmlFor="website">Website:</label>
                  <Field type="text" name="website"/>
                </div>
                <label htmlFor="category">Category:</label>
                <Field component="select" name="category">
                {cats.map(cat => (
                  <option value={cat.category_id} key={cat.category_name}>
                      {cat.category_name}
                  </option>
                ))}
                </Field>
                <button type="submit">Save changes</button>
              </form>
            )}
          />
        </AdminContentSection>
      </AdminLayout>
)

Page.getInitialProps = async ({ query }) => {
  const org = await api(`org/${query.slug}`)
  const cats = await api('org/categories')

  return {
    org: org.json,
    cats: cats.json
  }
}

export default Page

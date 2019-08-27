import React from 'react'
import { Formik, Form, Field, FieldArray } from 'formik';
import api from '../../../lib/api'
import AdminLayout from '../../../components/admin-layout'
import AdminContentSection from '../../../components/admin-content-section'

const Page = ({ cats }) => (
  <AdminLayout>
    <AdminContentSection>
      <h1>Add to the directory</h1>
      <Formik
            initialValues={{name : '',
                            address: '',
                            postcode: '',
                            email_address: '',
                            description: '',
                            excerpt: '',
                            logo: '',
                            phone_num: '',
                            website: ''}}
            onSubmit={async values => {
              const register = await api('org', {
                method: 'POST',
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
                  <label htmlFor="description">Description:</label>
                  <Field type="text" name="description"/>
                </div>
                <div>
                  <label htmlFor="excerpt">Excerpt:</label>
                  <Field type="text" name="excerpt"/>
                </div>
                <div>
                  <label htmlFor="feat_img">Logo:</label>
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
                <label htmlFor="category">Categorize:</label>
                <Field component="select" name="category">
                {cats.map(cat => (
                  <option value={cat.category_id} key={cat.category_name}>
                      {cat.category_name}
                  </option>
                ))}
                </Field>
                <button type="submit">Add</button>
              </form>
            )}
          />
          <Formik
                initialValues={{email_address : '', password: ''}}
                onSubmit={async values => {
                  console.log('file', values.upload)
                  const data = new FormData()
                  data.append('files', values.upload)
                  const register = await api('uploads', {
                    method: 'POST',
                    body: data
                  })
                }
                }
                render={({ values, handleSubmit }) => (
                  <form onSubmit={
                    handleSubmit
                  }>
                    <label htmlFor="upload">Upload images for your orgs gallery:</label>
                    <Field type="file" name="upload"/>
                    <button type="submit">Add</button>
                  </form>
                )}
              />
        </AdminContentSection>
      </AdminLayout>
)

Page.getInitialProps = async (req) => {
  const cats = await api('org/categories')

  return {
    cats: cats.json
  }
}

export default Page

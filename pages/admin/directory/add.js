import React from 'react'
import { Formik, Form, Field, FieldArray } from 'formik';
import api from '../../../lib/api'
import AdminLayout from '../../../components/admin-layout'
import AdminContentSection from '../../../components/admin-content-section'
import AlgoliaPlaces from 'algolia-places-react'

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

              <AlgoliaPlaces
                  placeholder='Start typing your address...'

                  options={{
                    appId: 'plUG20TR7CRB',
                    apiKey: 'ee74e6f7e24ca1583c2f126b713e11f4',
                    language: 'en',
                    countries: ['GB'],
                    type: 'address',
                    // Other options from https://community.algolia.com/places/documentation.html#options
                  }}

                  onChange={({ query, rawAnswer, suggestion, suggestionIndex }) =>
                    console.log('Fired when suggestion selected in the dropdown or hint was validated.')}

                  onSuggestions={({ rawAnswer, query, suggestions }) =>
                    console.log('Fired when dropdown receives suggestions. You will receive the array of suggestions that are displayed.')}

                  onCursorChanged={({ rawAnswer, query, suggestion, suggestonIndex }) =>
                    console.log('Fired when arrows keys are used to navigate suggestions.')}

                  onClear={() =>
                    console.log('Fired when the input is cleared.')}

                  onLimit={({ message }) =>
                    console.log('Fired when you reached your current rate limit.')}

                  onError={({ message }) =>
                    console.log('Fired when we could not make the request to Algolia Places servers for any reason but reaching your rate limit.')}
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

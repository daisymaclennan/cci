import React from 'react'
import { Formik, Form, Field, FieldArray } from 'formik';
import api from '../../../lib/api'

const Page = () => (
  <div>
    <h1>Add to the directory</h1>
    <Formik
          initialValues={{email_address : '', password: ''}}
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
                <label for="description">Description:</label>
                <Field type="text" name="description"/>
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
                  <Field type="file" name="upload"/>
                  <button type="submit">Add</button>
                </form>
              )}
            />
      </div>
)

export default Page

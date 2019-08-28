import React from 'react'
//import React, { Component } from 'react'
import { Formik, Form, Field, FieldArray } from 'formik';
import api from '../../../lib/api'

//Only imports editor when LazyEditor is rendered
const LazyEditor = React.lazy(() => import('@stfy/react-editor.js'));

import AdminLayout from '../../../components/admin-layout'
import AdminContentSection from '../../../components/admin-content-section'

//LazyEditor is only rendered when the code is being ran in the browser (used to avoid window not defined bug)
const Page = () => (
  <AdminLayout>
    <AdminContentSection>
      <Formik
            initialValues={{email_address : '', password: ''}}
            onSubmit={async values => {
              const register = await api('blog', {
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
                <label htmlFor='title'>Title:</label>
                <Field type='text' name='title'/>
                <label htmlFor='feat_img'>Featured image:</label>
                <Field type='file' name='feat_img'/>
                <label htmlFor='is_published'>Publish to live site:</label>
                <Field type='checkbox' name='is_published'/>
                <button type="submit">Save</button>
              </form>
            )}
        />
      {process.browser && (
        <LazyEditor
            autofocus
            holderId="editorjs-container"
            onChange={(data) => console.log(data)}
            customTools={{}}
            onReady={() => console.log('Start!')}
            data={{
              "time" : 1554920381017,
              "blocks" : [
                  {
                      "type" : "header",
                      "data" : {
                          "text" : "Start writing your blog post here...",
                          "level" : 2
                      }
                  },
              ],
              "version" : "2.12.4"
            }}
          />
      )}
    </AdminContentSection>
  </AdminLayout>
)

export default Page

import React from 'react'
import { Formik, Form, Field, FieldArray } from 'formik';
import api from '../../../../lib/api'

const Page = ( {cats} ) => (
  <div>
    <h1>Add new category</h1>
    <Formik
          initialValues={{email_address : '', password: ''}}
          onSubmit={async values => {
            const register = await api('org/categories', {
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
                <label htmlFor="category_name">Category Name:</label>
                <Field type="text" name="category_name"/>
              </div>
              <Field component="select" name="parent_category">
              {cats.map(cat => (
                <option value={cat.category_id} key={cat.category_name}>
                    {cat.category_name}
                </option>
              ))}
              </Field>
              <button type="submit">Add Category</button>
            </form>
          )}
        />
      </div>
)

Page.getInitialProps = async (req) => {
  const cats = await api('org/categories')

  return {
    cats: cats.json
  }
}

export default Page

import React from 'react'
import { Formik, Form, Field, FieldArray } from 'formik';
import api from '../../../../lib/api'
import AdminLayout from '../../../../components/admin-layout'
import AdminContentSection from '../../../../components/admin-content-section'

const Page = ( {cats} ) => (
  <AdminLayout>
    <AdminContentSection>
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
                <div>
                  <label htmlFor="parent_category">Parent category:</label>
                  <Field component="select" name="parent_category">
                  {cats.map(cat => (
                    <option value={cat.category_id} key={cat.category_name}>
                        {cat.category_name}
                    </option>
                  ))}
                  </Field>
                  <Field type="color" name="color"/>
                </div>
                <button type="submit">Add Category</button>
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

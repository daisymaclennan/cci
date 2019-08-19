import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'
import DiscoverOverlay from '../components/discover-overlay'
import api from '../lib/api'
import { useState } from 'react'
import SecondaryButton from '../components/secondary-button'
import { Formik, Form, Field, FieldArray } from 'formik';


const Page = ({ categories }) => {
  const [ discoverOpen, setDiscoverOpen ] = useState(false)
  return(
    <Layout>
      <SecondaryButton href="/directory">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="6" cy="6" r="5.5" stroke="#52565F"/>
        </svg>
        View map as list
      </SecondaryButton>
      <DiscoverOverlay className={discoverOpen ? 'discover-show' : 'discover-hidden'}>
        <button className="not-style-button open-button" onClick={() => setDiscoverOpen(!discoverOpen)}>
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.625 9.3125H7.57813C7.67188 9.40625 7.8125 9.45312 8 9.45312C8.14063 9.45312 8.28125 9.40625 8.42188 9.3125L15.3594 2.42187C15.4531 2.32812 15.5 2.1875 15.5 2.04687C15.5 1.90625 15.4531 1.76562 15.3594 1.625L14.4219 0.6875C14.2812 0.59375 14.1406 0.546875 14 0.546875C13.8125 0.546875 13.7188 0.59375 13.625 0.6875L8 6.26562L2.375 0.6875C2.28125 0.59375 2.14063 0.546875 2 0.546875C1.8125 0.546875 1.67188 0.59375 1.57813 0.6875L0.640625 1.625C0.546875 1.76562 0.5 1.90625 0.5 2.04687C0.5 2.1875 0.546875 2.32812 0.6875 2.42187L7.625 9.3125Z" fill="white"/>
          </svg>
        </button>
        <h2>Discover</h2>
        <Formik
          render={() => (
            <div  className="parent-category-box">
              {categories.map( category => !category.parent_category_id && (
                <div className="filter">
                  <Field type="checkbox" name="filter-box" value={category.slug} id={category.slug}/>
                  <label htmlFor={category.slug}>
                    <img src={`static/img/cat_icon/${category.icon_filename}`}/>
                    <h6>
                      {category.category_name}
                    </h6>
                  </label>
                </div>
              ))}
              <button className="no-style-button filter">
                <img src="static/img/cat_icon/more.svg" alt="elipsis in a circle"/>
                <h6>
                  More
                </h6>
              </button>
            </div>
          )}
        />
      </DiscoverOverlay>
    </Layout>
  )
}


Page.getInitialProps = async (req) => {
  const categories = await api('org/categories')

  return {
    categories: categories.json,
  }
}

export default Page


/*{categories.map( category => !category.parent_category_id && (
  <a className="cat-box">
    <img src={`/static/img/cat_icon/${category.icon_filename}`}/>
    <h5 class="org_category">{category.category_name}</h5>
  </a>
))}*/

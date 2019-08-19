import React from 'react'
import Link from 'next/link'
import api from '../../lib/api'
import Layout from '../../components/layout'
import TitleBox from '../../components/title-box'
import OrgCat from '../../components/org-cat'
import {useRouter} from 'next/router'
import OrgBox from '../../components/org-box'
import { Formik, Form, Field, FieldArray } from 'formik';
import Filters from '../../components/filters'
import Content from '../../components/content'
import SecondaryButton from '../../components/secondary-button'
import CatSlugHeader from '../../components/cat-slug-header'
import IconLink from '../../components/icon-link'

const Page = ({ categories, orgs }) => {
  const router = useRouter();

  console.log('GETTING CATEGORY TOP LEVEL', router.query.cat)

  if(router.query.cat){
    return(<CatPage categories={categories} orgs={orgs}></CatPage>)
  }
  return(
    <Layout>
      <Content>
        <SecondaryButton href="/">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="#0D87FF" xmlns="http://www.w3.org/2000/svg">
          <circle cx="6" cy="6" r="5.5" stroke="#0D87FF"/>
          </svg>
          View map as list
        </SecondaryButton>
        <TitleBox>
          <h2>Map Directory</h2>
        </TitleBox>
        <div>
          {categories.map( category => !category.parent_category_id && (
            <OrgCat>
                <Link href="/directory?cat=[cat]" as={`/directory?cat=${category.slug}`}>
                  <a>
                    <img src={`/static/img/cat_icon/${category.icon_filename}`}/>
                    <h3 class="org_category">{category.category_name}</h3>
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.96875 1.8125C7.8125 1.6875 7.75 1.5 7.75 1.3125C7.75 1.125 7.8125 0.9375 7.96875 0.75L8.5 0.25C8.625 0.09375 8.8125 0 9 0C9.1875 0 9.375 0.09375 9.53125 0.25L13.7812 4.46875C13.9062 4.625 14 4.8125 14 5C14 5.21875 13.9062 5.40625 13.7812 5.53125L9.53125 9.75C9.375 9.9375 9.1875 10 9 10C8.8125 10 8.625 9.9375 8.5 9.75L7.96875 9.25C7.8125 9.09375 7.75 8.90625 7.75 8.71875C7.75 8.53125 7.8125 8.34375 7.96875 8.1875L10 6.125H0.75C0.53125 6.125 0.34375 6.0625 0.21875 5.90625C0.0625 5.78125 0 5.59375 0 5.375V4.625C0 4.4375 0.0625 4.25 0.21875 4.09375C0.34375 3.96875 0.53125 3.875 0.75 3.875H10L7.96875 1.8125Z" fill="#52565F"/>
                    </svg>
                  </a>
                </Link>
            </OrgCat>
          ))}
        </div>
      </Content>
    </Layout>
  )
}

const CatPage = ({ categories, orgs }) => {
  const Router = useRouter();
  console.log('GETTING CATEGORY', Router.query.cat)

  const category = categories.find(category => {
    return category.slug === Router.query.cat
  })

  /* if (!category) {
    return <p>Category not found</p>
  } */

  console.log("category", category)

  console.log(categories)

  const sub_categories = categories.filter(sub_category => sub_category.parent_category_id = category.category_id)

  /*const sub_categories = categories.filter( sub_category => sub_category.name != NULL{
    console.log('testing category', sub_category.category_name, 'with parent id', sub_category.parent_category_id, 'against category', category.category_id)
    return sub_category.parent_category_id == category.category_id
  })*/

  console.log(sub_categories)

  return(
    <Layout>
      <CatSlugHeader>
        <h2>{category.category_name}</h2>
        <IconLink>
          <h5>
            Back
          </h5>
          <svg width="11" height="12" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.96875 1.8125C7.8125 1.6875 7.75 1.5 7.75 1.3125C7.75 1.125 7.8125 0.9375 7.96875 0.75L8.5 0.25C8.625 0.09375 8.8125 0 9 0C9.1875 0 9.375 0.09375 9.53125 0.25L13.7812 4.46875C13.9062 4.625 14 4.8125 14 5C14 5.21875 13.9062 5.40625 13.7812 5.53125L9.53125 9.75C9.375 9.9375 9.1875 10 9 10C8.8125 10 8.625 9.9375 8.5 9.75L7.96875 9.25C7.8125 9.09375 7.75 8.90625 7.75 8.71875C7.75 8.53125 7.8125 8.34375 7.96875 8.1875L10 6.125H0.75C0.53125 6.125 0.34375 6.0625 0.21875 5.90625C0.0625 5.78125 0 5.59375 0 5.375V4.625C0 4.4375 0.0625 4.25 0.21875 4.09375C0.34375 3.96875 0.53125 3.875 0.75 3.875H10L7.96875 1.8125Z" fill="#000000"/>
          </svg>
        </IconLink>
      </CatSlugHeader>
      <Filters>
        <Formik
          render={() => (
            <>
              {sub_categories.map( sub_cat => (
                <div>
                  <Field type="checkbox" name="filter" value={sub_cat.slug} id={sub_cat.slug}/>
                  <label htmlFor={sub_cat.slug}>{sub_cat.category_name}</label>
                </div>
              ))}
            </>
          )}
        />
      </Filters>


      <div>
        {orgs.map( org => (


          <Link href="/directory/[slug]" as={`/directory/${org.slug}`}>
            <OrgBox>
              <div>
                <img src={`/static/uploads/${org.logo}`} alt={`${org.name}'s logo`}/>
                <IconLink>
                  <h5>View company</h5>
                  <svg width="11" height="12" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.96875 1.8125C7.8125 1.6875 7.75 1.5 7.75 1.3125C7.75 1.125 7.8125 0.9375 7.96875 0.75L8.5 0.25C8.625 0.09375 8.8125 0 9 0C9.1875 0 9.375 0.09375 9.53125 0.25L13.7812 4.46875C13.9062 4.625 14 4.8125 14 5C14 5.21875 13.9062 5.40625 13.7812 5.53125L9.53125 9.75C9.375 9.9375 9.1875 10 9 10C8.8125 10 8.625 9.9375 8.5 9.75L7.96875 9.25C7.8125 9.09375 7.75 8.90625 7.75 8.71875C7.75 8.53125 7.8125 8.34375 7.96875 8.1875L10 6.125H0.75C0.53125 6.125 0.34375 6.0625 0.21875 5.90625C0.0625 5.78125 0 5.59375 0 5.375V4.625C0 4.4375 0.0625 4.25 0.21875 4.09375C0.34375 3.96875 0.53125 3.875 0.75 3.875H10L7.96875 1.8125Z" fill="#000000"/>
                  </svg>
                </IconLink>
              </div>
              <p>{org.descr}</p>
            </OrgBox>
          </Link>


        ))}
      </div>
    </Layout>
  )
}

const OrgPage = ({ categories, orgs }) => {
  return(
    <Layout>
      <Content>
        <SecondaryButton href="/">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="#0D87FF" xmlns="http://www.w3.org/2000/svg">
          <circle cx="6" cy="6" r="5.5" stroke="#0D87FF"/>
          </svg>
          View map as list
        </SecondaryButton>
        <TitleBox>
          <h2>Map Directory</h2>
        </TitleBox>
        <div>
          {categories.map( category => !category.parent_category_id && (
            <OrgCat>
                <Link href="/directory?cat=[cat]" as={`/directory?cat=${category.slug}`}>
                  <a>
                    <img src={`/static/img/cat_icon/${category.icon_filename}`}/>
                    <h3 class="org_category">{category.category_name}</h3>
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.96875 1.8125C7.8125 1.6875 7.75 1.5 7.75 1.3125C7.75 1.125 7.8125 0.9375 7.96875 0.75L8.5 0.25C8.625 0.09375 8.8125 0 9 0C9.1875 0 9.375 0.09375 9.53125 0.25L13.7812 4.46875C13.9062 4.625 14 4.8125 14 5C14 5.21875 13.9062 5.40625 13.7812 5.53125L9.53125 9.75C9.375 9.9375 9.1875 10 9 10C8.8125 10 8.625 9.9375 8.5 9.75L7.96875 9.25C7.8125 9.09375 7.75 8.90625 7.75 8.71875C7.75 8.53125 7.8125 8.34375 7.96875 8.1875L10 6.125H0.75C0.53125 6.125 0.34375 6.0625 0.21875 5.90625C0.0625 5.78125 0 5.59375 0 5.375V4.625C0 4.4375 0.0625 4.25 0.21875 4.09375C0.34375 3.96875 0.53125 3.875 0.75 3.875H10L7.96875 1.8125Z" fill="#52565F"/>
                    </svg>
                  </a>
                </Link>
            </OrgCat>
          ))}
        </div>
      </Content>
    </Layout>
  )
}

Page.getInitialProps = async (req) => {
  const categories = await api('org/categories')
  const orgs = await api('org')

  return {
    categories: categories.json,
    orgs: orgs.json
  }
}

export default Page

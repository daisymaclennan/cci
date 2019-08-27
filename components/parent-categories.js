import styled from 'styled-components'
import OrgCategoryHorizontal from './org-category-horizontal'
import Link from 'next/link'
import {useRouter} from 'next/router'

const ParentCategories = ({ categories}) => {
  if (!categories) {
    console.log('no categories??')
    return <div />
  }
  const router = useRouter();

  function findActiveCat(catName){
    if(router.query.cat){
      if(router.query.cat === catName){
        return true
      }
    }
    return false
  }
  return(
    <>
      {categories.map( category => !category.parent_category_id && (
        <OrgCategoryHorizontal key={category.category_id}>
            <Link href="/directory?cat=[cat]" as={`/directory?cat=${category.slug}`}>
              <a>
                <img src={`/static/img/cat_icon/${category.icon_filename}`}/>
                <h3 className="org_category">{category.category_name}</h3>
                <svg className="arrow" width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.96875 1.8125C7.8125 1.6875 7.75 1.5 7.75 1.3125C7.75 1.125 7.8125 0.9375 7.96875 0.75L8.5 0.25C8.625 0.09375 8.8125 0 9 0C9.1875 0 9.375 0.09375 9.53125 0.25L13.7812 4.46875C13.9062 4.625 14 4.8125 14 5C14 5.21875 13.9062 5.40625 13.7812 5.53125L9.53125 9.75C9.375 9.9375 9.1875 10 9 10C8.8125 10 8.625 9.9375 8.5 9.75L7.96875 9.25C7.8125 9.09375 7.75 8.90625 7.75 8.71875C7.75 8.53125 7.8125 8.34375 7.96875 8.1875L10 6.125H0.75C0.53125 6.125 0.34375 6.0625 0.21875 5.90625C0.0625 5.78125 0 5.59375 0 5.375V4.625C0 4.4375 0.0625 4.25 0.21875 4.09375C0.34375 3.96875 0.53125 3.875 0.75 3.875H10L7.96875 1.8125Z" fill="#52565F"/>
                </svg>
                <svg className={`${findActiveCat(category.slug) ? "active-cat" : "inactive-cat"} cat-blip`} width="6" height="24" viewBox="0 0 6 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 24C2.23858 24 -9.78513e-08 21.7614 -2.18557e-07 19L-8.30516e-07 5C-9.51222e-07 2.23857 2.23858 -9.78513e-08 5 -2.18557e-07L6 -2.62268e-07L6 24L5 24Z" fill="#0D87FF"/>
                </svg>
              </a>
            </Link>
        </OrgCategoryHorizontal>
      ))}
    </>
  )
}

export default ParentCategories

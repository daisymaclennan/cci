import React, { useState } from 'react'
import Link from 'next/link'
import Layout from '../components/layout'
import DiscoverOverlay from '../components/discover-overlay'
import api from '../lib/api'
import useMap from '../lib/use-map'
import SecondaryButton from '../components/secondary-button'
import { Formik, Form, Field, FieldArray } from 'formik';
import IconLink from '../components/icon-link'
import VerticalToggleButton from '../components/vertical-toggle-button'
import ParentCategoryFilterButtons from '../components/parent-category-filter-buttons'
import Org from '../components/org'
import PopUpStyle from '../components/pop-up-style'

const Page = ({ categories, orgs }) => {
  const [ discoverOpen, setDiscoverOpen ] = useState("closed")
  const map = useMap()

  //Sets the value of visibilityClass based on the state of discoverOpen
  let visibilityClass
  switch (discoverOpen){
    case "closed":
      visibilityClass = "discoverClosed"
      break
    case "menu":
      visibilityClass = "discoverHalfway"
      break
    case "open":
      visibilityClass = "discoverOpen"
  }

  function toggleMenu(){
    var nextState = (discoverOpen === "menu")
      ? "closed"
      : "menu"
    if(discoverOpen === "open"){
      nextState = "closed"
    }
    setDiscoverOpen(nextState)
  }

  const Content = discoverOpen === "open"
    ? DiscoverOpen
    : DiscoverHalfway



  return(
    <Layout>
      <SecondaryButton href="/directory">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="6" cy="6" r="5.5" stroke="#52565F"/>
        </svg>
        View map as list
      </SecondaryButton>

      {map && (
        <map.Map center={[ 50.80767,  -1.071854 ]}
                 zoom={12.5}
                 minZoom={12.5}
                 zoomControl={false}
                 >
          <map.TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {orgs.map(org => (
            <map.Marker position={[org.latitude, org.longitude]}>
              <map.Popup closeButton={0}
                         minWidth='400px'
                         >
                <PopUpStyle>
                  <Org org={org}/>
                </PopUpStyle>
              </map.Popup>
            </map.Marker>
          ))}
        </map.Map>
      )}

      <DiscoverOverlay className={`${visibilityClass}`}>
        <VerticalToggleButton
          isActive={discoverOpen !== 'closed'}
          onClick={toggleMenu}
        />

        <Content toggleMenu={toggleMenu} categories={categories}  setDiscoverOpen={setDiscoverOpen}/>
      </DiscoverOverlay>
    </Layout>
  )
}


const DiscoverHalfway = ({categories, setDiscoverOpen}) => {
  return(
    <ParentCategoryFilterButtons className="categories-content">
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
            <button className="no-style-button filter" onClick={() => {setDiscoverOpen("open")}}>
              <img src="static/img/cat_icon/more.svg" alt="elipsis in a circle"/>
              <h6>
                More
              </h6>
            </button>
          </div>
        )}
      />
    </ParentCategoryFilterButtons>
  )
}

const DiscoverOpen = ({categories, setDiscoverOpen}) => {
  const categoryByParentId = categories.reduce(function(reduced, category){
    if (typeof reduced[category.category_id] === 'undefined') {
      reduced[category.category_id] = []
    }

    if (!category.parent_category_id) {
      return reduced
    }

    if(typeof reduced[category.parent_category_id] === "undefined"){
      reduced[category.parent_category_id] = []
    }

    reduced[category.parent_category_id].push(category)

    return reduced
  }, {})

  console.log('cats by parent', categoryByParentId)
  return(
    <div className="categories-content">
      <div className="categories-top-bar">
        <h2>More</h2>
        <IconLink onClick={() => {setDiscoverOpen("menu")}}>
          <h5>Back</h5>
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.96875 1.8125C7.8125 1.6875 7.75 1.5 7.75 1.3125C7.75 1.125 7.8125 0.9375 7.96875 0.75L8.5 0.25C8.625 0.09375 8.8125 0 9 0C9.1875 0 9.375 0.09375 9.53125 0.25L13.7812 4.46875C13.9062 4.625 14 4.8125 14 5C14 5.21875 13.9062 5.40625 13.7812 5.53125L9.53125 9.75C9.375 9.9375 9.1875 10 9 10C8.8125 10 8.625 9.9375 8.5 9.75L7.96875 9.25C7.8125 9.09375 7.75 8.90625 7.75 8.71875C7.75 8.53125 7.8125 8.34375 7.96875 8.1875L10 6.125H0.75C0.53125 6.125 0.34375 6.0625 0.21875 5.90625C0.0625 5.78125 0 5.59375 0 5.375V4.625C0 4.4375 0.0625 4.25 0.21875 4.09375C0.34375 3.96875 0.53125 3.875 0.75 3.875H10L7.96875 1.8125Z" fill="#000000"/>
          </svg>
        </IconLink>
      </div>
      <Formik
        render={() => (
          <div className="categories">
            {categories.map( category => !category.parent_category_id && (
              <div key={category.category_id} className="single-category">
                <Field type="checkbox" name="filter-box" value={category.slug} id={category.slug}/>
                <label htmlFor={category.slug} className="parent-category">
                  <img src={`static/img/cat_icon/${category.icon_filename}`}/>
                  <h3>
                    {category.category_name}
                  </h3>
                </label>
                <div className="child-categories">
                {categoryByParentId[category.category_id].map( sub_category => (
                  <div key={sub_category.category_id}>
                    <Field type="checkbox" name="filter-box" value={sub_category.slug} id={sub_category.slug}/>
                    <label htmlFor={sub_category.slug}>
                      <p>{sub_category.category_name}</p>
                    </label>
                  </div>
                ))}
                </div>
              </div>
            ))}
          </div>
        )}
      />
    </div>
  )
}

/*
{categories.forEach(function(sub_category){
  if(sub_category.parent_category_id != category.category_id){
    return
  }
  <>
    <Field type="checkbox" name="filter-box" value={sub_category.slug} id={sub_category.slug}/>
    <label htmlFor={sub_category.slug}>
      <h4>{sub_category.category_name}</h4>
    </label>
  </>
})}*/



Page.getInitialProps = async ctx => {
  const categories = await api('org/categories', { ctx })

  const orgs = await api('org', { ctx })

  return {
    categories: categories.json,
    orgs: orgs.json
  }
}

export default Page


/*{categories.map( category => !category.parent_category_id && (
  <a className="cat-box">
    <img src={`/static/img/cat_icon/${category.icon_filename}`}/>
    <h5 class="org_category">{category.category_name}</h5>
  </a>
))}*/

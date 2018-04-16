import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import * as contentfulWrapper from './ContentfulWrapper'


const TextWrapper = (props) => (
  <div>
    <div
      dangerouslySetInnerHTML={{
        __html: props.body.childMarkdownRemark.html
      }}
    />
  </div>
)

const HeroWrapper = (props) => (
  <div>
    <div
      dangerouslySetInnerHTML={{
        __html: props.body.childMarkdownRemark.html
      }}
    />
    <Img resolutions={props.media.resolutions} />
  </div>
)

const ScheduleWrapper = (props) => {
  return (
    <div>
      {props.components.map(( component ) => (
        <div key={component.id}>
          <h2>{component.title}</h2>
          <div>Day: {component.day}</div>
          <div>Time: {component.time}</div>
          <div>Slug: {component.location.slug}</div>
        </div>
      ))}
    </div>
  )
}

const CostWrapper = (props) => (
  <div>
    <h2>{props.heading}</h2>
    <div>{props.price}</div>
    <div
      dangerouslySetInnerHTML={{
        __html: props.body.childMarkdownRemark.html
      }}
    />
  </div>
)

const LocationMapWrapper = (props) => {
  return (
    <div>
      <h2>{props.heading}</h2>
      <div>
        {props.components.map(( component ) => (
          <LocationWrapper {...component} key={component.id} />
        ))}
      </div>
    </div>
  )
}

const LocationWrapper = (props) => {
  return (
    <div>
      {/* {console.log(props.component.location)} */}
      <h2>{props.heading}</h2>
      <div>Lat: {props.location.lat}</div>
      <div>Lon: {props.location.lon}</div>
    </div>
  )
}

const CollectionWrapper = (props) => {
  return (
    <div>
      <h2>{props.heading}</h2>
      <div>
        {props.components.map(( component ) => {
          if (component.parent !== undefined) {
            const componentName = component.parent.id + 'Wrapper';
            const ContentfulWrapper = contentfulWrapper[componentName];

            return (
              <ContentfulWrapper {...component} key={component.id}  />
            )
          }
          else {
            console.log('Component: ' + component.id + ' has no Parent ID')
          }
        })}
      </div>
    </div>
  )
}

CollectionWrapper.propTypes = TextWrapper.propTypes = HeroWrapper.propTypes =
ScheduleWrapper.propTypes = CostWrapper.propTypes = LocationMapWrapper.propTypes =
LocationWrapper.propTypes = {
  component: PropTypes.object
}

export {
  CollectionWrapper,
  TextWrapper,
  HeroWrapper,
  ScheduleWrapper,
  CostWrapper,
  LocationMapWrapper,
  LocationWrapper
}

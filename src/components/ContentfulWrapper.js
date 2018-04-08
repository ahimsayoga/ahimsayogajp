import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const TextWrapper = (props) => (
  <div>
    <div
      dangerouslySetInnerHTML={{
        __html: props.component.body.childMarkdownRemark.html
      }}
    />
  </div>
)

const HeroWrapper = (props) => (
  <div>
    <div
      dangerouslySetInnerHTML={{
        __html: props.component.body.childMarkdownRemark.html
      }}
    />
    <Img resolutions={props.component.media.resolutions} />
  </div>
)

const ScheduleWrapper = (props) => {
  return (
    <div>
      {props.component.items.map(( item ) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <div>Day: {item.day}</div>
          <div>Time: {item.time}</div>
          <div>Slug: {item.location.slug}</div>
        </div>
      ))}
    </div>
  )
}

const CostCollectionWrapper = (props) => {
  return (
    <div>
      <h2>{props.component.heading}</h2>
      <div>
        {props.component.components.map(( component ) => (
          <div key={component.id}>
            <CostWrapper component={component} />
          </div>
        ))}
      </div>
    </div>
  )
}

const CostWrapper = (props) => {
  return (
    <div>
      <h2>{props.component.heading}</h2>
      <div>Price: {props.component.price}</div>
      <div
        dangerouslySetInnerHTML={{
          __html: props.component.body.childMarkdownRemark.html
        }}
      />
    </div>
  )
}

const LocationCollectionWrapper = (props) => {
  return (
    <div>
      <h2>{props.component.heading}</h2>
      <div>
        {props.component.components.map(( component ) => (
          <div key={component.id}>
            <LocationWrapper component={component} />
          </div>
        ))}
      </div>
    </div>
  )
}

const LocationWrapper = (props) => {
  return (
    <div>
      {/* {console.log(props.component.location)} */}
      <h2>{props.component.heading}</h2>
      <div>Lat: {props.component.location.lat}</div>
      <div>Lon: {props.component.location.lon}</div>
    </div>
  )
}

TextWrapper.propTypes = HeroWrapper.propTypes = ScheduleWrapper.propTypes = CostCollectionWrapper.propTypes = CostWrapper.propTypes = LocationCollectionWrapper.propTypes = LocationWrapper.propTypes = {
  component: PropTypes.object
}

export { TextWrapper, HeroWrapper, ScheduleWrapper, CostCollectionWrapper, CostWrapper, LocationCollectionWrapper, LocationWrapper }

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

TextWrapper.propTypes = {
  component: PropTypes.object
}

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

HeroWrapper.propTypes = {
  component: PropTypes.object
}

const ScheduleWrapper = (props) => {
  return (
    <div>
      {console.log(props)}
      {props.component.items.map(( item ) => (
        <div key={item.id}>
          <h2>{item.title}{console.log(item)}</h2>
          <div>Day: {item.day}</div>
          <div>Time: {item.time}</div>
          <div>Slug: {item.location.slug}</div>
        </div>
      ))}
    </div>
  )
}

ScheduleWrapper.propTypes = {
  component: PropTypes.object
}

export { TextWrapper, HeroWrapper, ScheduleWrapper }

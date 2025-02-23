import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Slider.css'

export default function Slider() {
  return (
    <div
    style={{
      paddingBottom: "30px",
      position: "relative",
    }}
  >
    <Carousel
    
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className="slider p-0 m-0 w-100"
      
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 1,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 1,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      <img
        src="src\assets\bg1.jfif"
        style={{
          display: "block",
          height: "100%",
          margin: "auto",
          width: "100%",
        }}
      />
      <img
        src="src\assets\bg2.jpg"
        style={{
          display: "block",
          height: "100%",
          margin: "auto",
          width: "100%",
        }}
      />
    
    </Carousel>
  </div>
  )
}

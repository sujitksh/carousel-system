import React, { useEffect, useState } from 'react'
import { imgData } from '../../data'
import { StyledContainer,StyledImageContainer,StyledImage,StyledBackArrow,StyledForwardArrow } from './carouselStyle'
import { IoIosArrowForward,IoIosArrowBack } from "react-icons/io";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = ()=>{
    setCurrentIndex(currentIndex === imgData.length-1?0:currentIndex+1)
  }
  const handlePrev = ()=>{
    setCurrentIndex(currentIndex === 0?imgData.length-1:currentIndex-1)
  }

  useEffect(()=>{
     const timeInterval = setInterval(()=>{
      handleNext();
     },5000);
     return ()=>{
        clearInterval(timeInterval)
     }
  },[currentIndex])
  return (
    <StyledContainer>
       <StyledImageContainer>
       <StyledBackArrow><IoIosArrowBack onClick={handlePrev} /></StyledBackArrow>
          <StyledImage src={imgData[currentIndex]} />
       <StyledForwardArrow><IoIosArrowForward onClick={handleNext} /></StyledForwardArrow>
       </StyledImageContainer>
    </StyledContainer>
  )
}

export default Carousel
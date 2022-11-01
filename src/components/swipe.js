import React, { useRef } from 'react';
import Arrow from '../images/arrow.svg';
import ScrollIndicator from './scrollIndicator';
import '../style/reuseable.css';
import '../style/carousel.css';

function Carousel(props) {
  const target = useRef();
  const { count, children, showBars = true, showArrows = false, className = ''} = props;
  const [index, setIndex] = React.useState(0)

  const checkNext = () => {
    if(index === count - 1) {
      return index === count
    } else {
      return setIndex(index + 1);
    } 
  }
  // buttons next and previous
  const next = () => {
    checkNext()
    const element = target.current;
    const child = element.children[0].getBoundingClientRect()
    element.scrollBy(child.width * 1, 0)
    

  }

  const checkPrev = () => {
    if(index === 0) {
      return index === 0
    } else {
      return setIndex(index - 1);
    }
  }

  const prev = () => {
    checkPrev();
    const element = target.current;
    const child = element.children[0].getBoundingClientRect()
    element.scrollBy(-child.width * 1, 0)

  }

  return (
    <div className="mainScrollContainer">
      <div className={`scrollContainer ${className}`} ref={target} >
        {showArrows && 
        <>
          {index > 0 && <span className="prev" onClick={prev}><Arrow className="arrow-prev"/></span>}
          {index < (count - 1) && <span className="next-btn" onClick={next}><Arrow className="arrow-next"/></span>}        
        </>
        }         
        {children}
      </div>
      <ScrollIndicator count={count} target={target} showBars={showBars}/> 
    </div>
  )
}

 
export default Carousel;
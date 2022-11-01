import { useEffect, useState } from "react";
import '../style/reuseable.css';
import '../style/carousel.css';
function ScrollIndicator({ count, target, showBars = true }) {

    const [scrollPos, setScrollPos] = useState(0)

    const renderDots = () => {
        const selectedDotValue = (scrollPos * count) / 100;
        return [ ...Array(count).keys() ].map( index => (
          <div key={index} className={`bars ${selectedDotValue >= index && selectedDotValue <= index + 1 ? 'current' : ''}`} />
        ));
      }


    const scrollListener = () => {
        if (!target.current) {                           
            return;
        }
        
        const element = target.current;
        const windowScroll = element.scrollLeft; // Distance of the scrollbar from the leftmost point
        const totalWidth = element.scrollWidth - element.clientWidth; // Total width the scrollbar can traverse
        if (windowScroll === 0) {
            return setScrollPos(0);
        }
        
        if (windowScroll > totalWidth) {
            return setScrollPos(100);
        }
         
        setScrollPos((windowScroll / totalWidth) * 100);
    }

    useEffect(() => {
        let targetCurrent = null;

        if (target.current) {
            targetCurrent = target.current;
            targetCurrent.addEventListener('scroll', scrollListener);
        }

        return () => {
          if (targetCurrent) targetCurrent.removeEventListener('scroll', scrollListener);
        }
      });

  return (
    <div className="flex centerH full-width ">
        {showBars && renderDots()}
    </div>
  );
}


export default ScrollIndicator;
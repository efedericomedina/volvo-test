import { useEffect, useState } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import useWindowSize from "../hooks/useWindowSize";
import CustomNavigationButtons from "./CustomNavigationButtons";

const CustomCarousel = ({ children }) => {
  const [showDotButtons, setShowDotButtons] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    // mobile and tablet screenn size
    if (!!width && width <= 1023) {
      setShowDotButtons(true);
    } else {
      setShowDotButtons(false);
    }
  }, [width, showDotButtons]);

  const responsive = {
    superDesktop: {
      breakpoint: { max: 3000, min: 1600 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1599, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1023, min: 480 },
      items: 2,
      partialVisibilityGutter: 80,
    },
    mobile: {
      breakpoint: { max: 479, min: 0 },
      items: 1,
      partialVisibilityGutter: 80,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      arrows={false}
      additionalTransfrom={0}
      itemClass={"react-carousel-item"}
      minimumTouchDrag={80}
      partialVisible
      ssr // means to render carousel on server-side.
      autoPlay={false}
      showDots={showDotButtons}
      containerClass="container-padding-bottom"
      dotListClass="custom-dot-list-style"
      renderButtonGroupOutside
      customButtonGroup={!showDotButtons ? <CustomNavigationButtons /> : null}
    >
      {children}
    </Carousel>
  );
};

export default CustomCarousel;

import React, { useState, Children, useEffect } from "react";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carouselnew-item" style={{ width: width }}>
      {children}
    </div>
  );
};
const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    console.log(newIndex + 1);
    if (newIndex < 0) {
      newIndex = Children.count(children) - 1;
    } else if (newIndex >= Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 5000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });
  return (
    <div className="carouselnew">
      <div className="indicatorsnew ">
        <div className="row pb-px-50 justify-content-end align-items-end">
          <div className="col-12 col-md-6">
            <h2
              className="display-2 line-top wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              Helping healthcare practices <strong>thrive</strong>
            </h2>
          </div>
          <div
            className="col-12 col-md-6 carousel-controls wow fadeInUp"
            style={{ visibility: "visible", animationName: "fadeInUp" }}
          >
            {" "}
            <button
              className="btn btn-primary btn-circle btn-md btn-circle-prev"
              type="button"
              data-bs-target="#carouselCustomerStories"
              data-bs-slide="prev"
              onClick={() => {
                updateIndex(activeIndex - 1);
              }}
            >
              {" "}
              <span className="visually-hidden">Previous</span>{" "}
            </button>{" "}
            <button
              className="btn btn-primary btn-circle btn-md btn-circle-next"
              type="button"
              data-bs-target="#carouselCustomerStories"
              data-bs-slide="next"
              onClick={() => {
                updateIndex(activeIndex + 1);
              }}
            >
              {" "}
              <span className="visually-hidden">Next</span>{" "}
            </button>
            <ul className="visually-hidden carousel-indicators">
              <li
                data-bs-target="#carouselCustomerStories"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
              ></li>
              <li
                data-bs-target="#carouselCustomerStories"
                data-bs-slide-to="1"
              ></li>
              <li
                data-bs-target="#carouselCustomerStories"
                data-bs-slide-to="2"
              ></li>
              <li
                data-bs-target="#carouselCustomerStories"
                data-bs-slide-to="3"
              ></li>
              <li
                data-bs-target="#carouselCustomerStories"
                data-bs-slide-to="4"
              ></li>
              <li
                data-bs-target="#carouselCustomerStories"
                data-bs-slide-to="5"
              ></li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
    </div>
  );
};
export default Carousel;

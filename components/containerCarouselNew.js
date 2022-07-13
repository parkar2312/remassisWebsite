import { useState } from "react";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "react-feather";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function App() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <ArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <ArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 4,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="App">
      <Slider {...settings}>
        <div>
          <div
            className="card slick-slide slick-current slick-active slick-center"
            style={{ width: " 305px" }}
            tabindex="0"
            data-slick-index="0"
            aria-hidden="false"
          >
            <div className="card-body">
              {" "}
              <span className="card-number">1</span>
              <h4 className="card-title">
                Rank higher in Google results, get found by more patients
              </h4>
              <p className="card-text">
                Achieve new patient growth with a dominant SEO strategy and an
                informative, service-focused website.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            className="card slick-slide slick-cloned"
            style={{ width: " 305px" }}
            tabindex="-1"
            data-slick-index="9"
            id=""
            aria-hidden="true"
          >
            <div className="card-body">
              {" "}
              <span className="card-number">2</span>
              <h4 className="card-title">
                Create an influential online impression
              </h4>
              <p className="card-text">
                Reviews are the #1 online resource for patients deciding on a
                provider. Practices that can continuously generate new reviews
                win new patients.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            className="card slick-slide slick-cloned"
            style={{ width: " 305px" }}
            tabindex="-1"
            data-slick-index="10"
            id=""
            aria-hidden="true"
          >
            <div className="card-body">
              {" "}
              <span className="card-number">3</span>
              <h4 className="card-title">
                Convert more online visitors to patients
              </h4>
              <p className="card-text">
                Every visitor to your practice is a potential visitor to your
                office. Lead the way by giving patients easy ways to book an
                appointment.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            className="card slick-slide slick-cloned"
            style={{ width: " 305px" }}
            tabindex="-1"
            data-slick-index="11"
            id=""
            aria-hidden="true"
          >
            <div className="card-body">
              {" "}
              <span className="card-number">4</span>
              <h4 className="card-title">Ditch the waiting room clipboard</h4>
              <p className="card-text">
                Turn tedious paper registration into an easier, online, anytime
                experience. Convenient for patients, time-saving for staff.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            className="card slick-slide slick-cloned slick-center"
            style={{ width: " 305px" }}
            tabindex="-1"
            data-slick-index="12"
            id=""
            aria-hidden="true"
          >
            <div className="card-body">
              {" "}
              <span className="card-number">5</span>
              <h4 className="card-title">
                Boost your presence with online advertising
              </h4>
              <p className="card-text">
                Master your market to increase patient volume and generate
                higher advertising ROI on Google and Facebook.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            className="card slick-slide slick-cloned"
            style={{ width: " 305px" }}
            tabindex="-1"
            data-slick-index="13"
            id=""
            aria-hidden="true"
          >
            <div className="card-body">
              {" "}
              <span className="card-number">6</span>
              <h4 className="card-title">
                Streamline patient communication with text messaging
              </h4>
              <p className="card-text">
                Meet growing patient demand, boost engagement, and cut down on
                time-consuming phone work.
              </p>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div
            className="card slick-slide slick-cloned"
            style={{ width: " 305px" }}
            tabindex="-1"
            data-slick-index="14"
            id=""
            aria-hidden="true"
          >
            <div className="card-body">
              {" "}
              <span className="card-number">7</span>
              <h4 className="card-title">
                Stay connected on your time via our mobile app
              </h4>
              <p className="card-text">
                Manage your day easily, anywhere, from a single inbox. See and
                respond to appointment requests, patient reviews, and messages.
              </p>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div
            className="card slick-slide slick-cloned"
            style={{ width: " 305px" }}
            tabindex="-1"
            data-slick-index="15"
            id=""
            aria-hidden="true"
          >
            <div className="card-body">
              {" "}
              <span className="card-number">8</span>
              <h4 className="card-title">Get patient payments faster</h4>
              <p className="card-text">
                Our easy digital payment option sets up your practice for a
                higher collection rate and greater monthly revenue.
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default App;

import React from "react";
import App from "./containerCarouselNew";

function ContainerPages2() {
  return (
    <div
      className="carousel-features card-group wow fadeInUp slick-initialized slick-slider"
      style={{ visibility: "visible", animationName: "fadeInUp" }}
    >
      <App />
      {/* <div className="slick-list draggable" style={{ padding: " 0px 50px" }}>
        <div
          className="slick-track"
          style={{
            opacity: "1",
            width: "6340px",
            transform: "translate3d(-951px, 0px, 0px)",
          }}
        >
          <div
            className="card slick-slide slick-cloned"
            style={{ width: " 305px" }}
            tabindex="-1"
            data-slick-index="-4"
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
          <div
            className="card slick-slide slick-cloned"
            style={{ width: " 305px" }}
            tabindex="-1"
            data-slick-index="-3"
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
          <div
            className="card slick-slide slick-cloned"
            style={{ width: " 305px" }}
            tabindex="-1"
            data-slick-index="-2"
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
          <div
            className="card slick-slide slick-cloned slick-active"
            style={{ width: " 305px" }}
            tabindex="-1"
            data-slick-index="-1"
            id=""
            aria-hidden="false"
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
          <div
            className="card slick-slide slick-active"
            style={{ width: " 305px" }}
            tabindex="0"
            data-slick-index="1"
            aria-hidden="false"
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
          <div
            className="card slick-slide"
            style={{ width: " 305px" }}
            tabindex="0"
            data-slick-index="2"
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
          <div
            className="card slick-slide"
            style={{ width: " 305px" }}
            tabindex="-1"
            data-slick-index="3"
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
          <div
            className="card slick-slide"
            style={{ width: " 305px" }}
            tabindex="-1"
            data-slick-index="4"
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
          <div
            className="card slick-slide"
            style={{ width: " 305px" }}
            tabindex="-1"
            data-slick-index="5"
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
          <div
            className="card slick-slide"
            style={{ width: " 305px" }}
            tabindex="-1"
            data-slick-index="6"
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
          <div
            className="card slick-slide"
            style={{ width: " 305px" }}
            tabindex="-1"
            data-slick-index="7"
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
          <div
            className="card slick-slide slick-cloned"
            style={{ width: " 305px" }}
            tabindex="-1"
            data-slick-index="8"
            id=""
            aria-hidden="true"
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
      </div> */}
    </div>
  );
}

export default ContainerPages2;

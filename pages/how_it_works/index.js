import React from "react";
import ContainerFooter from "../../components/containerFooter";
import ContainerNavbar from "../webclone/containernavbar";

function How_It_Works() {
  return (
    <div>
      <ContainerNavbar />
      <div className="container">
        <section className="row justify-content-center hero-section">
          <div className="col-12 col-md-10 text-center ">
            <h1>
              Bringing <strong>technology</strong> and <br />
              <strong>convenience</strong> to the entire patient <br />
              experience.
            </h1>
            <p>
              Start by seeing how you compare to other practices in your local
              area and specialty.
            </p>{" "}
            <button
              type="button"
              className="btn btn-primary wow fadeInUp text-nowrap"
              data-bs-toggle="modal"
              data-bs-target="#modalScanner"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              {" "}
              See my results{" "}
            </button>
          </div>
        </section>
        <div className="howitworks-nav">
          <ul id="howitworks-nav">
            <li className="active">
              <a className="howitworks-nav-item" data-target="1">
                <noscript>
                  <img src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/howitworks/icon-discover.svg" />
                </noscript>
                <img
                  className=" lazyloaded"
                  src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/howitworks/icon-discover.svg"
                  data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/howitworks/icon-discover.svg"
                />
                Discover
              </a>
            </li>
            <li>
              <a className="howitworks-nav-item" data-target="2">
                <noscript>
                  <img src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/howitworks/icon-schedule.svg" />
                </noscript>
                <img
                  className=" lazyloaded"
                  src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/howitworks/icon-schedule.svg"
                  data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/howitworks/icon-schedule.svg"
                />
                Schedule
              </a>
            </li>
            <li>
              <a className="howitworks-nav-item" data-target="3">
                <noscript>
                  <img src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/howitworks/icon-visit.svg" />
                </noscript>
                <img
                  className=" lazyloaded"
                  src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/howitworks/icon-visit.svg"
                  data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/howitworks/icon-visit.svg"
                />
                Visit
              </a>
            </li>
            <li>
              <a className="howitworks-nav-item" data-target="4">
                <noscript>
                  <img src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/howitworks/icon-advocate.svg" />
                </noscript>
                <img
                  className=" lazyloaded"
                  src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/howitworks/icon-advocate.svg"
                  data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/howitworks/icon-advocate.svg"
                />
                Advocate
              </a>
            </li>
            <li>
              <a className="howitworks-nav-item" data-target="5">
                <noscript>
                  <img src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/howitworks/icon-return.svg" />
                </noscript>
                <img
                  className=" lazyloaded"
                  src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/howitworks/icon-return.svg"
                  data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/howitworks/icon-return.svg"
                />
                Return
              </a>
            </li>
          </ul>
        </div>
        <div className="accordion howitworks-tabs" id="howitworks-tabs">
          <div className="howitworks-tab-image">
            {" "}
            <noscript>
              <img
                src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/howitworks/discover-bg.png"
                className="howitworks-image-bg"
              />
            </noscript>
            {/* <img
              src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/howitworks/discover-bg.png"
              data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/howitworks/discover-bg.png"
              className="howitworks-image-bg lazyloaded"
            />{" "} */}
            <noscript>
              <img
                src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/howitworks/discover-screen.png"
                className="howitworks-image-screen"
              />
            </noscript>
            {/* <img
              src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/howitworks/discover-screen.png"
              data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/howitworks/discover-screen.png"
              className="howitworks-image-screen lazyloaded"
            /> */}
          </div>
          <div
            id="collapseOne"
            aria-labelledby="headingOne"
            data-bs-parent="#howitworks-tabs"
            className="accordion-collapse collapse show howitworks-tab-content"
          >
            <h3 className="heading--md">
              Patients <span>discover</span> your practice
            </h3>
            <p className="paragraph--lg">
              Appear within the top Google results and create a web presence
              that gets you in front of the right patients at the right time.
              Patients discover your practice via:
            </p>
            <ul>
              <li>Higher Google rankings</li>
              <li>Optimized online profiles</li>
              <li>Intuitive mobile-responsive website</li>
              <li>Highly visible ratings and reviews</li>
              <button
                type="button"
                className="btn btn-primary mt-3"
                data-bs-toggle="modal"
                data-bs-target="#modalDemoRequestBody"
              >
                {" "}
                Get a demo{" "}
              </button>
            </ul>{" "}
          </div>
        </div>
        <section className="row justify-content-center quote-section">
          <div className="col-12 text-center">
            <div
              className="wow fadeInUp line-bottom"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <h3 className="display-5 heading--quote">
                “I needed a company to handle my SEO, website, patients to book
                online… just putting it all in one place. It was the best money
                I’ve spent on the business.”
              </h3>
              <p>
                <span>Dr. Nicole Mermet</span>
                <br />
                Dentist / owner, Metropolitan Dental Care
              </p>
            </div>
          </div>
        </section>

        <section className="row justify-content-center my-5 py-5">
          <div className="col-12 col-md-10 text-center">
            <div
              className="wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <h3 className="display-1 line-center">
                Focus on patient care while we grow your practice.
              </h3>
            </div>
            <h2></h2>
          </div>
        </section>
        <section className="row my-5 py-5">
          <div className="col-12 col-md-4">
            <div
              className="wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <h4>More patients</h4>
              <p>
                Attract and retain the right patients for life with an
                attention-grabbing online presence and reputation.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div
              className="wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <h4>Greater convenience</h4>
              <p>
                Digital tools make it easy for providers, practice staff, and
                patients to navigate the healthcare experience.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div
              className="wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <h4>Peace of mind</h4>
              <p>
                The PatientPop platform works around the clock to keep you
                top-of-mind and accessible to prospects and patients, so you
                don’t miss a beat—or a lead.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div
              className="wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <h4>Time saving</h4>
              <p>
                Spend less time on tedious tasks including phone calls, managing
                paperwork, and intake processes to focus on work that matters
                most.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div
              className="wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <h4>Better workflow</h4>
              <p>
                Skip having to juggle multiple systems. Use one platform to
                streamline marketing, front office tasks, and patient
                communication and intake.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div
              className="wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <h4>Market leadership</h4>
              <p>
                Achieve an online presence and reputation that stands out in the
                market and influences decisions.
              </p>
            </div>
          </div>
        </section>
        <div className="container-xxl">
          <div className="row my-5 py-5 justify-content-center">
            <div className="col-12 col-md-10">
              <h2
                className="display-1 wow fadeInUp"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                Discover the only complete <strong>practice growth</strong>{" "}
                platform in healthcare.
              </h2>{" "}
              <button
                type="button"
                className="btn btn-primary wow fadeInUp text-nowrap"
                data-bs-toggle="modal"
                data-bs-target="#modalDemoRequestBody"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                {" "}
                Get a demo{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <ContainerFooter />
    </div>
  );
}

export default How_It_Works;

import React, { useState, useEffect } from "react";
import ContainerNavbar from "../webclone/containernavbar";
import ContainerFooter from "../../components/containerFooter";

const placeholderText = [
  <h2 class="heading--headline" style={{ maxWidth: "890px" }}>
    Aesthetic device company partners with Remassis to aid in marketing and
    patient acquisition efforts.
  </h2>,
  <h2 class="heading--headline" style={{ maxWidth: "890px" }}>
    Practice management vendor partners with Remassis to provide an end-to-end
    solution for online scheduling and patient communication.
  </h2>,
  <h2 class="heading--headline" style={{ maxWidth: "890px" }}>
    National medical supplier integrates Remassis as a technology solution in
    order to differentiate in the marketplace.
  </h2>,
];

function Partners() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = () => {
      setIndex((prevIndex) => {
        if (prevIndex === placeholderText.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      });
    };
    setInterval(timer, 8000);

    //cleanup function in order clear the interval timer
    //when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <ContainerNavbar />
      <div className="page-template page-template-template-default template-default-php page page-id-7076 siteorigin-panels partners">
        <main class="l-container">
          <div class="batch-g batch-g--align-center">
            <div class="batch-c-1-1 batch-c-md-1-1">
              <div class="">
                <div id="pl-7076" class="panel-layout">
                  <div id="pg-7076-0" class="panel-grid panel-has-style">
                    <div
                      class="siteorigin-panels-stretch panel-row-style panel-row-style-for-7076-0"
                      data-stretch-type="full-stretched"
                      style={{
                        marginLeft: "-22.5px",
                        marginRight: "-22.5px",
                        paddingLeft: "0px",
                        paddingRight: "0px",
                        borderLeft: "0px",
                        borderRight: "0px",
                      }}
                      // style="margin-left: -22.5px; margin-right: -22.5px; padding-left: 0px; padding-right: 0px; border-left: 0px; border-right: 0px;"
                    >
                      <div
                        id="pgc-7076-0-0"
                        class="panel-grid-cell"
                        style={{ paddingLeft: "0px", paddingRight: "0px" }}
                      >
                        <div
                          id="panel-7076-0-0-0"
                          class="so-panel widget widget_hero panel-first-child panel-last-child"
                          data-index="0"
                        >
                          <div class="so-widget-hero so-widget-hero-default-d75171398898-7076">
                            <div class="hero-widget w-hero-widget w-hero-widget--has-style">
                              <div class="l-container">
                                <div class="hero-widget--headline">
                                  <h1 class="heading heading--hero">
                                    {" "}
                                    Become a Remassis partner
                                  </h1>
                                </div>
                                <div class="hero-widget--description">
                                  <p class="paragraph--hero"></p>
                                  <p class="paragraph paragraph--base paragraph--light">
                                    Bring convenience, growth, and peace of mind
                                    to your customers through a Remassis
                                    partnership. Join us in providing the best
                                    practice growth solutions for providers
                                    nationwide.
                                  </p>
                                  <a
                                    class="btn btn-primary btn--large btn--next"
                                    href="#partner-with-us"
                                  >
                                    Partner with us
                                  </a>
                                  <br />
                                  <p></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="pg-7076-1" class="panel-grid panel-has-style">
                    <div
                      class="siteorigin-panels-stretch panel-row-style panel-row-style-for-7076-1"
                      data-stretch-type="full"
                      style={{
                        marginLeft: "-22.5px",
                        marginRight: "-22.5px",
                        paddingLeft: "22.5px",
                        paddingRight: "22.5px",
                        borderLeft: "0px",
                        borderRight: "0px",
                      }}
                      // style="margin-left: -22.5px; margin-right: -22.5px; padding-left: 22.5px; padding-right: 22.5px; border-left: 0px; border-right: 0px;"
                    >
                      <div id="pgc-7076-1-0" class="panel-grid-cell">
                        <div
                          id="panel-7076-1-0-0"
                          class="so-panel widget widget_content panel-first-child panel-last-child"
                          data-index="1"
                        >
                          <div class="panel-widget-style panel-widget-style-for-7076-1-0-0">
                            <div class="so-widget-content so-widget-content-default-d75171398898-7076">
                              <div class="w-content-section  align--left malign--center  w-content-section__body ">
                                <h3 class="heading--label">
                                  {" "}
                                  Helping practices thrive
                                </h3>
                                <h2
                                  class="heading--headline"
                                  style={{ maxWidth: "430px" }}
                                >
                                  {" "}
                                  Your growth continues with us
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="pgc-7076-1-1" class="panel-grid-cell">
                        <div
                          id="panel-7076-1-1-0"
                          class="so-panel widget widget_content panel-first-child panel-last-child"
                          data-index="2"
                        >
                          <div class="so-widget-content so-widget-content-default-d75171398898-7076">
                            <div class="w-content-section  align--left malign--center w-content-section__body        ">
                              <div
                                class="w-content-section__body"
                                style={{ maxWidth: "500px" }}
                              >
                                <p class="paragraph paragraph--base">
                                  At Remassis, we partner with the most
                                  innovative names in US healthcare. Our trusted
                                  set of partners serve providers in a diverse
                                  range of specialties and scope. When you join
                                  one of our partner programs, you’ll get
                                  exclusive benefits - including co-marketing
                                  support and customized solutions - to help
                                  transform your business for the better and
                                  those of the healthcare professionals you work
                                  with.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="pg-7076-2" class="panel-grid panel-has-style">
                    <div
                      class="panel-offset siteorigin-panels-stretch panel-row-style panel-row-style-for-7076-2"
                      id="partner-success-stories"
                      style={{
                        marginLeft: "-22.5px",
                        marginRight: "-22.5px",
                        paddingLeft: "0px",
                        paddingRight: "0px",
                        borderLeft: "0px",
                        borderRight: "0px",
                      }}
                      data-stretch-type="full-stretched"
                      // style="margin-left: -22.5px; margin-right: -22.5px; padding-left: 0px; padding-right: 0px; border-left: 0px; border-right: 0px;"
                    >
                      <div
                        id="pgc-7076-2-0"
                        class="panel-grid-cell panel-grid-cell-empty"
                      ></div>
                      <div id="pgc-7076-2-1" class="panel-grid-cell">
                        {/* <div
                          id="panel-7076-2-1-0"
                          class="so-panel widget widget_content panel-first-child"
                          data-index="3"
                        >
                          <div
                            class="partner-success panel-widget-style panel-widget-style-for-7076-2-1-0"
                            style={{ display: "block", opacity: " 0.0954915" }}
                          >
                            <div class="so-widget-content so-widget-content-default-d75171398898-7076">
                              <div class="w-content-section align--left malign--left w-content-section__body ">
                                <h3 class="heading--label"> Partner success</h3>
                                <h2
                                  class="heading--headline"
                                  style={{ maxWidth: "890px" }}
                                >
                                  {" "}
                                  Aesthetic device company partners with
                                  Remassis to aid in marketing and patient
                                  acquisition efforts.
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}
                        <div
                          id="panel-7076-2-1-1"
                          class="so-panel widget widget_content"
                          data-index="4"
                        >
                          <div
                            class="partner-success panel-widget-style panel-widget-style-for-7076-2-1-1"
                            style={{ display: "block" }}
                          >
                            <div class="so-widget-content so-widget-content-default-d75171398898-7076">
                              <div class="w-content-section align--left malign--left w-content-section__body">
                                <h3 class="heading--label"> Partner success</h3>
                                <h2
                                  class="heading--headline"
                                  style={{ maxWidth: "890px" }}
                                >
                                  {placeholderText[index]}
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* <div
                          id="panel-7076-2-1-2"
                          class="so-panel widget widget_content"
                          data-index="5"
                        >
                          <div
                            class="partner-success panel-widget-style panel-widget-style-for-7076-2-1-2"
                            style={{ display: "none" }}
                          >
                            <div class="so-widget-content so-widget-content-default-d75171398898-7076">
                              <div class="w-content-section align--left    malign--left        w-content-section__body        ">
                                <h3 class="heading--label"> Partner success</h3>
                                <h2
                                  class="heading--headline"
                                  style={{ maxWidth: "890px" }}
                                >
                                  National medical supplier integrates Remassis
                                  as a technology solution in order to
                                  differentiate in the marketplace.
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div> */}
                        <div
                          id="panel-7076-2-1-3"
                          class="so-panel widget widget_patientpop-image-widget panel-last-child"
                          data-index="6"
                        >
                          <div class="partner-graph panel-widget-style panel-widget-style-for-7076-2-1-3 animated">
                            <div class="so-widget-patientpop-image-widget so-widget-patientpop-image-widget-default-d75171398898-7076">
                              <img
                                src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/partnerships-graph-1.png"
                                loading="lazy"
                                class="wow animated fadein"
                                id=""
                                data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/partnerships-graph-1.png"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="pg-7076-3" class="panel-grid panel-has-style">
                    <div
                      class="panel-offset siteorigin-panels-stretch panel-row-style panel-row-style-for-7076-3"
                      data-stretch-type="full-stretched"
                      style={{
                        marginLeft: "-22.5px",
                        marginRight: "-22.5px",
                        paddingLeft: "0px",
                        paddingRight: "0px",
                        borderLeft: "0px",
                        borderRight: "0px",
                      }}
                      // style="margin-left: -22.5px; margin-right: -22.5px; padding-left: 0px; padding-right: 0px; border-left: 0px; border-right: 0px;"
                    >
                      <div
                        id="pgc-7076-3-0"
                        class="panel-grid-cell panel-grid-cell-empty"
                      ></div>
                      <div id="pgc-7076-3-1" class="panel-grid-cell">
                        <div
                          id="panel-7076-3-1-0"
                          class="so-panel widget widget_content panel-first-child panel-last-child"
                          data-index="7"
                        >
                          <div class="so-widget-content so-widget-content-default-d75171398898-7076">
                            <div class="w-content-section align--left malign--center  w-content-section__body ">
                              <h2 class="heading--headline">
                                {" "}
                                Partner programs
                              </h2>
                              <div class="w-content-section__body">
                                <p class="paragraph paragraph--base">
                                  Remassis has vetted programs that work for
                                  you.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="pg-7076-4" class="panel-grid panel-has-style">
                    <div
                      class="panel-offset partner-programs siteorigin-panels-stretch panel-row-style panel-row-style-for-7076-4"
                      data-stretch-type="full-stretched"
                      style={{
                        marginLeft: "-22.5px",
                        marginRight: "-22.5px",
                        paddingLeft: "0px",
                        paddingRight: "0px",
                        borderLeft: "0px",
                        borderRight: "0px",
                      }}
                      // style="margin-left: -22.5px; margin-right: -22.5px; padding-left: 0px; padding-right: 0px; border-left: 0px; border-right: 0px;"
                    >
                      <div
                        id="pgc-7076-4-0"
                        class="panel-grid-cell panel-grid-cell-empty"
                      ></div>
                      <div id="pgc-7076-4-1" class="panel-grid-cell">
                        <div
                          id="panel-7076-4-1-0"
                          class="so-panel widget widget_siteorigin-panels-builder panel-first-child panel-last-child"
                          data-index="8"
                        >
                          <div id="pl-w5d138d7502f1e" class="panel-layout">
                            <div
                              id="pg-w5d138d7502f1e-0"
                              class="panel-grid panel-no-style"
                            >
                              <div
                                id="pgc-w5d138d7502f1e-0-0"
                                class="panel-grid-cell"
                              >
                                <div
                                  id="panel-w5d138d7502f1e-0-0-0"
                                  class="so-panel widget widget_patientpop-image-widget panel-first-child"
                                  data-index="0"
                                >
                                  <div class="panel-widget-style panel-widget-style-for-w5d138d7502f1e-0-0-0">
                                    <div class="so-widget-patientpop-image-widget so-widget-patientpop-image-widget-default-d75171398898">
                                      <img
                                        src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/handshake.png"
                                        class=""
                                        id=""
                                        data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/handshake.png"
                                        alt=""
                                        width="131"
                                        height="101"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  id="panel-w5d138d7502f1e-0-0-1"
                                  class="so-panel widget widget_content panel-last-child"
                                  data-index="1"
                                  style={{ width: "18rem", marginLeft: "1rem" }}
                                >
                                  <div class="panel-widget-style panel-widget-style-for-w5d138d7502f1e-0-0-1">
                                    <div class="so-widget-content so-widget-content-default-d75171398898">
                                      <div class="w-content-section  align--left  malign--center  w-content-section__body">
                                        <h2 class="heading--headline">
                                          {" "}
                                          Affiliate partner
                                        </h2>
                                        <div class="w-content-section__body">
                                          <p class="paragraph paragraph--base">
                                            You refer leads while our sales team
                                            manages the referral source. Simply
                                            endorse Remassis to get instant
                                            perks.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                id="pgc-w5d138d7502f1e-0-1"
                                class="panel-grid-cell"
                              >
                                <div
                                  id="panel-w5d138d7502f1e-0-1-0"
                                  class="so-panel widget widget_patientpop-image-widget panel-first-child"
                                  data-index="2"
                                >
                                  <div class="panel-widget-style panel-widget-style-for-w5d138d7502f1e-0-1-0">
                                    <div class="so-widget-patientpop-image-widget so-widget-patientpop-image-widget-default-d75171398898">
                                      <img
                                        src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/wallet-icon-new.png"
                                        class=""
                                        id=""
                                        data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/wallet-icon-new.png"
                                        alt=""
                                        width="131"
                                        height="101"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  id="panel-w5d138d7502f1e-0-1-1"
                                  class="so-panel widget widget_content panel-last-child"
                                  data-index="3"
                                  style={{ width: "18rem" }}
                                >
                                  <div class="panel-widget-style panel-widget-style-for-w5d138d7502f1e-0-1-1">
                                    <div class="so-widget-content so-widget-content-default-d75171398898">
                                      <div class="w-content-section align--left malign--center w-content-section__body        ">
                                        <h2 class="heading--headline">
                                          {" "}
                                          Channel partner
                                        </h2>
                                        <div class="w-content-section__body">
                                          <p class="paragraph paragraph--base">
                                            You offer potential leads, while our
                                            team manages the referral source.
                                            Collaborate with our expert
                                            marketing, sales, and operations
                                            teams for mutual wins.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                id="pgc-w5d138d7502f1e-0-2"
                                class="panel-grid-cell"
                              >
                                <div
                                  id="panel-w5d138d7502f1e-0-2-0"
                                  class="so-panel widget widget_patientpop-image-widget panel-first-child"
                                  data-index="4"
                                >
                                  <div class="panel-widget-style panel-widget-style-for-w5d138d7502f1e-0-2-0">
                                    <div class="so-widget-patientpop-image-widget so-widget-patientpop-image-widget-default-d75171398898">
                                      <img
                                        src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/referral-icon.png"
                                        class=""
                                        id=""
                                        data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/referral-icon.png"
                                        alt=""
                                        width="131"
                                        height="101"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  id="panel-w5d138d7502f1e-0-2-1"
                                  class="so-panel widget widget_content panel-last-child"
                                  data-index="5"
                                  style={{ width: "18rem" }}
                                >
                                  <div class="panel-widget-style panel-widget-style-for-w5d138d7502f1e-0-2-1">
                                    <div class="so-widget-content so-widget-content-default-d75171398898">
                                      <div class="w-content-section align--left malign--center w-content-section__body ">
                                        <h2 class="heading--headline">
                                          {" "}
                                          Strategic partner
                                        </h2>
                                        <div class="w-content-section__body">
                                          <p class="paragraph paragraph--base">
                                            You are a company with similar goals
                                            to Remassis. You may be a product,
                                            organization, or EMR/PMS looking for
                                            a long-term partnership opportunity.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="pg-7076-5" class="panel-grid panel-has-style">
                    <div
                      class="panel-offset siteorigin-panels-stretch panel-row-style panel-row-style-for-7076-5"
                      data-stretch-type="full-stretched"
                      style={{
                        marginLeft: "-22.5px",
                        marginRight: "-22.5px",
                        paddingLeft: "0px",
                        paddingRight: "0px",
                        borderLeft: "0px",
                        borderRight: "0px",
                      }}
                      // style="margin-left: -22.5px; margin-right: -22.5px; padding-left: 0px; padding-right: 0px; border-left: 0px; border-right: 0px;"
                    >
                      <div id="pgc-7076-5-0" class="panel-grid-cell">
                        <div class="relative panel-cell-style panel-cell-style-for-7076-5-0">
                          <div
                            id="panel-7076-5-0-0"
                            class="so-panel widget widget_content panel-first-child"
                            data-index="9"
                          >
                            <div class="panel-widget-style panel-widget-style-for-7076-5-0-0">
                              <div class="so-widget-content so-widget-content-default-d75171398898-7076">
                                <div class="w-content-section align--left  malign--center w-content-section__body ">
                                  <h2 class="heading--headline">
                                    {" "}
                                    What's included
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            id="panel-7076-5-0-1"
                            class="so-panel widget widget_content panel-last-child"
                            data-index="10"
                          >
                            <div class="panel-widget-style panel-widget-style-for-7076-5-0-1">
                              <div class="so-widget-content so-widget-content-default-d75171398898-7076">
                                <div class="w-content-section align--left malign--center w-content-section__body">
                                  <div class="w-content-section__body">
                                    <div class="heading heading--subpoint">
                                      Access to Partner Hub
                                    </div>
                                    <p class="paragraph paragraph--base">
                                      Your one-stop-shop for all partnership
                                      tools, resources and info you’ll need.
                                    </p>
                                    <div class="heading heading--subpoint">
                                      Co-branding &amp; support
                                    </div>
                                    <p class="paragraph paragraph--base">
                                      Our marketing campaigns offer high
                                      visibility in a crowded market. Our
                                      operations create a streamlined process.
                                    </p>
                                    <div class="heading heading--subpoint">
                                      Customized tools just for you
                                    </div>
                                    <p class="paragraph paragraph--base">
                                      Have an urgent lead? Ready to book a quick
                                      demo? We’ve got you covered.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="pgc-7076-5-1" class="panel-grid-cell">
                        <div class="relative panel-cell-style panel-cell-style-for-7076-5-1">
                          <div
                            id="panel-7076-5-1-0"
                            class="so-panel widget widget_patientpop-image-widget panel-first-child panel-last-child"
                            data-index="11"
                          >
                            <div class="panel-widget-style panel-widget-style-for-7076-5-1-0">
                              <div class="so-widget-patientpop-image-widget so-widget-patientpop-image-widget-default-d75171398898-7076">
                                <img
                                  src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/affiliate-partner-hub.png"
                                  class=""
                                  id=""
                                  data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/affiliate-partner-hub.png"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="pg-7076-6" class="panel-grid panel-has-style">
                    <div class="partner-process panel-row-style panel-row-style-for-7076-6">
                      <div id="pgc-7076-6-0" class="panel-grid-cell">
                        <div
                          id="panel-7076-6-0-0"
                          class="so-panel widget widget_content panel-first-child"
                          data-index="12"
                        >
                          <div class="so-widget-content so-widget-content-default-d75171398898-7076">
                            <div class="w-content-section align--center malign--center w-content-section__body">
                              <h2 class="heading--headline">
                                {" "}
                                Partnership process
                              </h2>
                              <div
                                class="w-content-section__body"
                                style={{ maxWidth: "650px" }}
                              >
                                <p class="paragraph paragraph--base">
                                  We give our partners the same time and
                                  attention we give our practices. With Remassis
                                  onboarding, your business needs are
                                  top-of-mind.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="panel-7076-6-0-1"
                          class="so-panel widget widget_patientpop-image-widget"
                          data-index="13"
                        >
                          <div class="partner-process-image partner-process-image-1 panel-widget-style panel-widget-style-for-7076-6-0-1">
                            <div class="so-widget-patientpop-image-widget so-widget-patientpop-image-widget-default-d75171398898-7076">
                              <img
                                src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/partnerprocess-01.png"
                                loading="lazy"
                                class="no-scroll-lazy "
                                id=""
                                data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/partnerprocess-01.png"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          id="panel-7076-6-0-2"
                          class="so-panel widget widget_content"
                          data-index="14"
                        >
                          <div class="partner-process-text partner-process-text-1 panel-widget-style panel-widget-style-for-7076-6-0-2">
                            <div class="so-widget-content so-widget-content-default-d75171398898-7076">
                              <div class="w-content-section align--center malign--center w-content-section__body ">
                                <div class="w-content-section__body">
                                  <div class="partner-process-order">1</div>
                                  <div class="heading heading--4">
                                    Partnership formation
                                  </div>
                                  <p class="paragraph paragraph--small">
                                    We’ll work together to establish mutual
                                    goals and outcomes.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="panel-7076-6-0-3"
                          class="so-panel widget widget_patientpop-image-widget"
                          data-index="15"
                        >
                          <div class="partner-process-image partner-process-image-2 panel-widget-style panel-widget-style-for-7076-6-0-3">
                            <div class="so-widget-patientpop-image-widget so-widget-patientpop-image-widget-default-d75171398898-7076">
                              <img
                                src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/partnerprocess-02.png"
                                loading="lazy"
                                class="no-scroll-lazy "
                                id=""
                                data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/partnerprocess-02.png"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          id="panel-7076-6-0-4"
                          class="so-panel widget widget_content"
                          data-index="16"
                        >
                          <div class="partner-process-text partner-process-text-2 panel-widget-style panel-widget-style-for-7076-6-0-4">
                            <div class="so-widget-content so-widget-content-default-d75171398898-7076">
                              <div class="w-content-section align--center malign--center w-content-section__body ">
                                <div class="w-content-section__body">
                                  <div class="partner-process-order">2</div>
                                  <div class="heading heading--4">
                                    Partner onboarding
                                  </div>
                                  <p class="paragraph paragraph--small">
                                    Our dedicated partner team will empower you
                                    to become a happy contributor.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="panel-7076-6-0-5"
                          class="so-panel widget widget_patientpop-image-widget"
                          data-index="17"
                        >
                          <div class="partner-process-image partner-process-image-3 panel-widget-style panel-widget-style-for-7076-6-0-5">
                            <div class="so-widget-patientpop-image-widget so-widget-patientpop-image-widget-default-d75171398898-7076">
                              <img
                                src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/partnerprocess-03.png"
                                loading="lazy"
                                class="no-scroll-lazy "
                                id=""
                                data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/partnerprocess-03.png"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          id="panel-7076-6-0-6"
                          class="so-panel widget widget_content"
                          data-index="18"
                        >
                          <div class="partner-process-text partner-process-text-3 panel-widget-style panel-widget-style-for-7076-6-0-6">
                            <div class="so-widget-content so-widget-content-default-d75171398898-7076">
                              <div class="w-content-section align--center malign--center w-content-section__body">
                                <div class="w-content-section__body">
                                  <div class="partner-process-order">3</div>
                                  <div class="heading heading--4">
                                    Launch to your teams
                                  </div>
                                  <p class="paragraph paragraph--small">
                                    We enable your teams with Remassis training
                                    and resources.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="panel-7076-6-0-7"
                          class="so-panel widget widget_patientpop-image-widget"
                          data-index="19"
                        >
                          <div class="partner-process-image partner-process-image-4 panel-widget-style panel-widget-style-for-7076-6-0-7">
                            <div class="so-widget-patientpop-image-widget so-widget-patientpop-image-widget-default-d75171398898-7076">
                              <img
                                src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/partnerprocess-04.png"
                                loading="lazy"
                                class="no-scroll-lazy "
                                id=""
                                data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/partnerprocess-04.png"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          id="panel-7076-6-0-8"
                          class="so-panel widget widget_content panel-last-child"
                          data-index="20"
                        >
                          <div class="partner-process-text partner-process-text-4 panel-widget-style panel-widget-style-for-7076-6-0-8">
                            <div class="so-widget-content so-widget-content-default-d75171398898-7076">
                              <div class="w-content-section align--center malign--center w-content-section__body">
                                <div class="w-content-section__body">
                                  <div class="partner-process-order">4</div>
                                  <div class="heading heading--4">
                                    Ongoing optimization
                                  </div>
                                  <p class="paragraph paragraph--small">
                                    Ongoing partner and marketing updates
                                    further our commitment to you.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="pg-7076-7" class="panel-grid panel-has-style">
                    <div
                      class="siteorigin-panels-stretch panel-row-style panel-row-style-for-7076-7"
                      data-stretch-type="full"
                      style={{
                        marginLeft: "-22.5px",
                        marginRight: "-22.5px",
                        paddingLeft: "22.5px",
                        paddingRight: "22.5px",
                        borderLeft: "0px",
                        borderRight: "0px",
                      }}
                      // style="margin-left: -22.5px; margin-right: -22.5px; padding-left: 22.5px; padding-right: 22.5px; border-left: 0px; border-right: 0px;"
                    >
                      <div id="pgc-7076-7-0" class="panel-grid-cell">
                        <div
                          id="panel-7076-7-0-0"
                          class="so-panel widget widget_content panel-first-child panel-last-child"
                          data-index="21"
                        >
                          <div class="panel-widget-style panel-widget-style-for-7076-7-0-0">
                            <div class="so-widget-content so-widget-content-default-d75171398898-7076">
                              <div class="w-content-section align--left malign--center w-content-section__body">
                                <h3 class="heading--label"> Testimonials</h3>
                                <h2
                                  class="heading--headline"
                                  style={{ maxWidth: "450px" }}
                                >
                                  {" "}
                                  What Remassis partners say
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="pgc-7076-7-1" class="panel-grid-cell">
                        <div
                          id="panel-7076-7-1-0"
                          class="so-panel widget widget_content panel-first-child panel-last-child"
                          data-index="22"
                        >
                          <div class="so-widget-content so-widget-content-default-d75171398898-7076">
                            <div class="w-content-section align--left malign--center w-content-section__body ">
                              <div
                                class="w-content-section__body"
                                style={{ maxWidth: "540px" }}
                              >
                                <div class="heading heading--4 dark">
                                  Los Angeles County Medical Association
                                </div>
                                <div class="paragraph paragraph--base paragraph--green">
                                  CEO, Gustavo Friederichsen
                                </div>
                                <p class="paragraph paragraph--base">
                                  “Our partnership with Remassis is ideal for
                                  our members because our solution is designed
                                  to help practices grow and improve the bottom
                                  line. It’s a technology that changes the way
                                  physicians run and promote their businesses.”
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="pg-7076-8" class="panel-grid panel-has-style">
                    <div
                      class="siteorigin-panels-stretch panel-row-style panel-row-style-for-7076-8"
                      id="partner-logos-d"
                      data-stretch-type="full"
                      style={{
                        marginLeft: "-22.5px",
                        marginRight: "-22.5px",
                        paddingLeft: "22.5px",
                        paddingRight: "22.5px",
                        borderLeft: "0px",
                        borderRight: "0px",
                      }}
                      // style="margin-left: -22.5px; margin-right: -22.5px; padding-left: 22.5px; padding-right: 22.5px; border-left: 0px; border-right: 0px;"
                    >
                      <div id="pgc-7076-8-0" class="panel-grid-cell">
                        <div
                          id="panel-7076-8-0-0"
                          class="so-panel widget widget_patientpop-image-widget panel-first-child"
                          data-index="23"
                        >
                          <div class="panel-widget-style panel-widget-style-for-7076-8-0-0">
                            <div class="so-widget-patientpop-image-widget so-widget-patientpop-image-widget-default-d75171398898-7076">
                              <img
                                src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-02.png"
                                loading="lazy"
                                class="no-scroll-lazy "
                                id=""
                                data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-02.png"
                                alt=""
                                width="301"
                                height="301"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          id="panel-7076-8-0-1"
                          class="so-panel widget widget_patientpop-image-widget"
                          data-index="24"
                        >
                          <div class="so-widget-patientpop-image-widget so-widget-patientpop-image-widget-default-d75171398898-7076">
                            <img
                              src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-10.png"
                              loading="lazy"
                              class="no-scroll-lazy "
                              id=""
                              data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-10.png"
                              alt=""
                              width="301"
                              height="301"
                            />
                          </div>
                        </div>
                        <div
                          id="panel-7076-8-0-2"
                          class="so-panel widget widget_patientpop-image-widget"
                          data-index="25"
                        >
                          <div class="so-widget-patientpop-image-widget so-widget-patientpop-image-widget-default-d75171398898-7076">
                            <img
                              src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-08.png"
                              loading="lazy"
                              class="no-scroll-lazy "
                              id=""
                              data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-08.png"
                              alt=""
                              width="301"
                              height="301"
                            />
                          </div>
                        </div>
                        <div
                          id="panel-7076-8-0-3"
                          class="so-panel widget widget_patientpop-image-widget panel-last-child"
                          data-index="26"
                        >
                          <div class="panel-widget-style panel-widget-style-for-7076-8-0-3">
                            <div class="so-widget-patientpop-image-widget so-widget-patientpop-image-widget-default-d75171398898-7076">
                              <img
                                src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/MMS-Logo.png"
                                loading="lazy"
                                class="no-scroll-lazy "
                                id=""
                                data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/MMS-Logo.png"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="pgc-7076-8-1" class="panel-grid-cell">
                        <div
                          id="panel-7076-8-1-0"
                          class="so-panel widget widget_patientpop-image-widget panel-first-child"
                          data-index="27"
                        >
                          <div class="so-widget-patientpop-image-widget so-widget-patientpop-image-widget-default-d75171398898-7076">
                            <img
                              src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-06.png"
                              loading="lazy"
                              class="no-scroll-lazy "
                              id=""
                              data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-06.png"
                              alt=""
                              width="301"
                              height="301"
                            />
                          </div>
                        </div>
                        <div
                          id="panel-7076-8-1-1"
                          class="so-panel widget widget_patientpop-image-widget"
                          data-index="28"
                        >
                          <div class="so-widget-patientpop-image-widget so-widget-patientpop-image-widget-default-d75171398898-7076">
                            <img
                              src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-03.png"
                              loading="lazy"
                              class="no-scroll-lazy "
                              id=""
                              data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-03.png"
                              alt=""
                              width="301"
                              height="301"
                            />
                          </div>
                        </div>
                        <div
                          id="panel-7076-8-1-2"
                          class="so-panel widget widget_patientpop-image-widget"
                          data-index="29"
                        >
                          <div class="so-widget-patientpop-image-widget so-widget-patientpop-image-widget-default-d75171398898-7076">
                            <img
                              src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-04.png"
                              loading="lazy"
                              class="no-scroll-lazy "
                              id=""
                              data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-04.png"
                              alt=""
                              width="301"
                              height="301"
                            />
                          </div>
                        </div>
                        <div
                          id="panel-7076-8-1-3"
                          class="so-panel widget widget_patientpop-image-widget panel-last-child"
                          data-index="30"
                        >
                          <div class="so-widget-patientpop-image-widget so-widget-patientpop-image-widget-default-d75171398898-7076">
                            <img
                              src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/AAD-LOGO.png"
                              loading="lazy"
                              class="no-scroll-lazy "
                              id=""
                              data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/AAD-LOGO.png"
                              alt=""
                              width="200"
                              height="71"
                            />
                          </div>
                        </div>
                      </div>
                      <div id="pgc-7076-8-2" class="panel-grid-cell">
                        <div
                          id="panel-7076-8-2-0"
                          class="so-panel widget widget_patientpop-image-widget panel-first-child"
                          data-index="31"
                        >
                          <div class="so-widget-patientpop-image-widget so-widget-patientpop-image-widget-default-d75171398898-7076">
                            <img
                              src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-09.png"
                              loading="lazy"
                              class="no-scroll-lazy "
                              id=""
                              data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-09.png"
                              alt=""
                              width="301"
                              height="301"
                            />
                          </div>
                        </div>
                        <div
                          id="panel-7076-8-2-1"
                          class="so-panel widget widget_patientpop-image-widget"
                          data-index="32"
                        >
                          <div class="so-widget-patientpop-image-widget so-widget-patientpop-image-widget-default-d75171398898-7076">
                            <img
                              src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-07.png"
                              loading="lazy"
                              class="no-scroll-lazy "
                              id=""
                              data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-07.png"
                              alt=""
                              width="301"
                              height="301"
                            />
                          </div>
                        </div>
                        <div
                          id="panel-7076-8-2-2"
                          class="so-panel widget widget_patientpop-image-widget"
                          data-index="33"
                        >
                          <div class="so-widget-patientpop-image-widget so-widget-patientpop-image-widget-default-d75171398898-7076">
                            <img
                              src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-05.png"
                              loading="lazy"
                              class="no-scroll-lazy "
                              id=""
                              data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-05.png"
                              alt=""
                              width="301"
                              height="301"
                            />
                          </div>
                        </div>
                        <div
                          id="panel-7076-8-2-3"
                          class="so-panel widget widget_patientpop-image-widget panel-last-child"
                          data-index="34"
                        >
                          <div class="panel-widget-style panel-widget-style-for-7076-8-2-3">
                            <div class="so-widget-patientpop-image-widget so-widget-patientpop-image-widget-default-d75171398898-7076">
                              <img
                                src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/WSMA-Logo.png"
                                loading="lazy"
                                class="no-scroll-lazy "
                                id=""
                                data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/WSMA-Logo.png"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="pg-7076-9" class="panel-grid panel-has-style">
                    <div
                      class="siteorigin-panels-stretch panel-row-style panel-row-style-for-7076-9"
                      data-stretch-type="full"
                      style={{
                        marginLeft: "0px",
                        marginRight: "-45px",
                        paddingLeft: "0px",
                        paddingRight: "45px",
                        borderLeft: "0px",
                        borderRight: "0px",
                      }}
                      // style="margin-left: 0px; margin-right: -45px; padding-left: 0px; padding-right: 45px; border-left: 0px; border-right: 0px;"
                    >
                      <div id="pgc-7076-9-0" class="panel-grid-cell">
                        <div
                          id="panel-7076-9-0-0"
                          class="so-panel widget widget_carousel panel-first-child panel-last-child"
                          data-index="35"
                        >
                          <div class="so-widget-carousel so-widget-carousel-default-d75171398898-7076">
                            <div class="w-carousel" id="partner-logos">
                              <div class="w-carousel-wrapper">
                                <div class="w-carousel-slides slick-initialized slick-slider slick-dotted">
                                  <div class="slick-list draggable">
                                    <div
                                      class="slick-track"
                                      style={{
                                        opacity: "1",
                                        width: "0px",
                                        transform:
                                          " translate3d(0px, 0px, 0px)",
                                      }}
                                    >
                                      <div
                                        class="slick-slide slick-cloned"
                                        data-slick-index="-1"
                                        id=""
                                        aria-hidden="true"
                                        tabindex="-1"
                                        style={{ width: "0px" }}
                                      >
                                        <div>
                                          <div
                                            data-title=""
                                            class="carousel-item "
                                            style={{
                                              width: "100%",
                                              display: "inline-block",
                                            }}
                                          >
                                            <div class="w-carousel-item">
                                              {" "}
                                              <noscript>
                                                <img
                                                  class="w-carousel-image"
                                                  src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-05.png"
                                                  alt=""
                                                />
                                              </noscript>
                                              <img
                                                class="lazyload w-carousel-image"
                                                src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                                data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-05.png"
                                                alt=""
                                              />
                                              <div class="w-carousel-content"></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="slick-slide slick-current slick-active"
                                        data-slick-index="0"
                                        aria-hidden="false"
                                        role="tabpanel"
                                        id="slick-slide00"
                                        aria-describedby="slick-slide-control00"
                                        style={{ width: "0px" }}
                                      >
                                        <div>
                                          <div
                                            data-title=""
                                            class="carousel-item  active"
                                            style={{
                                              width: "100%",
                                              display: "inline-block",
                                            }}
                                          >
                                            <div class="w-carousel-item">
                                              {" "}
                                              <noscript>
                                                <img
                                                  class="w-carousel-image"
                                                  src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-02.png"
                                                  alt=""
                                                />
                                              </noscript>
                                              <img
                                                class="lazyload w-carousel-image"
                                                src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                                data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-02.png"
                                                alt=""
                                              />
                                              <div class="w-carousel-content"></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="slick-slide"
                                        data-slick-index="1"
                                        aria-hidden="true"
                                        tabindex="-1"
                                        role="tabpanel"
                                        id="slick-slide01"
                                        aria-describedby="slick-slide-control01"
                                        style={{ width: "0px" }}
                                      >
                                        <div>
                                          <div
                                            data-title=""
                                            class="carousel-item "
                                            style={{
                                              width: "100%",
                                              display: "inline-block",
                                            }}
                                          >
                                            <div class="w-carousel-item">
                                              {" "}
                                              <noscript>
                                                <img
                                                  class="w-carousel-image"
                                                  src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-06.png"
                                                  alt=""
                                                />
                                              </noscript>
                                              <img
                                                class="lazyload w-carousel-image"
                                                src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                                data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-06.png"
                                                alt=""
                                              />
                                              <div class="w-carousel-content"></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="slick-slide"
                                        data-slick-index="2"
                                        aria-hidden="true"
                                        tabindex="-1"
                                        role="tabpanel"
                                        id="slick-slide02"
                                        aria-describedby="slick-slide-control02"
                                        style={{ width: "0px" }}
                                      >
                                        <div>
                                          <div
                                            data-title=""
                                            class="carousel-item "
                                            style={{
                                              width: "100%",
                                              display: "inline-block",
                                            }}
                                          >
                                            <div class="w-carousel-item">
                                              {" "}
                                              <noscript>
                                                <img
                                                  class="w-carousel-image"
                                                  src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-09.png"
                                                  alt=""
                                                />
                                              </noscript>
                                              <img
                                                class="lazyload w-carousel-image"
                                                src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                                data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-09.png"
                                                alt=""
                                              />
                                              <div class="w-carousel-content"></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="slick-slide"
                                        data-slick-index="3"
                                        aria-hidden="true"
                                        tabindex="-1"
                                        role="tabpanel"
                                        id="slick-slide03"
                                        aria-describedby="slick-slide-control03"
                                        style={{ width: "0px" }}
                                      >
                                        <div>
                                          <div
                                            data-title=""
                                            class="carousel-item "
                                            style={{
                                              width: "100%",
                                              display: "inline-block",
                                            }}
                                          >
                                            <div class="w-carousel-item">
                                              {" "}
                                              <noscript>
                                                <img
                                                  class="w-carousel-image"
                                                  src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-10.png"
                                                  alt=""
                                                />
                                              </noscript>
                                              <img
                                                class="lazyload w-carousel-image"
                                                src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                                data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-10.png"
                                                alt=""
                                              />
                                              <div class="w-carousel-content"></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="slick-slide"
                                        data-slick-index="4"
                                        aria-hidden="true"
                                        tabindex="-1"
                                        role="tabpanel"
                                        id="slick-slide04"
                                        aria-describedby="slick-slide-control04"
                                        style={{ width: "0px" }}
                                      >
                                        <div>
                                          <div
                                            data-title=""
                                            class="carousel-item "
                                            style={{
                                              width: "100%",
                                              display: "inline-block",
                                            }}
                                          >
                                            <div class="w-carousel-item">
                                              {" "}
                                              <noscript>
                                                <img
                                                  class="w-carousel-image"
                                                  src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-03.png"
                                                  alt=""
                                                />
                                              </noscript>
                                              <img
                                                class="lazyload w-carousel-image"
                                                src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                                data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-03.png"
                                                alt=""
                                              />
                                              <div class="w-carousel-content"></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="slick-slide"
                                        data-slick-index="5"
                                        aria-hidden="true"
                                        tabindex="-1"
                                        role="tabpanel"
                                        id="slick-slide05"
                                        aria-describedby="slick-slide-control05"
                                        style={{ width: "0px" }}
                                      >
                                        <div>
                                          <div
                                            data-title=""
                                            class="carousel-item "
                                            style={{
                                              width: "100%",
                                              display: "inline-block",
                                            }}
                                          >
                                            <div class="w-carousel-item">
                                              {" "}
                                              <noscript>
                                                <img
                                                  class="w-carousel-image"
                                                  src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-07.png"
                                                  alt=""
                                                />
                                              </noscript>
                                              <img
                                                class="lazyload w-carousel-image"
                                                src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                                data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-07.png"
                                                alt=""
                                              />
                                              <div class="w-carousel-content"></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="slick-slide"
                                        data-slick-index="6"
                                        aria-hidden="true"
                                        tabindex="-1"
                                        role="tabpanel"
                                        id="slick-slide06"
                                        aria-describedby="slick-slide-control06"
                                        style={{ width: "0px" }}
                                      >
                                        <div>
                                          <div
                                            data-title=""
                                            class="carousel-item "
                                            style={{
                                              width: "100%",
                                              display: "inline-block",
                                            }}
                                          >
                                            <div class="w-carousel-item">
                                              {" "}
                                              <noscript>
                                                <img
                                                  class="w-carousel-image"
                                                  src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-08.png"
                                                  alt=""
                                                />
                                              </noscript>
                                              <img
                                                class="lazyload w-carousel-image"
                                                src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                                data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-08.png"
                                                alt=""
                                              />
                                              <div class="w-carousel-content"></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="slick-slide"
                                        data-slick-index="7"
                                        aria-hidden="true"
                                        tabindex="-1"
                                        role="tabpanel"
                                        id="slick-slide07"
                                        aria-describedby="slick-slide-control07"
                                        style={{ width: "0px" }}
                                      >
                                        <div>
                                          <div
                                            data-title=""
                                            class="carousel-item "
                                            style={{
                                              width: "100%",
                                              display: "inline-block",
                                            }}
                                          >
                                            <div class="w-carousel-item">
                                              {" "}
                                              <noscript>
                                                <img
                                                  class="w-carousel-image"
                                                  src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-04.png"
                                                  alt=""
                                                />
                                              </noscript>
                                              <img
                                                class="lazyload w-carousel-image"
                                                src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                                data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-04.png"
                                                alt=""
                                              />
                                              <div class="w-carousel-content"></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="slick-slide"
                                        data-slick-index="8"
                                        aria-hidden="true"
                                        tabindex="-1"
                                        role="tabpanel"
                                        id="slick-slide08"
                                        aria-describedby="slick-slide-control08"
                                        style={{ width: "0px" }}
                                      >
                                        <div>
                                          <div
                                            data-title=""
                                            class="carousel-item "
                                            style={{
                                              width: "100%",
                                              display: "inline-block",
                                            }}
                                          >
                                            <div class="w-carousel-item">
                                              {" "}
                                              <noscript>
                                                <img
                                                  class="w-carousel-image"
                                                  src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-05.png"
                                                  alt=""
                                                />
                                              </noscript>
                                              <img
                                                class="lazyload w-carousel-image"
                                                src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                                data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-05.png"
                                                alt=""
                                              />
                                              <div class="w-carousel-content"></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="slick-slide slick-cloned"
                                        data-slick-index="9"
                                        id=""
                                        aria-hidden="true"
                                        tabindex="-1"
                                        style={{ width: "0px" }}
                                      >
                                        <div>
                                          <div
                                            data-title=""
                                            class="carousel-item  active"
                                            style={{
                                              width: "100%",
                                              display: "inline-block",
                                            }}
                                          >
                                            <div class="w-carousel-item">
                                              {" "}
                                              <noscript>
                                                <img
                                                  class="w-carousel-image"
                                                  src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-02.png"
                                                  alt=""
                                                />
                                              </noscript>
                                              <img
                                                class="lazyload w-carousel-image"
                                                src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                                data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-02.png"
                                                alt=""
                                              />
                                              <div class="w-carousel-content"></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="slick-slide slick-cloned"
                                        data-slick-index="10"
                                        id=""
                                        aria-hidden="true"
                                        tabindex="-1"
                                        style={{ width: "0px" }}
                                      >
                                        <div>
                                          <div
                                            data-title=""
                                            class="carousel-item "
                                            style={{
                                              width: "100%",
                                              display: "inline-block",
                                            }}
                                          >
                                            <div class="w-carousel-item">
                                              {" "}
                                              <noscript>
                                                <img
                                                  class="w-carousel-image"
                                                  src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-06.png"
                                                  alt=""
                                                />
                                              </noscript>
                                              <img
                                                class="lazyload w-carousel-image"
                                                src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                                data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-06.png"
                                                alt=""
                                              />
                                              <div class="w-carousel-content"></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="slick-slide slick-cloned"
                                        data-slick-index="11"
                                        id=""
                                        aria-hidden="true"
                                        tabindex="-1"
                                        style={{ width: "0px" }}
                                      >
                                        <div>
                                          <div
                                            data-title=""
                                            class="carousel-item "
                                            style={{
                                              width: "100%",
                                              display: "inline-block",
                                            }}
                                          >
                                            <div class="w-carousel-item">
                                              {" "}
                                              <noscript>
                                                <img
                                                  class="w-carousel-image"
                                                  src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-09.png"
                                                  alt=""
                                                />
                                              </noscript>
                                              <img
                                                class="lazyload w-carousel-image"
                                                src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                                data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-09.png"
                                                alt=""
                                              />
                                              <div class="w-carousel-content"></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="slick-slide slick-cloned"
                                        data-slick-index="12"
                                        id=""
                                        aria-hidden="true"
                                        tabindex="-1"
                                        style={{ width: "0px" }}
                                      >
                                        <div>
                                          <div
                                            data-title=""
                                            class="carousel-item "
                                            style={{
                                              width: "100%",
                                              display: "inline-block",
                                            }}
                                          >
                                            <div class="w-carousel-item">
                                              <noscript>
                                                <img
                                                  class="w-carousel-image"
                                                  src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-10.png"
                                                  alt=""
                                                />
                                              </noscript>
                                              <img
                                                class="lazyload w-carousel-image"
                                                src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                                data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-10.png"
                                                alt=""
                                              />
                                              <div class="w-carousel-content"></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="slick-slide slick-cloned"
                                        data-slick-index="13"
                                        id=""
                                        aria-hidden="true"
                                        tabindex="-1"
                                        style={{ width: "0px" }}
                                      >
                                        <div>
                                          <div
                                            data-title=""
                                            class="carousel-item "
                                            style={{
                                              width: "100%",
                                              display: "inline-block",
                                            }}
                                          >
                                            <div class="w-carousel-item">
                                              {" "}
                                              <noscript>
                                                <img
                                                  class="w-carousel-image"
                                                  src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-03.png"
                                                  alt=""
                                                />
                                              </noscript>
                                              <img
                                                class="lazyload w-carousel-image"
                                                src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                                data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-03.png"
                                                alt=""
                                              />
                                              <div class="w-carousel-content"></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="slick-slide slick-cloned"
                                        data-slick-index="14"
                                        id=""
                                        aria-hidden="true"
                                        tabindex="-1"
                                        style={{ width: "0px" }}
                                      >
                                        <div>
                                          <div
                                            data-title=""
                                            class="carousel-item "
                                            style={{
                                              width: "100%",
                                              display: "inline-block",
                                            }}
                                          >
                                            <div class="w-carousel-item">
                                              {" "}
                                              <noscript>
                                                <img
                                                  class="w-carousel-image"
                                                  src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-07.png"
                                                  alt=""
                                                />
                                              </noscript>
                                              <img
                                                class="lazyload w-carousel-image"
                                                src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                                data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-07.png"
                                                alt=""
                                              />
                                              <div class="w-carousel-content"></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="slick-slide slick-cloned"
                                        data-slick-index="15"
                                        id=""
                                        aria-hidden="true"
                                        tabindex="-1"
                                        style={{ width: "0px" }}
                                      >
                                        <div>
                                          <div
                                            data-title=""
                                            class="carousel-item "
                                            style={{
                                              width: "100%",
                                              display: "inline-block",
                                            }}
                                          >
                                            <div class="w-carousel-item">
                                              {" "}
                                              <noscript>
                                                <img
                                                  class="w-carousel-image"
                                                  src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-08.png"
                                                  alt=""
                                                />
                                              </noscript>
                                              <img
                                                class="lazyload w-carousel-image"
                                                src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                                data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-08.png"
                                                alt=""
                                              />
                                              <div class="w-carousel-content"></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="slick-slide slick-cloned"
                                        data-slick-index="16"
                                        id=""
                                        aria-hidden="true"
                                        tabindex="-1"
                                        style={{ width: "0px" }}
                                      >
                                        <div>
                                          <div
                                            data-title=""
                                            class="carousel-item "
                                            style={{
                                              width: "100%",
                                              display: "inline-block",
                                            }}
                                          >
                                            <div class="w-carousel-item">
                                              {" "}
                                              <noscript>
                                                <img
                                                  class="w-carousel-image"
                                                  src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-04.png"
                                                  alt=""
                                                />
                                              </noscript>
                                              <img
                                                class="lazyload w-carousel-image"
                                                src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                                data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-04.png"
                                                alt=""
                                              />
                                              <div class="w-carousel-content"></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="slick-slide slick-cloned"
                                        data-slick-index="17"
                                        id=""
                                        aria-hidden="true"
                                        tabindex="-1"
                                        style={{ width: "0px" }}
                                      >
                                        <div>
                                          <div
                                            data-title=""
                                            class="carousel-item "
                                            style={{
                                              width: "100%",
                                              display: "inline-block",
                                            }}
                                          >
                                            <div class="w-carousel-item">
                                              {" "}
                                              <noscript>
                                                <img
                                                  class="w-carousel-image"
                                                  src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-05.png"
                                                  alt=""
                                                />
                                              </noscript>
                                              <img
                                                class="lazyload w-carousel-image"
                                                src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                                data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/Partners-association-partners-logo-section-05.png"
                                                alt=""
                                              />
                                              <div class="w-carousel-content"></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="w-carousel-pager">
                                  <ul
                                    class="slick-dots"
                                    role="tablist" // style=""
                                  >
                                    <li
                                      class="slick-active"
                                      role="presentation"
                                    >
                                      <button
                                        type="button"
                                        role="tab"
                                        id="slick-slide-control00"
                                        aria-controls="slick-slide00"
                                        aria-label="1 of 9"
                                        tabindex="0"
                                        aria-selected="true"
                                      >
                                        1
                                      </button>
                                    </li>
                                    <li role="presentation">
                                      <button
                                        type="button"
                                        role="tab"
                                        id="slick-slide-control01"
                                        aria-controls="slick-slide01"
                                        aria-label="2 of 9"
                                        tabindex="-1"
                                      >
                                        2
                                      </button>
                                    </li>
                                    <li role="presentation">
                                      <button
                                        type="button"
                                        role="tab"
                                        id="slick-slide-control02"
                                        aria-controls="slick-slide02"
                                        aria-label="3 of 9"
                                        tabindex="-1"
                                      >
                                        3
                                      </button>
                                    </li>
                                    <li role="presentation">
                                      <button
                                        type="button"
                                        role="tab"
                                        id="slick-slide-control03"
                                        aria-controls="slick-slide03"
                                        aria-label="4 of 9"
                                        tabindex="-1"
                                      >
                                        4
                                      </button>
                                    </li>
                                    <li role="presentation">
                                      <button
                                        type="button"
                                        role="tab"
                                        id="slick-slide-control04"
                                        aria-controls="slick-slide04"
                                        aria-label="5 of 9"
                                        tabindex="-1"
                                      >
                                        5
                                      </button>
                                    </li>
                                    <li role="presentation">
                                      <button
                                        type="button"
                                        role="tab"
                                        id="slick-slide-control05"
                                        aria-controls="slick-slide05"
                                        aria-label="6 of 9"
                                        tabindex="-1"
                                      >
                                        6
                                      </button>
                                    </li>
                                    <li role="presentation">
                                      <button
                                        type="button"
                                        role="tab"
                                        id="slick-slide-control06"
                                        aria-controls="slick-slide06"
                                        aria-label="7 of 9"
                                        tabindex="-1"
                                      >
                                        7
                                      </button>
                                    </li>
                                    <li role="presentation">
                                      <button
                                        type="button"
                                        role="tab"
                                        id="slick-slide-control07"
                                        aria-controls="slick-slide07"
                                        aria-label="8 of 9"
                                        tabindex="-1"
                                      >
                                        8
                                      </button>
                                    </li>
                                    <li role="presentation">
                                      <button
                                        type="button"
                                        role="tab"
                                        id="slick-slide-control08"
                                        aria-controls="slick-slide08"
                                        aria-label="9 of 9"
                                        tabindex="-1"
                                      >
                                        9
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                                <div class="w-carousel-nav">
                                  {" "}
                                  <a
                                    class="arrow arrow-previous arrow--circle arrow--black slick-arrow"
                                    // style=""
                                  >
                                    <span class="screen-reader-only">
                                      Previous
                                    </span>
                                  </a>{" "}
                                  <a
                                    class="arrow arrow-next arrow--circle arrow--black slick-arrow"
                                    // style=""
                                  >
                                    <span class="screen-reader-only">Next</span>
                                  </a>
                                </div>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="pg-7076-10" class="panel-grid panel-has-style">
                    <div
                      class="siteorigin-panels-stretch panel-row-style panel-row-style-for-7076-10"
                      data-stretch-type="full"
                      style={{
                        marginLeft: "-22.5px",
                        marginRight: "-22.5px",
                        paddingLeft: "22.5px",
                        paddingRight: "22.5px",
                        borderLeft: "0px",
                        borderRight: "0px",
                      }}
                      // style="margin-left: -22.5px; margin-right: -22.5px; padding-left: 22.5px; padding-right: 22.5px; border-left: 0px; border-right: 0px;"
                    >
                      <div
                        id="pgc-7076-10-0"
                        class="panel-grid-cell panel-grid-cell-empty"
                      ></div>
                      <div id="pgc-7076-10-1" class="panel-grid-cell">
                        <div
                          id="panel-7076-10-1-0"
                          class="widget_text so-panel widget widget_custom_html panel-first-child"
                          data-index="36"
                        >
                          <div class="textwidget custom-html-widget">
                            <a name="partner-with-us"></a>
                          </div>
                        </div>
                        <div
                          id="panel-7076-10-1-1"
                          class="so-panel widget widget_form-builder-widget panel-last-child"
                          data-index="37"
                        >
                          <div class="panel-widget-style panel-widget-style-for-7076-10-1-1">
                            <div class="so-widget-form-builder-widget so-widget-form-builder-widget-default-d75171398898-7076">
                              <div class="form-panel form-whitebox-border">
                                <div class="form-material">
                                  <div
                                    class="paragraph  paragraph--center statusMsg"
                                    style={{
                                      marginTop: "20px",
                                      width: "100%",
                                      display: "none",
                                    }}
                                  >
                                    {" "}
                                    Thank you! Remassis is reviewing your
                                    submission.
                                  </div>
                                  <p class="paragraph paragraph--error"></p>
                                  <form
                                    accept-charset="UTF-8"
                                    method="post"
                                    action=""
                                    class="js-form-builder-563890493 form form-full form-material form-whitebox-border    hide-after-submission  form-google-sheets          "
                                    data-marketo="none"
                                    data-id="form-builder-563890493"
                                    id="form-builder-563890493"
                                    __bizdiag="-1840224154"
                                    __biza="WJ__"
                                  >
                                    <h3 class="heading--sm2 heading--black">
                                      Let's talk about healthcare solutions.
                                    </h3>
                                    <div class="paragraph"></div>
                                    <div>
                                      <div class="form-fields">
                                        <p
                                          data-pp="name"
                                          class="form-field form-field-text required required-custom"
                                        >
                                          {" "}
                                          <input
                                            type="text"
                                            name="name"
                                            id="name-563890493"
                                            data-mkto="name"
                                            value=""
                                            class="text "
                                            maxlength="255"
                                            required=""
                                          />{" "}
                                          <label
                                            class="field-label"
                                            for="name-563890493"
                                          >
                                            Full Name*
                                          </label>
                                        </p>
                                        <p
                                          data-pp="title"
                                          class="form-field form-field-text required required-custom"
                                        >
                                          {" "}
                                          <input
                                            type="text"
                                            name="title"
                                            id="title-563890493"
                                            data-mkto="title"
                                            value=""
                                            class="text "
                                            maxlength="255"
                                            required=""
                                          />{" "}
                                          <label
                                            class="field-label"
                                            for="title-563890493"
                                          >
                                            Title*
                                          </label>
                                        </p>
                                        <p
                                          data-pp="company"
                                          class="form-field form-field-text required required-custom"
                                        >
                                          {" "}
                                          <input
                                            type="text"
                                            name="company"
                                            id="company-563890493"
                                            data-mkto="company"
                                            value=""
                                            class="text "
                                            maxlength="255"
                                            required=""
                                          />{" "}
                                          <label
                                            class="field-label"
                                            for="company-563890493"
                                          >
                                            Company or Organization*
                                          </label>
                                        </p>
                                        <p
                                          data-pp="Email"
                                          class="form-field form-field-text required required-custom"
                                        >
                                          {" "}
                                          <input
                                            type="email"
                                            name="email"
                                            data-mkto="Email"
                                            id="email-563890493"
                                            value=""
                                            class="text "
                                            size="80"
                                            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,63}$"
                                            oninvalid="this.setCustomValidity('Please enter a valid email.')"
                                            oninput="this.setCustomValidity('')"
                                            required=""
                                          />{" "}
                                          <label
                                            class="field-label"
                                            for="email-563890493"
                                          >
                                            Email*
                                          </label>
                                        </p>
                                        <p
                                          data-pp="phone"
                                          class="form-field form-field-text required required-custom"
                                        >
                                          {" "}
                                          <input
                                            type="text"
                                            name="phone"
                                            id="phone-563890493"
                                            data-mkto="phone"
                                            value=""
                                            class="text "
                                            maxlength="255"
                                            required=""
                                          />{" "}
                                          <label
                                            class="field-label"
                                            for="phone-563890493"
                                          >
                                            Phone*
                                          </label>
                                        </p>
                                        <p
                                          data-pp="city"
                                          class="form-field form-field-text required required-custom"
                                        >
                                          {" "}
                                          <input
                                            type="text"
                                            name="city"
                                            id="city-563890493"
                                            data-mkto="city"
                                            value=""
                                            class="text "
                                            maxlength="255"
                                            required=""
                                          />{" "}
                                          <label
                                            class="field-label"
                                            for="city-563890493"
                                          >
                                            City*
                                          </label>
                                        </p>
                                        <p
                                          data-pp="state"
                                          class="form-field form-field-text required required-custom"
                                        >
                                          {" "}
                                          <input
                                            type="text"
                                            name="state"
                                            id="state-563890493"
                                            data-mkto="state"
                                            value=""
                                            class="text "
                                            maxlength="255"
                                            required=""
                                          />{" "}
                                          <label
                                            class="field-label"
                                            for="state-563890493"
                                          >
                                            State*
                                          </label>
                                        </p>{" "}
                                        <span class="field-label">
                                          What's the best fit for your
                                          business?*
                                        </span>
                                        <div class="form-field ">
                                          <ul class="form-field-radio-button required required-custom">
                                            <li>
                                              {" "}
                                              <input
                                                type="radio"
                                                class="radio-button"
                                                id="fit0-563890493"
                                                name="fit"
                                                value="affiliate"
                                              />{" "}
                                              <label for="fit0-563890493">
                                                {" "}
                                                Affiliate{" "}
                                                <span class="radio-button-tooltip">
                                                  You refer leads while our
                                                  sales team manages the
                                                  referral source. Simply
                                                  endorse Remassis to get
                                                  instant perks.
                                                </span>{" "}
                                              </label>
                                            </li>
                                            <li>
                                              {" "}
                                              <input
                                                type="radio"
                                                class="radio-button"
                                                id="fit1-563890493"
                                                name="fit"
                                                value="channel"
                                              />{" "}
                                              <label for="fit1-563890493">
                                                {" "}
                                                Channel{" "}
                                                <span class="radio-button-tooltip">
                                                  You offer potential leads,
                                                  while our team manages the
                                                  referral source. Collaborate
                                                  with our expert marketing,
                                                  sales, and operations teams
                                                  for mutual wins.
                                                </span>{" "}
                                              </label>
                                            </li>
                                            <li>
                                              {" "}
                                              <input
                                                type="radio"
                                                class="radio-button"
                                                id="fit2-563890493"
                                                name="fit"
                                                value="strategic"
                                              />{" "}
                                              <label for="fit2-563890493">
                                                {" "}
                                                Strategic{" "}
                                                <span class="radio-button-tooltip">
                                                  You are a company with similar
                                                  goals to Remassis. You may be
                                                  a product, organization, or
                                                  EMR/PMS looking for a
                                                  long-term partnership
                                                  opportunity.
                                                </span>{" "}
                                              </label>
                                            </li>
                                          </ul>
                                          <div class="clear"></div>
                                        </div>
                                        <p
                                          data-pp="message"
                                          class="form-field form-field-text required required-custom"
                                        >
                                          <textarea
                                            class="textarea"
                                            name="message"
                                            maxlength="32000"
                                            id="message-563890493"
                                            required=""
                                            rows="5"
                                          ></textarea>
                                          <label
                                            class="field-label"
                                            for="message-563890493"
                                          >
                                            Tell us more about how you would
                                            like to partner with Remassis.*
                                          </label>
                                        </p>
                                      </div>
                                    </div>{" "}
                                    <input
                                      type="hidden"
                                      name="LeadSource"
                                      id="LeadSource-563890493"
                                      data-mkto="LeadSource"
                                      class="utm_source"
                                      value=""
                                    />{" "}
                                    <input
                                      type="hidden"
                                      name="Lead_Channel2__c"
                                      id="Lead_Channel2__c-563890493"
                                      data-mkto="Lead_Channel2__c"
                                      class="utm_medium"
                                      value=""
                                    />{" "}
                                    <input
                                      type="hidden"
                                      name="Lead_Channel__c"
                                      id="Lead_Channel__c-563890493"
                                      data-mkto="Lead_Channel__c"
                                      class="utm_medium"
                                      value=""
                                    />{" "}
                                    <input
                                      type="hidden"
                                      name="utm_campaign__c"
                                      id="utm_campaign__c-563890493"
                                      data-mkto="UTM_Campaign__c"
                                      class="utm_campaign"
                                      value=""
                                    />{" "}
                                    <input
                                      type="hidden"
                                      name="utm_content"
                                      id="UTM_Content__c-563890493"
                                      class="utm_content"
                                      value=""
                                    />{" "}
                                    <input
                                      type="hidden"
                                      name="utm_term"
                                      id="utm_term-563890493"
                                      class="utm_term"
                                      value=""
                                    />{" "}
                                    <input
                                      type="hidden"
                                      name="affiliate"
                                      id="affiliate-563890493"
                                      data-mkto="AffiliatePartner__c"
                                      class="affiliate"
                                      value=""
                                    />{" "}
                                    <input
                                      type="hidden"
                                      name="GCLID__c"
                                      id="GCLID__c-563890493"
                                      data-mkto="GCLID__c"
                                      class="gclid"
                                      value=""
                                    />{" "}
                                    <input
                                      type="hidden"
                                      name="keyword"
                                      id="keyword-563890493"
                                      data-mkto="Adwords_Keyword__c"
                                      class="keyword"
                                      value=""
                                    />{" "}
                                    <input
                                      type="hidden"
                                      name="utm_partner"
                                      id="utm_partner-563890493"
                                      data-mkto="UTM_Partner"
                                      class="utm_partner"
                                      value=""
                                    />{" "}
                                    <input
                                      type="hidden"
                                      name="dl"
                                      class="download_file"
                                      value=""
                                    />{" "}
                                    <input
                                      type="hidden"
                                      name="User_IP_Address"
                                      value="49.36.212.31"
                                    />
                                    <div>
                                      <div class="form-field form-field-submit">
                                        <p class="paragraph paragraph--fine-print">
                                          By submitting my email address above,
                                          I acknowledge that Remassis may use my
                                          information as described in its
                                          Privacy Policy.
                                        </p>{" "}
                                        <input
                                          type="submit"
                                          id="submitForm-563890493"
                                          class="btn submitBtn btn--small"
                                          accesskey="s"
                                          value="Get started"
                                        />
                                      </div>
                                    </div>
                                  </form>
                                  <form
                                    id="marketo-form-563890493"
                                    style={{ display: "none" }}
                                    __bizdiag="-1838562718"
                                    __biza="WJ__"
                                  ></form>{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <ContainerFooter />
    </div>
  );
}

export default Partners;

import React from "react";
import ContainerFooter from "../../components/containerFooter";
import ContainerNavbar from "../webclone/containernavbar";

function Homepage() {
  return (
    <div>
      <ContainerNavbar />

      <section className="container">
        <div className="row justify-content-center hero-section">
          <div className="col-12 col-md-11 text-center">
            <h3 className="heading--label">Modernize the experience</h3>
            <h1
              className="display-1 wow fadeInUp"
              // style="visibility: visible; animation-name: fadeInUp;"
            >
              Give patients a modern experience that{" "}
              <strong>exceeds expectations</strong>
            </h1>{" "}
            <button
              type="button"
              className="btn text-nowrap btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#modalDemoRequestBody"
            >
              {" "}
              Get a demo
            </button>
          </div>
        </div>
      </section>
      <section className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-md-11 text-center">
            {" "}
            <svg id="common-svg">
              {" "}
              <defs>
                {" "}
                <filter
                  id="shadow"
                  x="-50%"
                  y="-50%"
                  width="200%"
                  height="200%"
                >
                  {" "}
                  <feGaussianBlur
                    stdDeviation="35"
                    result="d"
                  ></feGaussianBlur>{" "}
                  <feFlood flood-opacity="0.15"></feFlood>{" "}
                  <feComposite operator="in" in2="d"></feComposite>{" "}
                  <feComposite in="SourceGraphic"></feComposite>{" "}
                </filter>{" "}
              </defs>{" "}
            </svg>
            <div className="animation-container">
              {" "}
              <svg
                className="hero-image"
                id="modernize-hero-animation"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2000 1400"
                //   style="opacity: 1;"
              >
                {" "}
                <defs>
                  {" "}
                  <clipPath id="modernize-hero-animation-rate-clip">
                    {" "}
                    <path d="M374.3,938.1l-6.2-3.3-6.3,3.3c-.6.3-1,0-.9-.7l1.2-7.1-5-5c-.5-.5-.4-1,.3-1.1l7-1,3.1-6.5c.3-.6.8-.6,1.1,0l3.2,6.5,6.9,1c.7.1.9.6.4,1.1l-5.1,5,1.2,7.1C375.3,938.1,374.9,938.4,374.3,938.1Z"></path>{" "}
                    <path d="M340.4,938.1l-6.2-3.3-6.3,3.3c-.6.3-1,0-.9-.7l1.2-7.1-5-5c-.5-.5-.4-1,.3-1.1l7-1,3.1-6.5c.3-.6.8-.6,1.1,0l3.2,6.5,6.9,1c.7.1.9.6.4,1.1l-5,5,1.2,7.1C341.5,938.1,341.1,938.4,340.4,938.1Z"></path>{" "}
                    <path d="M306.5,938.1l-6.2-3.3-6.2,3.3c-.7.3-1.1,0-1-.7l1.2-7.1-5-5c-.5-.5-.3-1,.4-1.1l6.9-1,3.1-6.5c.4-.6.9-.6,1.2,0l3.1,6.5,6.9,1c.7.1.9.6.4,1.1l-5,5,1.2,7.1C307.6,938.1,307.2,938.4,306.5,938.1Z"></path>{" "}
                    <path d="M272.7,938.1l-6.3-3.3-6.2,3.3c-.6.3-1.1,0-.9-.7l1.2-7.1-5.1-5c-.5-.5-.3-1,.4-1.1l6.9-1,3.2-6.5c.3-.6.8-.6,1.1,0l3.1,6.5,7,1c.7.1.8.6.3,1.1l-5,5,1.2,7.1C273.7,938.1,273.3,938.4,272.7,938.1Z"></path>{" "}
                    <path d="M408.2,938.1l-6.3-3.3-6.2,3.3c-.6.3-1.1,0-.9-.7l1.2-7.1-5.1-5c-.5-.5-.3-1,.4-1.1l6.9-1,3.2-6.5c.3-.6.8-.6,1.1,0l3.1,6.5,7,1c.7.1.8.6.3,1.1l-5,5,1.2,7.1C409.2,938.1,408.8,938.4,408.2,938.1Z"></path>{" "}
                  </clipPath>{" "}
                  <clipPath id="modernize-hero-animation-image-crop">
                    {" "}
                    <path
                      className="modernize-animation-image-crop"
                      d="M611, 340 a50 50 1 0 1 50 -50 h678 a50 50 1 0 1 50 50 v720 a50 50 1 0 1 -50 50 h-678 a50 50 1 0 1 -50 -50z"
                    ></path>{" "}
                  </clipPath>{" "}
                </defs>{" "}
                <image
                  clip-path="url(#modernize-hero-animation-image-crop)"
                  x="200"
                  y="270"
                  width="1600"
                  href="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/homepage/modernize.jpg"
                ></image>{" "}
                <g
                  className="layer"
                  data-svg-origin="1000 700"
                  transform="matrix(0.8,0,0,0.8,200,140)"
                  //     style="transform-origin: 0px 0px; opacity: 0;"
                >
                  {" "}
                  <circle
                    className="plus-pulsing"
                    cx="1088.8"
                    cy="828.2"
                    r="24.3"
                    fill="none"
                    stroke="#07c597"
                    stroke-width="3"
                    data-svg-origin="1088.7999992370605 828.200023651123"
                    transform="matrix(1.4,0,0,1.4,-435.52,-331.28001)"
                    //     style="transform-origin: 0px 0px; opacity: 0;"
                  ></circle>{" "}
                  <circle
                    cx="1088.8"
                    cy="828.2"
                    r="24.3"
                    fill="#FFFFFF"
                    fill-opacity="0.3"
                    stroke="#07c597"
                    stroke-width="3"
                  ></circle>{" "}
                  <path
                    d="M1079.6,831.7h6.3V838h6.3v-6.3h6.3v-6.3h-6.3v-6.3h-6.3v6.3h-6.3Z"
                    fill="#07c597"
                  ></path>{" "}
                  <path
                    d="M1089.1,798V574.4"
                    fill="none"
                    stroke="#07c597"
                    stroke-width="1.5"
                    stroke-dasharray="10 13"
                  ></path>{" "}
                </g>{" "}
                <g
                  className="font-book layer"
                  data-svg-origin="1000 700"
                  transform="matrix(0.8,0,0,0.8,200,140)"
                  //     style="transform-origin: 0px 0px; opacity: 0;"
                >
                  {" "}
                  <g
                    className="new-btn"
                    data-svg-origin="322 422.6000061035156"
                    transform="matrix(1,0,0,1,0,0)"
                    //      style="transform-origin: 0px 0px; opacity: 1;"
                  >
                    {" "}
                    <path
                      d="M322,427.6c0-2.7,1.7-5,3.8-5h228c2.1,0,3.9,2.3,3.9,5v61c0,2.8-1.8,5-3.9,5h-228c-2.1,0-3.8-2.2-3.8-5Z"
                      fill="#07c597"
                    ></path>{" "}
                    <text x="393" y="465.6" font-size="18" fill="#fff">
                      New web to text
                    </text>{" "}
                    <path
                      d="M357.4,475.5h0l-3.3-3.5,20.4-21.3,3.3,3.5Zm-7.2-6.9h0l-7.4-7.7a10.8,10.8,0,0,1-2.7-5.3,12,12,0,0,1-.3-2,10.5,10.5,0,0,1,2.8-7.2l1.5-1.3a8.5,8.5,0,0,1,3.4-1.4,6.5,6.5,0,0,1,1.9-.2h.2a9.7,9.7,0,0,1,7,3.1l1.7,1.7-3.4,3.5-1.7-1.7a4.8,4.8,0,0,0-3.7-1.7h-1a6.7,6.7,0,0,0-1.8.7l-.7.7a5.4,5.4,0,0,0-1.4,3.6,5.7,5.7,0,0,0,1.6,3.9l4,4.2,17.4-18.1L371,447l-20.8,21.6Z"
                      fill="#fff"
                    ></path>{" "}
                  </g>{" "}
                </g>{" "}
                <g
                  filter="url(#shadow)"
                  className="layer"
                  data-svg-origin="1000 700"
                  transform="matrix(0.8,0,0,0.8,200,140)"
                  //    style="transform-origin: 0px 0px; opacity: 0;"
                >
                  {" "}
                  <rect
                    x="1250.8"
                    y="828.2"
                    width="415.1"
                    height="170.52"
                    rx="4"
                    fill="#fff"
                    opacity="0.95"
                  ></rect>{" "}
                  <text x="1276.1" y="876.7" font-size="24" fill="#2f2e50">
                    Patient profile
                  </text>{" "}
                  <text x="1359.6" y="930.4" font-size="18" fill="#313b59">
                    John Webb
                  </text>{" "}
                  <text x="1359.6" y="950.4" font-size="15" fill="#9ba1b7">
                    11am - 11:50am
                  </text>{" "}
                  <image
                    x="1279"
                    y="901"
                    width="66"
                    height="66"
                    href="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/avatars/john.png"
                  ></image>{" "}
                  <circle
                    cx="1338.1"
                    cy="960.7"
                    r="7.5"
                    fill="#07c597"
                    stroke="#eef7fe"
                    stroke-width="2"
                  ></circle>{" "}
                  <g className="badge">
                    {" "}
                    <rect
                      className="patient-badge"
                      x="1522.1"
                      y="923.2"
                      width="112"
                      height="26.44"
                      rx="4"
                      fill="#fac444"
                      opacity="0.3"
                    ></rect>{" "}
                    <text
                      className="pending-text"
                      text-anchor="middle"
                      x="1578"
                      y="941.9"
                      font-size="19"
                      fill="#fac444"
                      //      style="opacity: 1;"
                    >
                      Pending
                    </text>{" "}
                    <text
                      //     style="opacity: 0;"
                      className="confirmed-text"
                      text-anchor="middle"
                      x="1578"
                      y="941.9"
                      font-size="19"
                      fill="#00b387"
                    >
                      Confirmed
                    </text>{" "}
                  </g>{" "}
                </g>{" "}
                <g
                  className="font-book layer"
                  filter="url(#shadow)"
                  data-svg-origin="1000 700"
                  transform="matrix(0.8,0,0,0.8,200,140)"
                  //     style="transform-origin: 0px 0px; opacity: 0;"
                >
                  {" "}
                  <g
                    className="scd-msg"
                    data-svg-origin="1155.800048828125 597.2000122070312"
                    transform="matrix(1,0,0,1,0,26.8225)"
                    //    style="transform-origin: 0px 0px;"
                  >
                    {" "}
                    <rect
                      className="scd-msg-box"
                      rx="9"
                      x="1155.8"
                      y="597.2"
                      width="381.4"
                      height="98.1775"
                      fill="#07c597"
                    ></rect>{" "}
                    <rect
                      className="scd-msg-box-angle"
                      x="1155.8"
                      y="694.6"
                      width="28.2"
                      height="28.23"
                      fill="#07c597"
                      data-svg-origin="1155.800048828125 694.5999755859375"
                      transform="matrix(1,0,0,1,0,-26.8225)"
                      //     style="transform-origin: 0px 0px;"
                    ></rect>{" "}
                    <text
                      className="scd-msg-text"
                      x="1189.4"
                      y="639.1"
                      font-size="22"
                      fill="#fff"
                      //      style="opacity: 1;"
                    >
                      Appointment scheduled
                    </text>{" "}
                    <text
                      className="scd-msg-text"
                      x="1189.4"
                      y="667.1"
                      font-size="22"
                      fill="#fff"
                      //      style="opacity: 1;"
                    ></text>{" "}
                    <text
                      className="scd-msg-text"
                      x="1189.4"
                      y="695.1"
                      font-size="22"
                      fill="#fff"
                      //     style="opacity: 1;"
                    ></text>{" "}
                  </g>{" "}
                </g>{" "}
                <g
                  className="font-book layer"
                  filter="url(#shadow)"
                  data-svg-origin="1000 700"
                  transform="matrix(0.8,0,0,0.8,200,140)"
                  //   style="transform-origin: 0px 0px; opacity: 0;"
                >
                  {" "}
                  <g
                    className="fst-msg"
                    data-svg-origin="978.7000122070312 432.8999938964844"
                    transform="matrix(1,0,0,1,0,26.8225)"
                    //     style="transform-origin: 0px 0px;"
                  >
                    {" "}
                    <g fill="#fff" opacity="0.9">
                      {" "}
                      <rect
                        className="fst-msg-box"
                        rx="8"
                        x="978.7"
                        y="432.9"
                        width="505.9"
                        height="141"
                        data-svg-origin="978.7000122070312 432.8999938964844"
                        transform="matrix(1,0,0,1,0,0)"
                        //       style="transform-origin: 0px 0px;"
                      ></rect>{" "}
                      <rect
                        className="fst-msg-box-angle"
                        x="1460.6"
                        y="550.8"
                        width="24"
                        height="23.65"
                        data-svg-origin="1460.5999755859375 550.7999877929688"
                        transform="matrix(1,0,0,1,0,0)"
                        //      style="transform-origin: 0px 0px;"
                      ></rect>{" "}
                    </g>{" "}
                    <text
                      className="fst-msg-text"
                      x="1020.6"
                      y="498.2"
                      font-size="26"
                      fill="#2f2e50"
                      //    style="opacity: 1;"
                    >
                      Hi Dr. Wells, do you have an
                    </text>{" "}
                    <text
                      className="fst-msg-text"
                      x="1020.6"
                      y="531.2"
                      font-size="26"
                      fill="#2f2e50"
                      //    style="opacity: 1;"
                    >
                      opening for next Thursday at 11 AM?
                    </text>{" "}
                  </g>{" "}
                </g>{" "}
                <g
                  filter="url(#shadow)"
                  className="layer"
                  data-svg-origin="1000 700"
                  transform="matrix(0.8,0,0,0.8,200,140)"
                  //   style="transform-origin: 0px 0px; opacity: 0;"
                >
                  {" "}
                  <rect
                    x="155"
                    y="823.7"
                    width="288"
                    height="142.1"
                    rx="4"
                    fill="#fff"
                    opacity="0.95"
                  ></rect>{" "}
                  <text x="177" y="859.1" font-size="18" fill="#2f2e50">
                    Rate your experience
                  </text>{" "}
                  <text x="258.1" y="905.5" font-size="14" fill="#2f2e50">
                    Dr. Katherine Wells, MD
                  </text>{" "}
                  <image
                    x="176"
                    y="881"
                    width="60"
                    height="60"
                    href="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/avatars/dr-wells.png"
                  ></image>{" "}
                  <rect
                    clip-path="url(#modernize-hero-animation-rate-clip)"
                    x="252.9"
                    y="914.9"
                    width="164.5"
                    height="25.63"
                    fill="#e1e1ea"
                  ></rect>{" "}
                  <rect
                    className="rate"
                    clip-path="url(#modernize-hero-animation-rate-clip)"
                    x="252.9"
                    y="914.9"
                    width="97.934865"
                    height="25.63"
                    fill="#fac444"
                  ></rect>{" "}
                </g>{" "}
                <g
                  filter="url(#shadow)"
                  className="layer"
                  data-svg-origin="1000 700"
                  transform="matrix(0.8,0,0,0.8,200,140)"
                  //       style="transform-origin: 0px 0px; opacity: 0;"
                >
                  {" "}
                  <rect
                    x="273.4"
                    y="953"
                    width="331"
                    height="326"
                    rx="4"
                    fill="#fff"
                    opacity="0.98"
                  ></rect>{" "}
                  <rect
                    x="311.9"
                    y="1196.5"
                    width="252"
                    height="1"
                    fill="#e1e6ef"
                  ></rect>{" "}
                  <g
                    className="pointer"
                    data-svg-origin="352.8999938964844 1114.5"
                    transform="matrix(1,0,0,1,0,32.7898)"
                    //      style="transform-origin: 0px 0px;"
                  >
                    {" "}
                    <path
                      d="M384.9,1130.5c0,8.8-7.5,16-16,20-8.5-4-16-11.2-16-20a16,16,0,0,1,32,0Z"
                      fill="#07c597"
                    ></path>{" "}
                    <path
                      d="M376.3,1127.8l1.6,1.6-9.6,9.7-1.6-1.6Zm-1.6-1.7-1.6-1.6-8.2,8.3-2-1.9a2.9,2.9,0,0,1-.7-1.8,2.1,2.1,0,0,1,2.2-2.3h.1a2.4,2.4,0,0,1,1.8.7l.8.8,1.6-1.6-.8-.8a4.7,4.7,0,0,0-3.3-1.4,4.6,4.6,0,0,0-4.7,4.4v.2a4.9,4.9,0,0,0,1.5,3.3l3.5,3.6Z"
                      fill="#fff"
                    ></path>{" "}
                  </g>{" "}
                  <text x="309.2" y="1004.5" font-size="24" fill="#2f2e50">
                    Public Reviews
                  </text>{" "}
                  <text
                    className="review-number"
                    x="310.5"
                    y="1053.1"
                    font-size="44"
                    fill="#2f2e50"
                  >
                    278
                  </text>{" "}
                  <path
                    className="bar"
                    d="M319,1158.6h8.4a2,2,0,0,1,2,2v37.2H317v-37.2A2,2,0,0,1,319,1158.6Z"
                    fill="#d3d3e2"
                    data-svg-origin="323.1999969482422 1197.7999267578125"
                    transform="matrix(1,0,0,0.2642,0,881.34119)"
                    //      style="transform-origin: 0px 0px;"
                  ></path>{" "}
                  <path
                    className="bar"
                    d="M365,1158.6h8.4a2,2,0,0,1,2,2v37.2H363v-37.2A2,2,0,0,1,365,1158.6Z"
                    fill="#07c597"
                    data-svg-origin="369.1999969482422 1197.7999267578125"
                    transform="matrix(1,0,0,0.3253,0,808.15561)"
                    //     style="transform-origin: 0px 0px;"
                  ></path>{" "}
                  <path
                    className="bar"
                    d="M409.9,1143.6h8.4a2,2,0,0,1,2,2v52.2H407.9v-52.2A2,2,0,0,1,409.9,1143.6Z"
                    fill="#07c597"
                    data-svg-origin="414.09999084472656 1197.7999267578125"
                    transform="matrix(1,0,0,0.5743,0,509.90343)"
                    //     style="transform-origin: 0px 0px;"
                  ></path>{" "}
                  <path
                    className="bar"
                    d="M455.9,1119.6h8.4a2,2,0,0,1,2,2v76.2H453.9v-76.2A2,2,0,0,1,455.9,1119.6Z"
                    fill="#07c597"
                    data-svg-origin="460.09999084472656 1197.7999267578125"
                    transform="matrix(1,0,0,0.9356,0,77.13832)"
                    //    style="transform-origin: 0px 0px;"
                  ></path>{" "}
                  <path
                    className="bar"
                    d="M501.8,1066.5h8.4a2,2,0,0,1,2,2v129.3H499.8V1068.5A2,2,0,0,1,501.8,1066.5Z"
                    fill="#07c597"
                    data-svg-origin="505.9999694824219 1197.800048828125"
                    transform="matrix(1,0,0,0.9856,0,17.24832)"
                    //   style="transform-origin: 0px 0px;"
                  ></path>{" "}
                  <path
                    className="bar"
                    d="M548.7,1036.6h8.4a2,2,0,0,1,2,2v159.2H546.7V1038.6A2,2,0,0,1,548.7,1036.6Z"
                    fill="#07c597"
                    data-svg-origin="552.9000244140625 1197.7999267578125"
                    transform="matrix(1,0,0,1.0356,0,-42.64168)"
                    //  style="transform-origin: 0px 0px;"
                  ></path>{" "}
                  <text x="310.7" y="1215.9" font-size="13" fill="#c6cad8">
                    Aug
                  </text>{" "}
                  <text x="359.5" y="1215.9" font-size="13" fill="#07c597">
                    Jun
                  </text>{" "}
                  <text x="403.9" y="1215.9" font-size="13" fill="#07c597">
                    Sep
                  </text>{" "}
                  <text x="448.1" y="1215.9" font-size="13" fill="#07c597">
                    Oct
                  </text>{" "}
                  <text x="495.3" y="1215.9" font-size="13" fill="#07c597">
                    Nov
                  </text>{" "}
                  <text x="540.1" y="1215.9" font-size="13" fill="#07c597">
                    Dec
                  </text>{" "}
                  <text x="313.5" y="1239.6" font-size="14" fill="#313b59">
                    4.0
                  </text>{" "}
                  <text x="360.5" y="1239.6" font-size="14" fill="#07c597">
                    4.6
                  </text>{" "}
                  <text x="407" y="1239.6" font-size="14" fill="#07c597">
                    4.9
                  </text>{" "}
                  <text x="450.8" y="1239.6" font-size="14" fill="#07c597">
                    5.0
                  </text>{" "}
                  <text x="498.8" y="1239.6" font-size="14" fill="#07c597">
                    4.9
                  </text>{" "}
                  <text x="544.6" y="1239.6" font-size="14" fill="#07c597">
                    4.9
                  </text>{" "}
                  <rect
                    x="506.4"
                    y="984.7"
                    width="57.6"
                    height="24.36"
                    rx="4"
                    fill="#cdf3ea"
                  ></rect>{" "}
                  <text x="514.4" y="1002.4" font-size="18" fill="#019d78">
                    +10%
                  </text>{" "}
                </g>{" "}
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-12 col-md-7 text-center">
            <div
              className="wow fadeInUp"
              //  style="visibility: visible; animation-name: fadeInUp;"
            >
              <h2 className="display-3 line-center">
                We make it easy for patients to connect with{" "}
                <strong>and love</strong> your practice
              </h2>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="scroll-story">
        <div className="fake-page-container">
          <div className="story-container-upper"></div>
          <div
            className="pin-spacer"
            //  style="place-self: auto; grid-area: auto / auto / auto / auto; z-index: auto; float: none; flex-shrink: 1; display: block; margin: 0px 0px 657px; inset: 0px; position: relative; overflow: visible; box-sizing: border-box; width: 1098px; height: 986px; padding: 0px;"
          >
            <div
              className="story-container"
              // style="transform: translate(0px, 986px); inset: 0px auto auto 0px; margin: 0px; max-width: 1098px; width: 1098px; max-height: 985.5px; height: 985.5px; padding: 0px;"
            >
              <div className="story-page">
                {" "}
                <svg viewBox="0 0 376 657">
                  {" "}
                  <defs>
                    {" "}
                    <clipPath id="story-clip-angles">
                      {" "}
                      <path
                        className="clip-path-angles"
                        d="M109.6553, 5.7562 h687.985 a28.7809 28.7809 1 0 1 28.7809 28.7809 v616.7067 h-687.985 a28.7809 28.7809 1 0 1 -28.7809 -28.7809z"
                      ></path>{" "}
                    </clipPath>{" "}
                  </defs>{" "}
                  <g clip-path="url(#story-clip-angles)">
                    {" "}
                    <g className="fst-img-wrapper">
                      {" "}
                      <image
                        x="-419.725"
                        y="0"
                        width="1215.45"
                        height="657"
                        //   xlink:href="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/scroll-story/modernize-customer-story-1.jpg"
                      />
                    </g>{" "}
                  </g>{" "}
                </svg>
                <div
                  className="story-text story-text--title"
                  // style="opacity: 1;"
                >
                  <div> Kyle Matthews</div>
                  <div> CEO, Phoenix Heart</div>
                </div>
              </div>
              <div className="story-page">
                {" "}
                <svg viewBox="0 0 376 657">
                  {" "}
                  <defs>
                    {" "}
                    <clipPath id="story-clip-2">
                      {" "}
                      <rect
                        className="clip-path-rect"
                        x="0"
                        y="0"
                        width="376"
                        height="657"
                        data-svg-origin="0 0"
                        transform="matrix(1,0,0,1,0,657)"
                        //  style="transform-origin: 0px 0px;"
                      ></rect>{" "}
                    </clipPath>{" "}
                  </defs>{" "}
                  <g clip-path="url(#story-clip-angles)">
                    {" "}
                    <g clip-path="url(#story-clip-2)">
                      {" "}
                      <image
                        x="-419.725"
                        y="0"
                        width="1215.45"
                        height="657"
                        //   xlink:href="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/scroll-story/modernize-customer-story-3.jpg"
                      ></image>{" "}
                    </g>{" "}
                  </g>{" "}
                </svg>
                <div
                  className="story-text story-text--quote"
                  //   style="opacity: 1;"
                >
                  {" "}
                  “I can communicate with my patients, better inform my
                  patients, and get feedback to better enhance our practice.”
                </div>
              </div>
              <div className="story-page">
                {" "}
                <svg viewBox="0 0 376 657">
                  {" "}
                  <defs>
                    {" "}
                    <clipPath id="story-clip-3">
                      {" "}
                      <rect
                        className="clip-path-rect"
                        x="0"
                        y="0"
                        width="376"
                        height="657"
                        data-svg-origin="0 525.5999755859375"
                        transform="matrix(1,0,0,1,0,0)"
                        //   style="transform-origin: 0px 0px;"
                      ></rect>{" "}
                    </clipPath>{" "}
                  </defs>{" "}
                  <g clip-path="url(#story-clip-angles)">
                    {" "}
                    <g clip-path="url(#story-clip-3)">
                      {" "}
                      <image
                        x="-419.725"
                        y="0"
                        width="1215.45"
                        height="657"
                        // xlink:href="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/scroll-story/modernize-customer-story-2.jpg"
                      />
                    </g>{" "}
                  </g>{" "}
                </svg>
                <div
                  className="story-text story-text--fst-percentage"
                  //  style="opacity: 0; transform: translate(0%, -50%) translate(0px, 10px);"
                >
                  <div> 13</div>
                  <div> Physicians</div>
                </div>
                <div
                  className="story-text story-text--scd-percentage"
                  //  style="opacity: 0; transform: translate(0%, -50%) translate(0px, 10px);"
                >
                  <div> 4.5/5</div>
                  <div> Online reviews average star rating</div>
                </div>
              </div>
            </div>
          </div>
          <div className="story-container-down"></div>
          <div className="content-space"></div>
        </div>
      </section> */}
      <section className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-7 text-center">
            <div
              className="wow fadeInUp"
              //    style="visibility: visible; animation-name: fadeInUp;"
            >
              <h2 className="display-3 line-center">
                <strong>Every patient interaction</strong> with your practice
                becomes easier
              </h2>
              <p>
                Today’s patients want easier access — to book visits, ask
                questions, pay bills — and 72% tell us they’d switch providers
                for a better experience. Our all-in-one platform simplifies it
                all, for happier patients and less work for staff.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row my-4 my-md-5 justify-content-around">
          <div className="col-12 col-md-7 order-md-1">
            <div className="animation-container">
              {" "}
              <svg
                id="modernize-quickpath"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 900 1000"
                //   style="opacity: 1;"
              >
                {" "}
                <defs>
                  {" "}
                  <clipPath id="modernize-quickpath-back-card-clip">
                    {" "}
                    <path d="M55.7,295.7H415.4a11.4,11.4,0,0,1,11.4,11.4h0V718.2a11.4,11.4,0,0,1-11.4,11.4H55.7a11.4,11.4,0,0,1-11.4-11.4h0V307a11.4,11.4,0,0,1,11.4-11.3Z"></path>{" "}
                  </clipPath>{" "}
                  <clipPath id="modernize-quickpath-front-card-clip">
                    {" "}
                    <path d="M125.4,363.2H484.2a11.4,11.4,0,0,1,11.4,11.4h0V786.7a11.4,11.4,0,0,1-11.4,11.4H125.4A11.4,11.4,0,0,1,114,786.7h0V374.6a11.4,11.4,0,0,1,11.4-11.4Z"></path>{" "}
                  </clipPath>{" "}
                  <clipPath id="modernize-quickpath-map-clip">
                    {" "}
                    <path d="M571.2,334.4a7.4,7.4,0,0,1,7.4-7.4H859.5a7.4,7.4,0,0,1,7.4,7.4h0V524.1H571.2Z"></path>{" "}
                  </clipPath>{" "}
                </defs>{" "}
                <path
                  d="M360,435.7V277.2c0-73.6,27.8-143,78.3-195.3S557.4,0,630,0,770.7,29.1,821.8,82s78.3,121.6,78.3,195.2V567.5H357V435.7Z"
                  fill="#2c98f7"
                  opacity="0.05"
                ></path>{" "}
                <path
                  className="floating-layer"
                  d="M3,868.1V709.6c0-73.6,27.8-143,78.3-195.3s119.1-82,191.6-82,140.7,29.1,191.8,82S543,636,543,709.7V1000H0V868.1Z"
                  fill="#2c98f7"
                  opacity="0.05"
                  data-svg-origin="0 432.29998779296875"
                  transform="matrix(1,0,0,1,-0.41,12.9909)"
                  //  style="transform-origin: 0px 0px;"
                ></path>{" "}
                <g
                  className="floating-layer"
                  fill="#d9dbe6"
                  data-svg-origin="433.6999816894531 711.2000122070312"
                  transform="matrix(1,0,0,1,1.2299,-12.9909)"
                  //    style="transform-origin: 0px 0px;"
                >
                  {" "}
                  <circle cx="507.4" cy="736.9" r="1.7"></circle>{" "}
                  <circle cx="531.4" cy="736.9" r="1.7"></circle>{" "}
                  <circle cx="555.4" cy="736.9" r="1.7"></circle>{" "}
                  <circle cx="579.4" cy="736.9" r="1.7"></circle>{" "}
                  <circle cx="603.4" cy="736.9" r="1.7"></circle>{" "}
                  <circle cx="627.4" cy="736.9" r="1.7"></circle>{" "}
                  <circle cx="651.4" cy="736.9" r="1.7"></circle>{" "}
                  <circle cx="675.4" cy="736.9" r="1.7"></circle>{" "}
                  <circle cx="699.4" cy="736.9" r="1.7"></circle>{" "}
                  <circle cx="507.4" cy="760.9" r="1.7"></circle>{" "}
                  <circle cx="531.4" cy="760.9" r="1.7"></circle>{" "}
                  <circle cx="555.4" cy="760.9" r="1.7"></circle>{" "}
                  <circle cx="579.4" cy="760.9" r="1.7"></circle>{" "}
                  <circle cx="603.4" cy="760.9" r="1.7"></circle>{" "}
                  <circle cx="627.4" cy="760.9" r="1.7"></circle>{" "}
                  <circle cx="651.4" cy="760.9" r="1.7"></circle>{" "}
                  <circle cx="675.4" cy="760.9" r="1.7"></circle>{" "}
                  <circle cx="699.4" cy="760.9" r="1.7"></circle>{" "}
                  <circle cx="507.4" cy="784.9" r="1.7"></circle>{" "}
                  <circle cx="531.4" cy="784.9" r="1.7"></circle>{" "}
                  <circle cx="555.4" cy="784.9" r="1.7"></circle>{" "}
                  <circle cx="579.4" cy="784.9" r="1.7"></circle>{" "}
                  <circle cx="603.4" cy="784.9" r="1.7"></circle>{" "}
                  <circle cx="627.4" cy="784.9" r="1.7"></circle>{" "}
                  <circle cx="651.4" cy="784.9" r="1.7"></circle>{" "}
                  <circle cx="675.4" cy="784.9" r="1.7"></circle>{" "}
                  <circle cx="699.4" cy="784.9" r="1.7"></circle>{" "}
                  <circle cx="507.4" cy="808.9" r="1.7"></circle>{" "}
                  <circle cx="531.4" cy="808.9" r="1.7"></circle>{" "}
                  <circle cx="555.4" cy="808.9" r="1.7"></circle>{" "}
                  <circle cx="579.4" cy="808.9" r="1.7"></circle>{" "}
                  <circle cx="603.4" cy="808.9" r="1.7"></circle>{" "}
                  <circle cx="627.4" cy="808.9" r="1.7"></circle>{" "}
                  <circle cx="651.4" cy="808.9" r="1.7"></circle>{" "}
                  <circle cx="675.4" cy="808.9" r="1.7"></circle>{" "}
                  <circle cx="699.4" cy="808.9" r="1.7"></circle>{" "}
                  <circle cx="435.4" cy="712.9" r="1.7"></circle>{" "}
                  <circle cx="459.4" cy="712.9" r="1.7"></circle>{" "}
                  <circle cx="483.4" cy="712.9" r="1.7"></circle>{" "}
                  <circle cx="435.4" cy="736.9" r="1.7"></circle>{" "}
                  <circle cx="459.4" cy="736.9" r="1.7"></circle>{" "}
                  <circle cx="483.4" cy="736.9" r="1.7"></circle>{" "}
                  <circle cx="435.4" cy="760.9" r="1.7"></circle>{" "}
                  <circle cx="459.4" cy="760.9" r="1.7"></circle>{" "}
                  <circle cx="483.4" cy="760.9" r="1.7"></circle>{" "}
                  <circle cx="435.4" cy="784.9" r="1.7"></circle>{" "}
                  <circle cx="459.4" cy="784.9" r="1.7"></circle>{" "}
                  <circle cx="483.4" cy="784.9" r="1.7"></circle>{" "}
                  <circle cx="435.4" cy="808.9" r="1.7"></circle>{" "}
                  <circle cx="459.4" cy="808.9" r="1.7"></circle>{" "}
                  <circle cx="483.4" cy="808.9" r="1.7"></circle>{" "}
                  <circle cx="699.4" cy="712.9" r="1.7"></circle>{" "}
                  <circle cx="723.4" cy="712.9" r="1.7"></circle>{" "}
                  <circle cx="699.4" cy="736.9" r="1.7"></circle>{" "}
                  <circle cx="723.4" cy="736.9" r="1.7"></circle>{" "}
                  <circle cx="699.4" cy="760.9" r="1.7"></circle>{" "}
                  <circle cx="723.4" cy="760.9" r="1.7"></circle>{" "}
                  <circle cx="699.4" cy="784.9" r="1.7"></circle>{" "}
                  <circle cx="723.4" cy="784.9" r="1.7"></circle>{" "}
                  <circle cx="699.4" cy="808.9" r="1.7"></circle>{" "}
                  <circle cx="723.4" cy="808.9" r="1.7"></circle>{" "}
                </g>{" "}
                <g
                  className="floating-layer"
                  filter="url(#shadow)"
                  data-svg-origin="80 170"
                  transform="matrix(1,0,0,1,-0.8199,8.6606)"
                  //    style="transform-origin: 0px 0px;"
                >
                  {" "}
                  <rect
                    x="80"
                    y="170"
                    width="740"
                    height="564"
                    rx="8"
                    fill="#f6f8fb"
                  ></rect>{" "}
                  <path
                    d="M88,170H812a8,8,0,0,1,8,8v53H80V178A8,8,0,0,1,88,170Z"
                    fill="#4a5472"
                  ></path>{" "}
                  <rect
                    x="104"
                    y="257.2"
                    width="237.3"
                    height="326.81"
                    rx="5"
                    fill="#eff3f8"
                  ></rect>{" "}
                  <rect
                    x="104"
                    y="602.8"
                    width="237.3"
                    height="131.58"
                    rx="5"
                    fill="#eff3f8"
                  ></rect>{" "}
                  <rect
                    x="362"
                    y="257.2"
                    width="237.3"
                    height="326.81"
                    rx="5"
                    fill="#eff3f8"
                  ></rect>{" "}
                  <rect
                    x="362"
                    y="602.8"
                    width="237.3"
                    height="131.58"
                    rx="5"
                    fill="#eff3f8"
                  ></rect>{" "}
                  <path
                    d="M803.2,602.8H625a5,5,0,0,0-5,5V729.4a5,5,0,0,0,5,5H803.2Z"
                    fill="#eff3f8"
                  ></path>{" "}
                  <path
                    d="M620,262.2V579a5,5,0,0,0,5,5H803.2V257.2H625A5,5,0,0,0,620,262.2Z"
                    fill="#eff3f8"
                  ></path>{" "}
                  <text x="110.5" y="209.2" font-size="19" fill="#fff">
                    Services
                  </text>{" "}
                </g>{" "}
                <g
                  className="floating-layer"
                  filter="url(#shadow)"
                  data-svg-origin="719.0499877929688 425.1499938964844"
                  transform="matrix(1,0,0,1,0.8199,8.6606)"
                  //   style="transform-origin: 0px 0px; opacity: 1;"
                >
                  {" "}
                  <path
                    d="M575.6,326.8h287a4,4,0,0,1,4,4v276a4,4,0,0,1-4,4h-287a4,4,0,0,1-4-4v-276A4,4,0,0,1,575.6,326.8Z"
                    fill="#fff"
                  ></path>{" "}
                  <path
                    d="M571.2,334.4a7.4,7.4,0,0,1,7.4-7.4H859.5a7.4,7.4,0,0,1,7.4,7.4h0V524.1H571.2Z"
                    fill="#e8ecf4"
                  ></path>{" "}
                  <g
                    opacity="0.1"
                    clip-path="url(#modernize-quickpath-map-clip)"
                  >
                    {" "}
                    <g
                      className="map-SM"
                      data-svg-origin="719.0499877929688 425.15000915527344"
                      transform="matrix(1.0026,0,0,1.00264,-1.86953,-1.1224)"
                      //    style="transform-origin: 0px 0px;"
                    >
                      {" "}
                      <path d="M580.3,360.8h.8a4.1,4.1,0,0,0,1.1-.7c-.3-.3-.5-.9-.8-1l-6.4-1.5-3.4-.7v1.8h.3Z"></path>{" "}
                      <path d="M574.2,486.2c2.8-3.9,5.6-7.8,8.3-11.8l.5-.7c.1-.1.1-.1.1-.2a3,3,0,0,0-.2-1.3H582c-.2,0-.3,0-.3.1a9.5,9.5,0,0,0-1.5,2c-2.7,3.9-5.4,7.8-8.3,11.8l-.3-.2v2.4l.5.5a2.8,2.8,0,0,0,.9,1h1.3c0-.4,1-.5-.1-1.3s.2.3.2.6a.8.8,0,0,0-.2-.6,1.6,1.6,0,0,1-.3-.9v-.4A2,2,0,0,1,574.2,486.2Z"></path>{" "}
                      <polygon points="571.6 521.9 573.9 523.6 577.8 523.6 571.6 518.9 571.6 521.9"></polygon>{" "}
                      <path d="M866.6,460v-5.8l-9.9,9.1h-.1l-6.7-7.5L865.3,441h0l1.3,1.3v-6l-1,1-3.9-3.5,4.9-4.5v-3.3l-6.5,6-6.6-7,11.7-10.8,1.4,1.5V412l-7-6.6,7-6.2-1.5,1.3,1.5-1.4V396l-8.2,7.3-6.8-6.2,10.9-10.3,4.1,4.3v-3.4l-14.2-14.8,4.2-4,10,10.5v-3.5l-8.2-8.6,7.1-6.8,1.1,1.2V349.5l-94.9,92.6-11.6,18.4-5.2,3.2-1-.5-17.6-16.8-.5-.8.4-.8,13.2-13.7,16.5,17.2,1.5-1.9-17.3-18,3.9-3.7,1.1-1.7h0l-.3-.3-2,.7-3.9,3.6-13.4-14.2,11.8-14.3L770,422.6l2,.9.3-1.1-62.7-67.2L719.9,345,778,405.4l3.6.9,1.8-1.3,43.9-43.8v-4.9l-13.3-14.5,10.9-9.7h.1l14,15.3,1.6.9,14-10.5,1.8-.9,6.8-1.2,3.3-2.3v-2.6l-3-3.9h0l1.6,2.1.2.6.2.7v.6l-.2.6-.2.6-.4.6-.5.5-.4.3h-.4l-8.9,2-1.4-.2-8.1-8.7h-2.5l9.6,10.4-11.4,8.6-14.2-15.3,3.8-3.7H827l-2,1.9-1.8-1.9h-3.3l3.4,3.6L812.5,340,800,326.8h-3.3l14.2,15-8.7,7.9-4.9-4.7h-1.4l.2,1.2,5.3,4.9-7.2,6.8-15-15.9,16.2-15.2h-3.5l-14.3,13.4-7.4-8.4,5.3-5h-2.7l-3.9,3.6-3.4-3.6h-3.2l13.3,14.7-16.2,16.7-15.3-15.6,16.6-15.8h-3.5L742.4,341l-8.7-9.7,4.6-4.5h-10l-11.2,10.5-5.3-6,4.7-4.5h-2.9l-3.1,3.1-2.8-3.1h-3.3L715.1,339l-10.3,10.7-33.9,22.9-2,1.9-8,11.5-5.3-5.8,20.3-19.4,1.8,1.6,3.5,1.4,1-.5,14.7-14.1.6-1.6.2-1.8-.6-1.6-17-17.4h-3.4l.4.5-15.2,14.3-5.2-5.5,9.6-9.3h-2.6l-13.8,13.5-2.5,1.5-14.7,14-6.4-6.7,23.4-22.3h-3.6l-4.1,3.7-3.7-3.7h-3.9l5.4,5.3-15,15.5-19.6-20.8h-8.6l23.3,25h-.1l-20.8,20h0l-.3.3h-.1l-.3.4-.3,1,.8,2.6L598,374l.8,2,10.3,11.3.8,1.4-26.7-5.5,5.3-27.3-.6-1.3h-.7l-.5,1-3.2,15.6-11.9-2.6v2.4l11.2,2.4-1.9,9.1-9.3-1.9v2.4l8.8,1.8-1.5,7.1-2.5,1.7-4.8-1v4.1l37.3,7.3-1.5.6L571.6,398v4.1l63,12.9-18.8,24.3-1.7.7-42.5-8.6v2.4l41.9,8.3L605,453.5l-1.8.7-31.7-6.5V450l11,2.3-2.9,14.3-8.1-1.6v2.4l18.8,3.8h.1l-18.9,25v11l.5-.7h.1L594,523.6h8l-4-2.9,6.4-7.9,17.3,10.8h4.9L605.8,511l5.1-6.9,24.6,14.2-2.4,5.3h2.6l7.9-17.8,4.9-2.7h.6l39.9-8.4,10.2-5.8L731.1,451v-.2l5.4,5.5-30.8,36.9L687,503.5l-32.4,4.3-6.3,3.7-5.4,12.2h2.6l3.4-8.9,3.9-3.5-2.9,12.4h2.4l3.1-12.9.7-.9,6.8-1.4-3.4,15.2H662l3.3-14.5,1.5-1.4,6.2-.6-3.8,16.5h2.4l3.5-15.4,1.9-1.6,5.6-.2-3.7,17.2h2.4l3.5-16.4L686,506l4.5-.8.8.4.2.2.4,3.6-3.4,14.2h2.4l3.4-14.4L701,511l-2.8,12.6h2.4l2.7-12,6.9,1.4-2.5,10.6h2.4l2.6-9.9,6.7,1.3-2,8.6h2.4l6.7-28.7,23.3,5.7-5.8,23h4.2l5.4-21.8h.5l2,1.2-4.6,20.7h4.2l3-13.5,7.3,1.7-2.7,11.8h2.4l2.6-11.3,7.2,1.7-2.4,9.6h2.4l2.3-9.1,6.1,1.4h.4l-1.7,7.6H785l1.3-5.7.6-1.1,2,.3h0l3.1,3.2.2,1.1-.7,2.2h2.4l.4-1,1,1h3.3l-3.1-3.2,5.5-5.2,8,8.4h3.3l-9.6-10,13-12.3,15.7,16.6-5.9,5.7h4.3l3.6-3.5,3.4,3.5h3.3L772.6,452l-.8,1.2h-.1l-.2.4v.5h.1l3.4,3.5-9.2,9.2,1-5-1,5h-.1l1.1-5.4,7.2-13.4,26.6-26.3,1.4,4,64.5,68.6v-3.2h-.2l.2-.2v-3.3l-1.3,1.3-7.1-7.2,8.4-7.9v-3.3l-1.2,1.2-7.2-6.9,7.2-6.1,1.2,1.2Zm-93-61.9-8.8-9.1,3.4-3.3,1.9,1.8.3.2h1v-1.5l-1.8-2,5.6-5.2,5.9,6.6h.1l-.3.8-3.6,4.8h0l-3.6,6.6Zm10.4,2.3-3.4-3.8-1.3-.6h-.2l-.2.2h0l-.2.9.6.8,3.1,3,.5.7-.2.9-4.4.6-3.4-3.7,1.7-2.5,1.9-5,4.5-3.8,6.4,6.3-5.4,6Zm14.5-14.8-7.4,6.8-4.3-4.6,7-7.3,4.7,5.1Zm14-41.8,7.6,8.2-4.6,4.6.4.6,2.6-1.3,2.8-2.6,4.5,4.7v1.1l-8.3,8.1-.8-.9.8.9h0l-1.2-1.3.4.4-2.2-2.2-1.6-.4-.4.7.7,1,3.1,3.2-6.4,6.1-10-10.5,7.2-6.5.6-3.3-.8-.9-2.7-2.2,8.4-7.5Zm-16.1,15.3h0l6.6-6.2,2.9,2.4v1l-7.2,6.5-2.8-3,.5-.7Zm-2.3,2.2,7.2,8v.3l-.2,1-3.4,3.7-.8,1.3h0v.2l.3.3h0l1.9-.6,3.8-4.1,5.1,5.2-8,7.6-3.7-3.6h-4.8l-6.2,6.2-8.4-9.2,5.7-5.2h0l3.4,3.8h0l1.7.5.3-.7-4.1-5,10.2-9.6Zm-16.6-17.7,14.9,16-9.5,9-14.3-15.4,8.9-9.6Zm-10.4,10.7,14.5,15.6-6.3,5.8-14-15.5,5.8-5.9Zm-7.6,7.5,14,15.5-10.2,9.6-13.8-15.2,10-9.9Zm-17.1-17.5,15.2,15.5-10.2,9.8-15.1-15.5,10.1-9.8Zm-12-9.7L732,333l8.4,9.3-9.3,10-9.6-9.1,8.9-8.6ZM739,420l-13.3,13.9-5.9-5,14-14.5L739,420Zm-39.7.1,5.4-5.1,8.8,9.5h0l-.2.2h0l-14-4.7Zm12.7,9h-.2l-.4-.2.6.2Zm-12.5,17.3-10.2-8.6v-.3l14.5,3.3-4.3,5.6Zm.2,3.8,8.9,8.6h-.1v.2l-8.5-7.8-.3-.7v-.3Zm-17.5,29.5h0l-1.1-9.2v-.6l11,8.5-10.4,6.3h-1l1.1-2.7.3-2.3Zm-14-25.2,5-6.4L689,460.3l-5,6.8-15.8-12.6Zm6.5-51.9,5.2,2.8.5.4.2.7h0l-2.2,9.5-17.6-4h0l10.7-10,1.5-.3h0l1.7.9Zm42.6,24h0l-2-3.5,2,3.5-2.4-4,.2.3-1.2-1.5L728,408l4.2,4.6-13.7,14.2-1.2-.2Zm-4.6-6.5-6.1-6.5v-1L720,399.3l6.8,7.4-14.1,13.4Zm-1.9-15.5-6.7,6.7-8.8-9.9,13.1-13.5,9.6,9.5-7.2,7.2Zm-14.9,14.6-15.1-2.9,2.2-9.6,15.8,3.3.5.2,3.4,2.6v.6l-5.7,5.4-1.2.4Zm5.8,5.9v.4l-10.4-2.7v-.6l10.4,2.9Zm-8-25.5-9.4-9.9,14-13.6,8.7,9.8-13.3,13.7Zm3.3,7.1-.4.3-22.3-7.6,8.3-8.1L697,406.7Zm-32.8,14.4h0l22.7,4.7-5.2,7.3-1.5.6h-.4L663.6,430h-.3l-.8-1,1.7-7.9Zm20.3,15.8,5,4.1h0l-8,10.4-6.8-5.4,6.3-8.2h.1v-.2l.4-.4.3-.2h.1l.4-.2Zm-5-.9-6.7,8.7-17.2-13.6h0l.3-.5,23.6,5.4Zm-21.9-.2,13.7,10.7-5,6.5-24.7-19.1,3.6-4.4.8-.2,5.1.5.9.5,5.6,5.5Zm30,20.4-5.5-4.3,7.9-10.4,8,6.7-7.6,10.2-2.8-2.2Zm15.2-18.5-19.2-3.1,5.1-7.4,1.3-.6,15.3,4,5.8,2.7-5.2,5.1h-1l-2.1-.8Zm8-9-.9-.4,1.1.4Zm13.1,9.7-11.4-9.1,11.4,9.1Zm21.9-41.8-11.9,14.3-4.2-4.5,13.4-12.8,2.7,3Zm-11.4-12.5h.1l7.4,8.2L728.5,405l-6.9-7.5,12.8-13.4-12.9,13.4,12.9-13.4Zm-1.6-1.8L720,395.6l-9.7-9.6,13.3-13.8,9.2,10.1Zm-11-11.6-13.1,13.5-9-10.1,13.2-12.3,8.9,8.9Zm-21.3-9.5,7.6-5.1,2.9,3.1-12.8,13.1-5.4-6,7.7-5.1Zm-9.7,6.4,5.6,6.4-14,13.7-8-8.7,16.4-11.4Zm-26,24.5,7.9-11.4,8.3,8.9-9.1,8.7-7-5-.2-.9v-.3Zm-3,3.3.3-.2.5-.2h.5l7.1,5-11.6,10.6-1.8.5-8.2-1.9,13.2-13.8Zm-4.8-4.3-15,15.7-1.5.5L612,400.8l1.7-8.7,21.3,4.5,1.7,1,1.9,2.2,2,1.1,2.2-.4,12.1-11.4,2.1,2Zm-15-16.3-13.3,12.5-5.5-6.2,12.7-11.7,6.1,5.4Zm-.8-10.1,12.7-12.1,4.7,4.7.2.6-.6.9-11.6,11.9-5.4-6Zm-3.4,16.6,5.3-5,6.2,6.7-12,11-3.3-.4-4.1-4.9,7.9-7.4Zm13.2,3.5,2.7,2.9h0l-11.8,11.1-1.4.2-.4-.3-1.7-2.2L651,384.8Zm3-6.3-6.1-6.3,12.4-12.1.9-1.3v-1.6l.5-1.7,4.3-4,8.3,7.6L654,378.5Zm41.6-32.4.2.4-.3,1.4-15.1,14.7h-1.6l-2.3-2.2,17.1-16.5h0l2,2.3ZM685,336.3l.5-.2.9.6,5.5,5.5-17.2,16.5-8.5-7.9,1.7-.8h.9l4-2L685,336.3Zm-12.1-1.7,5.6-5.4,5.5,5.5-13.8,13.1H668l-.3-.2h-.1l-4.1-4.4,9.4-8.6Zm-10.3,10.5,4,4.3-6.1,6.3-4.3-4.4,6.4-6.2Zm-13.4-3,2-.4,4.4-4.1,6.1,6.6-6.2,6.2h-.2l-6.9-7.2L648,342Zm-4,5,3.8.2,3,3.2.2.4-12.7,12-5.1-5.4,10.8-10.4ZM635,367.8l-12.9,11.8-5.4-5.8,12.7-12,5.6,6Zm-13.2-14.1,6.3,6.8L615,372.8l-5.6-5.9,12.4-13.2Zm-21,21.1-.6-.8,7-6,23.2,25.1L615,389.9h-.5l-.4-.3-13.3-14.8Zm9,25-.3.2h-1.1l-27.6-5.4,1.9-9,28.7,5.9-1.6,8.2Zm23.3,10.6-21.6-4.5-.3-.3v-.2h1.6l25,5.8v.4l-4.7-1.1Zm.7,16,7.3-9.2,1.3-.7h.5l18.9,4.1-1.7,7.9-1,.3-13.2-2.1-2.4.9-3.8,4.7-6.5-5.1.6-.8Zm-3.2,4,33.3,25.7-6.4,7.8-32.7-26.1,5.8-7.4Zm-9.2,11.8,2-2.6,32.7,26.1-5.6,7.3-32.9-25.7,3.8-5.1Zm-5.2,7,31.6,24.7.9,1.5-5,6.7-33.1-25.8,5.6-7.1Zm22.9,32.3-11.8,16.2-7.6-5,12.9-16.3,6.1,4.9.4.2Zm-30-23.3,21.4,16.6-5.2,7.2-21.6-16.8,5.4-7Zm14.7,25.7-6.2,7.3-21.2-16.8,5.8-7.3,21.6,16.8Zm-40.9-16.6-.9-.3,2.9-14.5,18,3.5-10.1,12.2-1.8.7-8.1-1.6ZM596,519.4l-21.1-16.5,6.2-8.1,21.4,16.5-6.5,8.1Zm8-10-21.5-16.5h0l5.2-7,21.4,16.6-5.1,6.9Zm6.5-8.8L589.1,484l5.8-7.7,21.2,16.8-5.6,7.5ZM639,510l-2.5,6.1-24.2-14,5.5-7.3L640,507.5l-1,2.5Zm4.2-9.9-1.7,4.4-.9.3-11.3-5.9L640.9,483l4.6,3.8.2.4v1.3l-1.2,2.8-1.3,8.8Zm2.6-5.9-.3,2,.3-2Zm-.9,7.4,1.1-8.5,1.8-5.6V487l-2-3.4,20-25.9,1.5,2,5.5,35.4-27.8,6.5Zm27.7-21.1-3-19.6.9.4,7.8,6.4.7,1.3,1.4,11-.8,2.7-3.9,3.1-2.2.4-.9-5.7Zm26.4,5.1-12.2,7.1-11.7,2.1-1.2-6.8,12.1-2,4.7-2.7,3.1-3.6,6.2,4.4-1,1.5Zm8-9.4-4.4,4.9-16.7-12.4,4.9-6.8,16.8,13.6-.6.7Zm2.4-2.4L692.3,460l5.5-7.5,16.8,15.4h0l-5.2,5.9ZM721.7,459v.3h0l-3.9,4.7-16.3-16.1L706,442l15.7,16.4v.6Zm1.9-2.1-15.8-16.6,5.5-5.6L729.6,449l-6,7.9Zm9.8-14-5.6-6.9v-.9h.1v-.3h.2l12.4-12.6h0l7.3,7h-.2L734,443.7l-.6-.8Zm5.2,14.7,11.8,10.5-.2.3L733,464.2l5.6-6.6Zm-12.8,14.8,4.6-5.2.3.2-1.5,5.8-3.4-.8Zm-9.2,11.1.3.2-1.3,5.8-2.5-1.2,3.5-4.8Zm-22.3,22.6v-.3h0l-.4-.8v-.2l2.5-1.1-2,2.4Zm7.2,2.6-5.3-1.4,3.3-5.3,4.1-3.2-2.1,9.9Zm10.7-4.3-1.5,6.3h0l-6.9-1.4,2.7-12.5,3.3-4.6,2.5-1.7h.3l1.8,1,.5,1-2.7,11.8Zm11-5.5h0l-3.3,13.8-6.9-1.5,4.3-18.5,6.9,1.7-1,4.5Zm1.6-6.8-7-1.7,1.6-6.9,7,1.6-1.6,7Zm-6.6-11.3,4.7-6.1.8-.3h.2l4.8,1.1-1.8,7.3-8.7-2ZM751.1,495l-.7,2.9h-.9l-16.3-3.9,16.3,3.9h0L728,492.9l-.7-1.2,1.4-5.5.8-.3,22.1,5.1.5.3-1,3.7Zm1.6-6.8-1.2.4-22.3-5.2,1.8-7.3,23.1,5.8h0l-1.4,6.3ZM732,473.9h-.5l1.8-7.1,15.7,3.8,3.8.3,2.9,2.9v.5l-1.1,5.3L732,473.9Zm25,25h0l-.8.9h-.4l-1.4-.8v-.4l4.6-20.1.2-.3h.3l.4,5.7L757,498.9Zm10.8,4.8-1,4.6-.8,1h-.6l-6.1-1.4,5.8-29.6h0l12,12.4-4.6,4.5-4.7,8.5Zm9.8,1.5-1.6,6.5-7.1-1.7,1.1-5.5,4.2-7.8,4.1-4.2,5.4,4.9-4.7,5.3-1.4,2.5Zm8,8.6-7.3-1.6,1.3-5.3,6.1,6.7v.2Zm9.9,3.4-1.7,1.6-13.2-14.4,4.7-5.2,14,14.3-3.8,3.7Zm2.4-34.4,16.2,16.8-13,12.3-15.7-16.1,5.3-5.2h.1l1.1,1.3-1.1-1.3h-.1l5.4,5.7,1.7,1.2-.6-.3-3.1-3.1,3.1,3.1.6.3h.7V496l-4.5-4.8-.7-3.6,4.2-4.6.5-.2Zm-30.1-14.3h0l7.4-7.1,1.4-1.9,19.5,21.3-19.4-21.3h0l19.4,21.3-5.9,6.4-9.7-9.6-1.5-.3h-.1l.3,1.5h0l9.6,9.4-5.3,5.3-17.9-18.7-.3-1.2,2.5-5.1Zm94-31,1.9,1.7-15.4,15-4.1-4.5,15.6-14,2,1.8Zm-3.5-3.7-7.1,6.5-6.2-7.4,6.7-6.2,6.6,7.1Zm5.2-21.3-11.6,10.8-5.6-5.9,11.4-10.2,5.8,5.3Zm-23.7-27.8,10.8-10.2,10.6,11-10.9,10.3-10.5-11.1ZM828.5,397l1.3-1.6,1.5-2.7,6.5-6.1,18.6,18.5-11.7,10.5-16.7-18,.5-.6Zm-2,2.6,22.7,24.3v2l-5.7,5.2-22.9-25.6,6-5.9Zm-7.8,7.3,30.9,34.9-7.1,6.1L812,414l6.7-7.1Zm7.2,41.2-21.3-22.7v-4.1l5.5-5.5,30.6,33.7-7.3,6.4-7.4-7.8Zm37.3,25.6.2.3-7.4,6.7-21.3-22.9,7.6-6.5,20.9,22.4Z"></path>{" "}
                      <path d="M571.6,469.3v2.9l.9-1.1a2.1,2.1,0,0,0,.5-1.1.9.9,0,0,0-.4-.7A.9.9,0,0,0,571.6,469.3Z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                  <path
                    d="M571.2,334.4a7.4,7.4,0,0,1,7.4-7.4H859.5a7.4,7.4,0,0,1,7.4,7.4h0v81.3H571.2Z"
                    fill="#fff"
                    opacity="0.25"
                  ></path>{" "}
                  <path
                    d="M587.8,341.8a1.8,1.8,0,1,0,1.8,1.8h0A1.7,1.7,0,0,0,587.8,341.8Zm0,7.4a1.8,1.8,0,1,0,1.8,1.8h0A1.7,1.7,0,0,0,587.8,349.2Zm-1.8,9.2a1.8,1.8,0,1,1,1.8,1.8h0A1.7,1.7,0,0,1,586,358.4Zm9.2-9.2A1.8,1.8,0,1,0,597,351h0a1.7,1.7,0,0,0-1.8-1.8Zm-1.8-5.6a1.8,1.8,0,1,1,1.8,1.8h0a1.7,1.7,0,0,1-1.8-1.8Zm1.8,13a1.8,1.8,0,1,0,1.8,1.8h0a1.7,1.7,0,0,0-1.8-1.8Z"
                    fill="#fff"
                  ></path>{" "}
                  <text
                    className="font-book"
                    x="592"
                    y="588.8"
                    font-size="18"
                    fill="#828aa3"
                  >
                    Edited 2w ago
                  </text>{" "}
                  <text x="592" y="563.8" font-size="26" fill="#3b435b">
                    Santa Monica
                  </text>{" "}
                  <g
                    className="map-title"
                    data-svg-origin="680 386.79998779296875"
                    transform="matrix(1,0,0,1,0,1.6894)"
                    //    style="transform-origin: 0px 0px; opacity: 0.8311;"
                  >
                    {" "}
                    <path
                      d="M688,386.8h63a8,8,0,0,1,8,8v62a8,8,0,0,1-8,8H688a8,8,0,0,1-8-8v-62A8,8,0,0,1,688,386.8Z"
                      fill="#07c597"
                    ></path>{" "}
                    <text x="700" y="435.8" font-size="26" fill="#fff">
                      SM
                    </text>{" "}
                  </g>{" "}
                </g>{" "}
                <g
                  className="floating-layer card"
                  filter="url(#shadow)"
                  data-svg-origin="236.29999923706055 504.95001220703125"
                  transform="matrix(1,0,0,1,-1.0249,-10.8257)"
                  //   style="transform-origin: 0px 0px; opacity: 1;"
                >
                  {" "}
                  <path
                    d="M55.7,295.7H415.4a11.4,11.4,0,0,1,11.4,11.4h0V718.2a11.4,11.4,0,0,1-11.4,11.4H55.7a11.4,11.4,0,0,1-11.4-11.4h0V307a11.4,11.4,0,0,1,11.4-11.3Z"
                    fill="#fff"
                  ></path>{" "}
                  <image
                    x="67"
                    y="666"
                    width="32"
                    height="32"
                    href="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/avatars/dr-wells.png"
                  ></image>{" "}
                  <image
                    clip-path="url(#modernize-quickpath-back-card-clip)"
                    x="37.3"
                    y="280.3"
                    width="398"
                    height="242"
                    href="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/modernize-page/insomnia.jpg"
                  ></image>{" "}
                  <text x="76.3" y="595.3" font-size="26" fill="#3b435b">
                    Insomnia
                  </text>{" "}
                  <text x="117" y="688.6" font-size="17" fill="#656e8b">
                    Dr. Katherine Wells, MD
                  </text>{" "}
                  <g className="badge">
                    {" "}
                    <rect
                      className="badge-body"
                      x="76"
                      y="612"
                      width="55"
                      height="25"
                      rx="5"
                      opacity="0.2"
                      fill="#fac444"
                    ></rect>{" "}
                    <text
                      className="draft-text"
                      x="83"
                      y="629"
                      font-size="15"
                      fill="#fac444"
                      //     style="opacity: 1;"
                    >
                      Draft
                    </text>{" "}
                    <text
                      //     style="opacity: 0;"
                      className="published-text"
                      x="83"
                      y="629"
                      font-size="15"
                      fill="#07c597"
                    >
                      Published • 09/10/2021
                    </text>{" "}
                  </g>{" "}
                  <text
                    className="font-book"
                    x="76.3"
                    y="562.1"
                    font-size="18"
                    fill="#828aa3"
                  >
                    Conditions and Treatments
                  </text>{" "}
                </g>{" "}
                <g
                  className="floating-layer card"
                  filter="url(#shadow)"
                  data-svg-origin="107 347.79998779296875"
                  transform="matrix(1,0,0,1,0.41,30)"
                  //     style="transform-origin: 0px 0px; opacity: 0;"
                >
                  {" "}
                  <path
                    d="M125.4,363.2H484.2a11.4,11.4,0,0,1,11.4,11.4h0V786.7a11.4,11.4,0,0,1-11.4,11.4H125.4A11.4,11.4,0,0,1,114,786.7h0V374.6a11.4,11.4,0,0,1,11.4-11.4Z"
                    fill="#fff"
                  ></path>{" "}
                  <image
                    x="138"
                    y="732"
                    width="32"
                    height="32"
                    href="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/avatars/dr-wells.png"
                  ></image>{" "}
                  <image
                    clip-path="url(#modernize-quickpath-front-card-clip)"
                    x="107"
                    y="347.8"
                    width="398"
                    height="242"
                    href="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/modernize-page/high-blood-pressure.jpg"
                  ></image>{" "}
                  <text x="146" y="662.8" font-size="26" fill="#3b435b">
                    High Blood Pressure
                  </text>{" "}
                  <text x="186.7" y="756.2" font-size="17" fill="#656e8b">
                    Dr. Katherine Wells, MD
                  </text>{" "}
                  <g className="badge">
                    {" "}
                    <rect
                      className="badge-body"
                      x="146"
                      y="680"
                      width="55"
                      height="25"
                      rx="5"
                      opacity="0.2"
                      fill="#fac444"
                    ></rect>{" "}
                    <text
                      className="draft-text"
                      x="152.7"
                      y="696.6"
                      font-size="15"
                      fill="#fac444"
                      //     style="opacity: 1;"
                    >
                      Draft
                    </text>{" "}
                    <text
                      //     style="opacity: 0;"
                      className="published-text"
                      x="152.7"
                      y="696.6"
                      font-size="15"
                      fill="#07c597"
                    >
                      Published • 09/10/2021
                    </text>{" "}
                  </g>{" "}
                  <text
                    className="font-book"
                    x="146"
                    y="629.6"
                    font-size="18"
                    fill="#828aa3"
                  >
                    Conditions and Treatments
                  </text>{" "}
                </g>{" "}
                <g
                  className="floating-layer"
                  data-svg-origin="707 125"
                  transform="matrix(1,0,0,1,1.6398,-4.3303)"
                  //   style="transform-origin: 0px 0px;"
                >
                  {" "}
                  <g className="plus">
                    {" "}
                    <circle
                      cx="743"
                      cy="161"
                      r="36"
                      fill="#2c98f7"
                    ></circle>{" "}
                    <path
                      d="M745,145a2,2,0,0,0-4,0v14H727a2,2,0,0,0,0,4h14v14a2,2,0,0,0,4,0V163h14a2,2,0,0,0,0-4H745Z"
                      fill="#fff"
                    ></path>{" "}
                  </g>{" "}
                </g>{" "}
                <g
                  className="floating-layer call-button"
                  data-svg-origin="543 682"
                  transform="matrix(1,0,0,1,1.4348,2.1651)"
                  //   style="transform-origin: 0px 0px;"
                >
                  {" "}
                  <path
                    d="M543,687c0-2.8,1.7-5,3.9-5H778.2c2.1,0,3.9,2.2,3.9,5v61c0,2.8-1.7,5-3.9,5H546.9c-2.2,0-3.9-2.2-3.9-5Z"
                    fill="#2c98f7"
                  ></path>{" "}
                  <text x="614" y="724" font-size="18" fill="#fff">
                    Call 310-555-2391
                  </text>{" "}
                  <circle cx="577" cy="717.6" r="18.6" fill="#fff"></circle>{" "}
                  <path
                    fill-rule="evenodd"
                    d="M570.1,721.4v-5.9h14v6a3.6,3.6,0,0,1-3.4,3.9h-6.6a3.8,3.8,0,0,1-4-3.4A.6.6,0,0,1,570.1,721.4Zm3.8-1.9a.7.7,0,0,1-.7-.6h0a.7.7,0,0,1,.6-.7.6.6,0,0,1,.6.6.5.5,0,0,1-.5.7Zm3.2,0a.7.7,0,0,1-.7-.6h0a.7.7,0,0,1,.6-.7.6.6,0,0,1,.6.6.5.5,0,0,1-.5.7Zm3.1,2.9c-.4,0-.6-.3-.6-.7a.7.7,0,0,1,.6-.7h0a.7.7,0,0,1,.7.7c-.1.4-.3.7-.7.7Zm-3.8-.7a.7.7,0,0,0,.7.6c.4,0,.6-.3.6-.7a.6.6,0,0,0-.6-.6.8.8,0,0,0-.7.7Zm-3.2,0a.7.7,0,0,0,.7.6c.4,0,.6-.3.6-.7a.6.6,0,0,0-.6-.6.8.8,0,0,0-.7.7Zm6.4-2.8a.6.6,0,0,1,1.2,0,.6.6,0,1,1-1.2,0Z"
                    fill="#2d92eb"
                  ></path>{" "}
                  <path
                    d="M570.1,715.5a9.7,9.7,0,0,1,.1-1.7,3.5,3.5,0,0,1,3.4-2.8h6.9a3.6,3.6,0,0,1,3.4,2.8,9.1,9.1,0,0,1,.1,1.7Z"
                    fill="#2d92eb"
                    opacity="0.5"
                  ></path>{" "}
                  <path
                    d="M574.2,713.4a.6.6,0,0,0,.6-.6h0v-2.4a.6.6,0,0,0-1.2,0h0v2.4a.5.5,0,0,0,.6.6Z"
                    fill="#2d92eb"
                  ></path>{" "}
                  <path
                    d="M579.9,713.4a.6.6,0,0,0,.6-.6h0v-2.4a.6.6,0,0,0-1.2,0h0v2.4a.6.6,0,0,0,.6.6Z"
                    fill="#2d92eb"
                  ></path>{" "}
                </g>{" "}
              </svg>
            </div>
          </div>
          <div className="col-12 col-md-4 order-md-2 align-self-center">
            <div
              className="pillar-content wow fadeInUp"
              //    style="visibility: visible; animation-name: fadeInUp;"
            >
              <h3 className="display-4">
                Give patients a quick path to your door
              </h3>
              <p>
                We expand and enhance your web presence, so patients discover
                and learn about your practice first.
              </p>
              <p></p>
              <ul>
                <li>
                  Top search result rankings, informative website focused on
                  your services
                </li>
                <li>
                  Easy connections to you (phone + text), convenient online
                  booking
                </li>
                <li>
                  Wide online reach including social media, blogging, paid ads
                </li>
              </ul>
              <p></p>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row my-4 my-md-5 justify-content-around">
          <div className="col-12 col-md-7 order-md-2">
            <div className="animation-container">
              {" "}
              <svg
                id="modernize-scheduling"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 900 1000"
                //      style="opacity: 1;"
              >
                {" "}
                <path
                  d="M654.6.9V239.3H899.4V.9Zm165.8,159H733.7V73.2h86.7Z"
                  fill="#2c98f7"
                  opacity="0.05"
                ></path>{" "}
                <path
                  d="M0,709.5H111c63.2.1,122.4-23.5,166.8-66.4s67.3-97.3,67.4-156.1-24-114.1-67.3-156.1S174.2,264.5,111,264.5H4.7V52.1H110.9c118.6,0,230.4,44.8,314.6,126.2s132,191.9,132,308.7S510.6,713.6,425.4,795.9,229.5,922,110.9,922H0Z"
                  fill="#2c98f7"
                  opacity="0.05"
                ></path>{" "}
                <path
                  d="M404.2,1000V936.8c0-67.6,25.5-131.3,71.9-179.3s109.4-75.2,176-75.3,129.1,26.8,176,75.4S900,869.2,900,936.8V1000Z"
                  fill="#2c98f7"
                  opacity="0.05"
                ></path>{" "}
                <g
                  className="floating-layer"
                  fill="#d9dbe6"
                  data-svg-origin="468.0999755859375 681.5999755859375"
                  transform="matrix(1,0,0,1,1.4861,-0.4338)"
                  //    style="transform-origin: 0px 0px;"
                >
                  {" "}
                  <circle cx="541.8" cy="707.3" r="1.7"></circle>{" "}
                  <circle cx="565.8" cy="707.3" r="1.7"></circle>{" "}
                  <circle cx="589.8" cy="707.3" r="1.7"></circle>{" "}
                  <circle cx="613.8" cy="707.3" r="1.7"></circle>{" "}
                  <circle cx="637.8" cy="707.3" r="1.7"></circle>{" "}
                  <circle cx="661.8" cy="707.3" r="1.7"></circle>{" "}
                  <circle cx="685.8" cy="707.3" r="1.7"></circle>{" "}
                  <circle cx="709.8" cy="707.3" r="1.7"></circle>{" "}
                  <circle cx="733.8" cy="707.3" r="1.7"></circle>{" "}
                  <circle cx="541.8" cy="731.3" r="1.7"></circle>{" "}
                  <circle cx="565.8" cy="731.3" r="1.7"></circle>{" "}
                  <circle cx="589.8" cy="731.3" r="1.7"></circle>{" "}
                  <circle cx="613.8" cy="731.3" r="1.7"></circle>{" "}
                  <circle cx="637.8" cy="731.3" r="1.7"></circle>{" "}
                  <circle cx="661.8" cy="731.3" r="1.7"></circle>{" "}
                  <circle cx="685.8" cy="731.3" r="1.7"></circle>{" "}
                  <circle cx="709.8" cy="731.3" r="1.7"></circle>{" "}
                  <circle cx="733.8" cy="731.3" r="1.7"></circle>{" "}
                  <circle cx="541.8" cy="755.3" r="1.7"></circle>{" "}
                  <circle cx="565.8" cy="755.3" r="1.7"></circle>{" "}
                  <circle cx="589.8" cy="755.3" r="1.7"></circle>{" "}
                  <circle cx="613.8" cy="755.3" r="1.7"></circle>{" "}
                  <circle cx="637.8" cy="755.3" r="1.7"></circle>{" "}
                  <circle cx="661.8" cy="755.3" r="1.7"></circle>{" "}
                  <circle cx="685.8" cy="755.3" r="1.7"></circle>{" "}
                  <circle cx="709.8" cy="755.3" r="1.7"></circle>{" "}
                  <circle cx="733.8" cy="755.3" r="1.7"></circle>{" "}
                  <circle cx="469.8" cy="707.3" r="1.7"></circle>{" "}
                  <circle cx="493.8" cy="707.3" r="1.7"></circle>{" "}
                  <circle cx="517.8" cy="707.3" r="1.7"></circle>{" "}
                  <circle cx="469.8" cy="731.3" r="1.7"></circle>{" "}
                  <circle cx="493.8" cy="731.3" r="1.7"></circle>{" "}
                  <circle cx="517.8" cy="731.3" r="1.7"></circle>{" "}
                  <circle cx="469.8" cy="755.3" r="1.7"></circle>{" "}
                  <circle cx="493.8" cy="755.3" r="1.7"></circle>{" "}
                  <circle cx="517.8" cy="755.3" r="1.7"></circle>{" "}
                  <circle cx="757.8" cy="683.3" r="1.7"></circle>{" "}
                  <circle cx="757.8" cy="707.3" r="1.7"></circle>{" "}
                  <circle cx="757.8" cy="731.3" r="1.7"></circle>{" "}
                  <circle cx="757.8" cy="755.3" r="1.7"></circle>{" "}
                  <circle cx="541.8" cy="779.3" r="1.7"></circle>{" "}
                  <circle cx="565.8" cy="779.3" r="1.7"></circle>{" "}
                  <circle cx="589.8" cy="779.3" r="1.7"></circle>{" "}
                  <circle cx="613.8" cy="779.3" r="1.7"></circle>{" "}
                  <circle cx="637.8" cy="779.3" r="1.7"></circle>{" "}
                  <circle cx="661.8" cy="779.3" r="1.7"></circle>{" "}
                  <circle cx="685.8" cy="779.3" r="1.7"></circle>{" "}
                  <circle cx="709.8" cy="779.3" r="1.7"></circle>{" "}
                  <circle cx="733.8" cy="779.3" r="1.7"></circle>{" "}
                  <circle cx="541.8" cy="803.3" r="1.7"></circle>{" "}
                  <circle cx="565.8" cy="803.3" r="1.7"></circle>{" "}
                  <circle cx="589.8" cy="803.3" r="1.7"></circle>{" "}
                  <circle cx="613.8" cy="803.3" r="1.7"></circle>{" "}
                  <circle cx="637.8" cy="803.3" r="1.7"></circle>{" "}
                  <circle cx="661.8" cy="803.3" r="1.7"></circle>{" "}
                  <circle cx="685.8" cy="803.3" r="1.7"></circle>{" "}
                  <circle cx="709.8" cy="803.3" r="1.7"></circle>{" "}
                  <circle cx="733.8" cy="803.3" r="1.7"></circle>{" "}
                  <circle cx="469.8" cy="779.3" r="1.7"></circle>{" "}
                  <circle cx="493.8" cy="779.3" r="1.7"></circle>{" "}
                  <circle cx="517.8" cy="779.3" r="1.7"></circle>{" "}
                  <circle cx="469.8" cy="803.3" r="1.7"></circle>{" "}
                  <circle cx="493.8" cy="803.3" r="1.7"></circle>{" "}
                  <circle cx="517.8" cy="803.3" r="1.7"></circle>{" "}
                  <circle cx="757.8" cy="779.3" r="1.7"></circle>{" "}
                  <circle cx="757.8" cy="803.3" r="1.7"></circle>{" "}
                </g>{" "}
                <g
                  className="floating-layer"
                  filter="url(#shadow)"
                  data-svg-origin="81.69999694824219 194.5"
                  transform="matrix(1,0,0,1,-4.4583,0.4338)"
                  //      style="transform-origin: 0px 0px;"
                >
                  {" "}
                  <rect
                    x="81.7"
                    y="194.5"
                    width="740"
                    height="564"
                    rx="8"
                    fill="#f6f8fb"
                  ></rect>{" "}
                  <path
                    d="M89.7,194.5h724a8,8,0,0,1,8,8v53H81.7v-53A8,8,0,0,1,89.7,194.5Z"
                    fill="#4a5472"
                  ></path>{" "}
                  <g>
                    {" "}
                    <rect
                      x="105.7"
                      y="287.5"
                      width="116.7"
                      height="144.58"
                      rx="5"
                      fill="#eff3f8"
                    ></rect>{" "}
                    <rect
                      x="242.7"
                      y="287.5"
                      width="116.7"
                      height="144.58"
                      rx="5"
                      fill="#eff3f8"
                    ></rect>{" "}
                    <rect
                      x="379.7"
                      y="287.5"
                      width="116.7"
                      height="144.58"
                      rx="5"
                      fill="#eff3f8"
                    ></rect>{" "}
                    <rect
                      x="516.7"
                      y="287.5"
                      width="116.7"
                      height="144.58"
                      rx="5"
                      fill="#eff3f8"
                    ></rect>{" "}
                    <rect
                      x="653.7"
                      y="287.5"
                      width="116.7"
                      height="144.58"
                      rx="5"
                      fill="#eff3f8"
                    ></rect>{" "}
                    <path
                      d="M790.7,292.5V427.1a5,5,0,0,0,5,5h8.7V287.5h-8.7A5,5,0,0,0,790.7,292.5Z"
                      fill="#eff3f8"
                    ></path>{" "}
                    <rect
                      x="105.7"
                      y="439.5"
                      width="116.7"
                      height="144.58"
                      rx="5"
                      fill="#eff3f8"
                    ></rect>{" "}
                    <rect
                      x="242.7"
                      y="439.5"
                      width="116.7"
                      height="144.58"
                      rx="5"
                      fill="#eff3f8"
                    ></rect>{" "}
                    <rect
                      x="379.7"
                      y="439.5"
                      width="116.7"
                      height="144.58"
                      rx="5"
                      fill="#eff3f8"
                    ></rect>{" "}
                    <rect
                      x="516.7"
                      y="439.5"
                      width="116.7"
                      height="144.58"
                      rx="5"
                      fill="#eff3f8"
                    ></rect>{" "}
                    <rect
                      x="653.7"
                      y="439.5"
                      width="116.7"
                      height="144.58"
                      rx="5"
                      fill="#eff3f8"
                    ></rect>{" "}
                    <path
                      d="M804.4,439.5h-8.7a5,5,0,0,0-5,5V579.1a5,5,0,0,0,5,5h8.7Z"
                      fill="#eff3f8"
                    ></path>{" "}
                    <rect
                      x="105.7"
                      y="591.5"
                      width="116.7"
                      height="144.58"
                      rx="5"
                      fill="#eff3f8"
                    ></rect>{" "}
                    <rect
                      x="242.7"
                      y="591.5"
                      width="116.7"
                      height="144.58"
                      rx="5"
                      fill="#eff3f8"
                    ></rect>{" "}
                    <rect
                      x="379.7"
                      y="591.5"
                      width="116.7"
                      height="144.58"
                      rx="5"
                      fill="#eff3f8"
                    ></rect>{" "}
                    <rect
                      x="516.7"
                      y="591.5"
                      width="116.7"
                      height="144.58"
                      rx="5"
                      fill="#eff3f8"
                    ></rect>{" "}
                    <rect
                      x="653.7"
                      y="591.5"
                      width="116.7"
                      height="144.58"
                      rx="5"
                      fill="#eff3f8"
                    ></rect>{" "}
                    <path
                      d="M804.4,591.5h-8.7a5,5,0,0,0-5,5V731.1a5,5,0,0,0,5,5h8.7Z"
                      fill="#eff3f8"
                    ></path>{" "}
                  </g>{" "}
                  <text x="112.2" y="233.7" font-size="19" fill="#fff">
                    Visits
                  </text>{" "}
                </g>{" "}
                <g
                  className="floating-layer"
                  filter="url(#shadow)"
                  data-svg-origin="329.1999969482422 560.5"
                  transform="matrix(1,0,0,1,2.9722,-0.2892)"
                  //     style="transform-origin: 0px 0px; opacity: 1;"
                >
                  {" "}
                  <rect
                    x="139.7"
                    y="315.5"
                    width="379"
                    height="490"
                    rx="4"
                    fill="#fff"
                    opacity="0.95"
                  ></rect>{" "}
                  <rect
                    x="183.7"
                    y="588.5"
                    width="90"
                    height="41"
                    rx="4"
                    fill="#f3f4f9"
                  ></rect>{" "}
                  <text x="205.7" y="612.5" font-size="12" fill="#697492">
                    9:00am
                  </text>{" "}
                  <rect
                    x="183.7"
                    y="640.5"
                    width="90"
                    height="41"
                    rx="4"
                    fill="#f3f4f9"
                  ></rect>{" "}
                  <text x="204.7" y="665.5" font-size="12" fill="#697492">
                    11:20am
                  </text>{" "}
                  <rect
                    x="283.7"
                    y="588.5"
                    width="91"
                    height="41"
                    rx="4"
                    fill="#f3f4f9"
                  ></rect>{" "}
                  <text x="305.7" y="612.5" font-size="12" fill="#697492">
                    10:00am
                  </text>{" "}
                  <rect
                    x="384.7"
                    y="588.5"
                    width="90"
                    height="41"
                    rx="4"
                    fill="#f3f4f9"
                  ></rect>{" "}
                  <text x="406.7" y="612.5" font-size="12" fill="#697492">
                    10:45am
                  </text>{" "}
                  <rect
                    className="rect-to-select"
                    x="284.7"
                    y="641.5"
                    width="89"
                    height="39"
                    rx="4"
                    stroke-dasharray="248.5"
                    stroke-dashoffset="28.591182"
                    fill="rgba(249,250,252,1)"
                    stroke="#07c597"
                    stroke-width="2"
                  ></rect>{" "}
                  <text
                    className="text-to-select"
                    x="306.7"
                    y="665.5"
                    font-size="12"
                    fill="#697492"
                  >
                    1:00pm
                  </text>{" "}
                  <rect
                    x="384.7"
                    y="640.5"
                    width="90"
                    height="41"
                    rx="4"
                    fill="#f3f4f9"
                  ></rect>{" "}
                  <text x="408.3" y="665.5" font-size="12" fill="#697492">
                    3:00pm
                  </text>{" "}
                  <g
                    className="confirm-btn"
                    data-svg-origin="183.6999969482422 702.5"
                    transform="matrix(1,0,0,1,0,0)"
                    //     style="transform-origin: 0px 0px;"
                  >
                    {" "}
                    <rect
                      className="confirm-btn-body"
                      x="183.7"
                      y="702.5"
                      width="291"
                      height="57"
                      rx="4"
                      fill="#f3f4f9"
                    ></rect>{" "}
                    <text x="286.4" y="736.5" font-size="15" fill="#fff">
                      CONFIRM VIST
                    </text>{" "}
                    <path
                      d="M273.2,725.8l-8.4,7.9-2.3-2.5c-1-.8-2.5.1-1.8,1.3l2.7,4.3a1.5,1.5,0,0,0,2.1.3l.3-.3,8.5-9.8c1-1.1-.2-2-1.1-1.2Z"
                      fill="#fff"
                    ></path>{" "}
                  </g>{" "}
                  <text x="244.9" y="541.5" font-size="18" fill="#9ba1b7">
                    Katherine Wells, MD
                  </text>{" "}
                  <text x="230.3" y="561.5" font-size="15" fill="#9ba1b7">
                    Primary Care Physician (PCP)
                  </text>{" "}
                  <image
                    x="274.7"
                    y="402"
                    width="110"
                    height="110"
                    href="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/avatars/dr-wells.png"
                  ></image>{" "}
                  <text x="225.9" y="375.5" font-size="26" fill="#3b435b">
                    Book appointment
                  </text>{" "}
                </g>{" "}
                <g
                  className="floating-layer logo"
                  filter="url(#shadow)"
                  data-svg-origin="563.7000122070312 476.5"
                  transform="matrix(1,0,0,1,-2.9722,-0.2892)"
                  //     style="transform-origin: 0px 0px;"
                >
                  {" "}
                  <path
                    d="M638.7,476.5a75,75,0,1,1-75,75,75,75,0,0,1,75-75h0"
                    fill="#fff"
                  ></path>{" "}
                  <path
                    d="M612.2,560.6a30.4,30.4,0,0,1-1.5-8.6v-.5a32,32,0,0,1,1.8-8.8l-16.7-12.5a48.9,48.9,0,0,0-5.2,20.9,47.9,47.9,0,0,0,5.2,21.7Z"
                    fill="#fbbc05"
                  ></path>{" "}
                  <path
                    d="M639.2,503.4a48.4,48.4,0,0,0-43.4,26.8l16.7,12.5a29.3,29.3,0,0,1,28.8-19.2,29.6,29.6,0,0,1,16.7,6.1l14.4-14a49.1,49.1,0,0,0-32.3-12.2Z"
                    fill="#ea4335"
                  ></path>{" "}
                  <path
                    d="M640.1,542.8v18.8h26.2c-2.6,11.8-12.7,18.8-26.2,18.8a28.9,28.9,0,0,1-27.9-19.9l-16.4,12.3a48.4,48.4,0,0,0,43.4,26.8h.9c24.5,0,46.8-17.5,46.8-48.1a42.5,42.5,0,0,0-1.3-8.7Z"
                    fill="#34a853"
                  ></path>{" "}
                  <path
                    d="M640.1,542.8v18.8h26.2a22.7,22.7,0,0,1-9.8,14.3l15.4,11.8c9.1-8.2,15-20.5,15-36.2a42.5,42.5,0,0,0-1.3-8.7Z"
                    fill="#4285f4"
                  ></path>{" "}
                </g>{" "}
                <g
                  className="floating-layer logo"
                  filter="url(#shadow)"
                  data-svg-origin="757.6998291015625 449.69989013671875"
                  transform="matrix(1,0,0,1,3.7152,0.3615)"
                  //    style="transform-origin: 0px 0px;"
                >
                  {" "}
                  <path
                    d="M800.6,449.7a43,43,0,1,1-42.9,42.9,42.9,42.9,0,0,1,42.9-42.9h0"
                    fill="#f55656"
                  ></path>{" "}
                  <path
                    d="M783,471.6a17.7,17.7,0,0,1,16.2-5v23.6a1.3,1.3,0,0,1-1.2,1.3c-.1,0-.2,0-.2-.1H797Z"
                    fill="#fff"
                  ></path>{" "}
                  <path
                    d="M812.3,480.2a17.9,17.9,0,0,1,8.1,12.4l-16,2.4a2.1,2.1,0,0,1-1.4-2.4Z"
                    fill="#fff"
                  ></path>{" "}
                  <path
                    d="M804.9,500.5a1.6,1.6,0,0,0-1.4,1.7v.5l8.1,13.6a17.1,17.1,0,0,0,8.8-11.3Z"
                    fill="#fff"
                  ></path>{" "}
                  <path
                    d="M796.8,502.7c1-.3,2.2-.3,2.4.9l.5,15.3a12.8,12.8,0,0,1-12.4-5Z"
                    fill="#fff"
                  ></path>{" "}
                  <path
                    d="M794.9,495.5a2.1,2.1,0,0,1,.2,2.9h0l-14.8,5.2a19.3,19.3,0,0,1,0-13.4Z"
                    fill="#fff"
                  ></path>{" "}
                </g>{" "}
                <g
                  className="floating-layer logo"
                  filter="url(#shadow)"
                  data-svg-origin="670.7999877929688 420.20001220703125"
                  transform="matrix(1,0,0,1,-1.4861,-0.5784)"
                  //   style="transform-origin: 0px 0px;"
                >
                  {" "}
                  <path
                    d="M692.3,420.2a21.5,21.5,0,1,1-21.5,21.5h0a21.5,21.5,0,0,1,21.5-21.5"
                    fill="#8e4cb1"
                  ></path>{" "}
                  <path
                    d="M687.5,433.3l4.2,10.4,4.1-10.4h4.8l-7.3,17.1h-3.4l-7.2-17.1Z"
                    fill="#fff"
                  ></path>{" "}
                </g>{" "}
                <g
                  className="floating-layer logo"
                  filter="url(#shadow)"
                  data-svg-origin="736.2000122070312 594.2999877929688"
                  transform="matrix(1,0,0,1,-5.9444,0.1446)"
                  //   style="transform-origin: 0px 0px;"
                >
                  {" "}
                  <path
                    d="M757.7,594.3a21.5,21.5,0,1,1-21.5,21.5h0a21.5,21.5,0,0,1,21.5-21.5"
                    fill="#07c597"
                  ></path>{" "}
                  <path
                    d="M769.1,611.6l2.4,2.4-14.3,14.3-2.4-2.4Zm-2.5-2.5-2.4-2.4-12.1,12.2-2.9-2.9a3.6,3.6,0,0,1-1.1-2.6,3.4,3.4,0,0,1,3.2-3.5h.3a3.6,3.6,0,0,1,2.6,1.1l1.2,1.2,2.4-2.4-1.2-1.2a7.1,7.1,0,0,0-4.9-2.1,6.6,6.6,0,0,0-6.8,6.5h0v.4a7.2,7.2,0,0,0,2,5l5.2,5.1Z"
                    fill="#fff"
                  ></path>{" "}
                </g>{" "}
                <g
                  className="floating-layer"
                  data-svg-origin="584.9000244140625 315.1000061035156"
                  transform="matrix(1,0,0,1,-5.2013,-0.0723)"
                  //    style="transform-origin: 0px 0px;"
                >
                  {" "}
                  <path
                    d="M584.9,320.1c0-2.8,1.9-5,4.3-5H848.7a4.7,4.7,0,0,1,4.4,5v61c0,2.7-2,5-4.4,5H589.2c-2.4,0-4.3-2.3-4.3-5Z"
                    fill="#2C98F7"
                  ></path>{" "}
                  <text x="655.9" y="357.1" font-size="18" fill="#fff">
                    Request appointment
                  </text>{" "}
                  <circle cx="618.9" cy="350.7" r="18.6" fill="#fff"></circle>{" "}
                  <path
                    fill-rule="evenodd"
                    d="M611.9,354.5v-5.9h13.9v6a3.6,3.6,0,0,1-3.3,3.9h-6.7a3.6,3.6,0,0,1-3.9-3.4Zm3.8-1.9a.6.6,0,0,1-.6-.6h0c0-.4.2-.7.6-.7a.7.7,0,0,1,.6.7.6.6,0,0,1-.6.6Zm3.2,0a.7.7,0,0,1-.7-.6h0a.7.7,0,0,1,.6-.7.7.7,0,0,1,.7.7.6.6,0,0,1-.6.6Zm3.1,2.9a.7.7,0,0,1,0-1.4h0a.7.7,0,0,1,0,1.4Zm-3.8-.7a.7.7,0,1,0,.6-.7.7.7,0,0,0-.6.7Zm-3.1,0a.6.6,0,0,0,.6.6c.4,0,.6-.3.6-.7a.6.6,0,0,0-.6-.6c-.4.1-.7.3-.6.7Zm6.3-2.8c0-.4.2-.7.6-.7a.6.6,0,0,1,.6.6.6.6,0,0,1-.6.7.6.6,0,0,1-.6-.6Z"
                    fill="#2d92eb"
                  ></path>{" "}
                  <path
                    d="M611.9,348.6a9.7,9.7,0,0,1,.1-1.7,3.5,3.5,0,0,1,3.4-2.8h6.9a3.5,3.5,0,0,1,3.4,2.8,9.7,9.7,0,0,1,.1,1.7Z"
                    fill="#2d92eb"
                    opacity="0.5"
                  ></path>{" "}
                  <path
                    d="M616,346.5a.6.6,0,0,0,.6-.5h0v-2.3a.6.6,0,1,0-1.2,0h0v2.3a.6.6,0,0,0,.6.6Z"
                    fill="#2d92eb"
                  ></path>{" "}
                  <path
                    d="M621.7,346.5a.5.5,0,0,0,.6-.6h0v-2.3a.5.5,0,0,0-.6-.6.6.6,0,0,0-.6.6h0v2.3a.6.6,0,0,0,.6.6Z"
                    fill="#2d92eb"
                  ></path>{" "}
                </g>{" "}
              </svg>
            </div>
          </div>
          <div className="col-12 col-md-4 order-md-1 align-self-center">
            <div
              className="pillar-content wow fadeInUp"
              //     style="visibility: visible; animation-name: fadeInUp;"
            >
              <h3 className="display-4">Simplify appointment scheduling</h3>
              <p>
                Booking a visit with your practice shouldn’t be a chore. Online
                scheduling and text messaging options make it convenient, 24/7.
              </p>
              <p></p>
              <ul>
                <li>Easy scheduling right from your website</li>
                <li></li>
                <li>
                  Integrated directly with your EHR{" "}
                  <span className="fine-print text-nowrap">
                    (type of integration can vary based on EHR)
                  </span>
                </li>
                <li>
                  Online scheduling on Google, Yelp, and dozens of other
                  websites
                </li>
              </ul>
              <p></p>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row my-5 py-5 justify-content-center">
          <div className="col-12 col-md-10 text-center">
            <div
              className="wow fadeInUp"
              //   style="visibility: visible; animation-name: fadeInUp;"
            >
              <h2 className="display-4 heading--quote">
                The top 3 Google search results get 75.1% of all clicks
              </h2>
              <p></p>
              <p className="fine-print">
                <a
                  target="_blank"
                  href="https://backlinko.com/google-ctr-stats"
                >
                  backlinko
                </a>
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row my-4 my-md-5 justify-content-around">
          <div className="col-12 col-md-7 order-md-1">
            <div className="animation-container">
              {" "}
              <svg
                id="modernize-messaging"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 900 1000"
                //   style="opacity: 1;"
              >
                {" "}
                <defs>
                  {" "}
                  <clipPath id="modernize-messaging-clip">
                    {" "}
                    <rect
                      className="scd-msg-box"
                      rx="9"
                      x="198.6"
                      y="455"
                      width="426.6"
                      height="120"
                    ></rect>{" "}
                  </clipPath>{" "}
                </defs>{" "}
                <path
                  d="M312.7,471.3H757.4V299.8c0-42.4-15.8-82.2-44.6-112S647.4,142.6,608,142.6s-76.7,16.1-104.8,45.2-44.7,69.6-44.7,112v71.4H315.9V299.9c0-79.7,30-154.7,84.7-211.2S529.5,0,608,0,760.1,31.5,815.4,88.7,900,220.2,900,299.9v314H312.7Z"
                  fill="#2c98f7"
                  opacity="0.05"
                ></path>{" "}
                <path
                  d="M.1,676H329.8V999.8H0Z"
                  fill="#2c98f7"
                  opacity="0.05"
                ></path>{" "}
                <g className="floating-layer" fill="#d9dbe6">
                  {" "}
                  <circle cx="509.6" cy="745.3" r="1.7"></circle>{" "}
                  <circle cx="533.6" cy="745.3" r="1.7"></circle>{" "}
                  <circle cx="557.6" cy="745.3" r="1.7"></circle>{" "}
                  <circle cx="581.6" cy="745.3" r="1.7"></circle>{" "}
                  <circle cx="605.6" cy="745.3" r="1.7"></circle>{" "}
                  <circle cx="629.6" cy="745.3" r="1.7"></circle>{" "}
                  <circle cx="653.6" cy="745.3" r="1.7"></circle>{" "}
                  <circle cx="677.6" cy="745.3" r="1.7"></circle>{" "}
                  <circle cx="701.6" cy="745.3" r="1.7"></circle>{" "}
                  <circle cx="509.6" cy="769.3" r="1.7"></circle>{" "}
                  <circle cx="533.6" cy="769.3" r="1.7"></circle>{" "}
                  <circle cx="557.6" cy="769.3" r="1.7"></circle>{" "}
                  <circle cx="581.6" cy="769.3" r="1.7"></circle>{" "}
                  <circle cx="605.6" cy="769.3" r="1.7"></circle>{" "}
                  <circle cx="629.6" cy="769.3" r="1.7"></circle>{" "}
                  <circle cx="653.6" cy="769.3" r="1.7"></circle>{" "}
                  <circle cx="677.6" cy="769.3" r="1.7"></circle>{" "}
                  <circle cx="701.6" cy="769.3" r="1.7"></circle>{" "}
                  <circle cx="509.6" cy="793.3" r="1.7"></circle>{" "}
                  <circle cx="533.6" cy="793.3" r="1.7"></circle>{" "}
                  <circle cx="557.6" cy="793.3" r="1.7"></circle>{" "}
                  <circle cx="581.6" cy="793.3" r="1.7"></circle>{" "}
                  <circle cx="605.6" cy="793.3" r="1.7"></circle>{" "}
                  <circle cx="629.6" cy="793.3" r="1.7"></circle>{" "}
                  <circle cx="653.6" cy="793.3" r="1.7"></circle>{" "}
                  <circle cx="677.6" cy="793.3" r="1.7"></circle>{" "}
                  <circle cx="701.6" cy="793.3" r="1.7"></circle>{" "}
                  <circle cx="509.6" cy="817.3" r="1.7"></circle>{" "}
                  <circle cx="533.6" cy="817.3" r="1.7"></circle>{" "}
                  <circle cx="557.6" cy="817.3" r="1.7"></circle>{" "}
                  <circle cx="581.6" cy="817.3" r="1.7"></circle>{" "}
                  <circle cx="605.6" cy="817.3" r="1.7"></circle>{" "}
                  <circle cx="629.6" cy="817.3" r="1.7"></circle>{" "}
                  <circle cx="653.6" cy="817.3" r="1.7"></circle>{" "}
                  <circle cx="677.6" cy="817.3" r="1.7"></circle>{" "}
                  <circle cx="701.6" cy="817.3" r="1.7"></circle>{" "}
                  <circle cx="509.6" cy="841.3" r="1.7"></circle>{" "}
                  <circle cx="533.6" cy="841.3" r="1.7"></circle>{" "}
                  <circle cx="557.6" cy="841.3" r="1.7"></circle>{" "}
                  <circle cx="581.6" cy="841.3" r="1.7"></circle>{" "}
                  <circle cx="605.6" cy="841.3" r="1.7"></circle>{" "}
                  <circle cx="629.6" cy="841.3" r="1.7"></circle>{" "}
                  <circle cx="653.6" cy="841.3" r="1.7"></circle>{" "}
                  <circle cx="677.6" cy="841.3" r="1.7"></circle>{" "}
                  <circle cx="701.6" cy="841.3" r="1.7"></circle>{" "}
                  <circle cx="509.6" cy="865.3" r="1.7"></circle>{" "}
                  <circle cx="533.6" cy="865.3" r="1.7"></circle>{" "}
                  <circle cx="557.6" cy="865.3" r="1.7"></circle>{" "}
                  <circle cx="581.6" cy="865.3" r="1.7"></circle>{" "}
                  <circle cx="605.6" cy="865.3" r="1.7"></circle>{" "}
                  <circle cx="629.6" cy="865.3" r="1.7"></circle>{" "}
                  <circle cx="653.6" cy="865.3" r="1.7"></circle>{" "}
                  <circle cx="677.6" cy="865.3" r="1.7"></circle>{" "}
                  <circle cx="701.6" cy="865.3" r="1.7"></circle>{" "}
                  <circle cx="509.6" cy="889.3" r="1.7"></circle>{" "}
                  <circle cx="533.6" cy="889.3" r="1.7"></circle>{" "}
                  <circle cx="557.6" cy="889.3" r="1.7"></circle>{" "}
                  <circle cx="581.6" cy="889.3" r="1.7"></circle>{" "}
                  <circle cx="605.6" cy="889.3" r="1.7"></circle>{" "}
                  <circle cx="629.6" cy="889.3" r="1.7"></circle>{" "}
                  <circle cx="653.6" cy="889.3" r="1.7"></circle>{" "}
                  <circle cx="677.6" cy="889.3" r="1.7"></circle>{" "}
                  <circle cx="701.6" cy="889.3" r="1.7"></circle>{" "}
                  <circle cx="509.6" cy="913.3" r="1.7"></circle>{" "}
                  <circle cx="533.6" cy="913.3" r="1.7"></circle>{" "}
                  <circle cx="557.6" cy="913.3" r="1.7"></circle>{" "}
                  <circle cx="581.6" cy="913.3" r="1.7"></circle>{" "}
                  <circle cx="605.6" cy="913.3" r="1.7"></circle>{" "}
                  <circle cx="629.6" cy="913.3" r="1.7"></circle>{" "}
                  <circle cx="653.6" cy="913.3" r="1.7"></circle>{" "}
                  <circle cx="677.6" cy="913.3" r="1.7"></circle>{" "}
                  <circle cx="701.6" cy="913.3" r="1.7"></circle>{" "}
                  <circle cx="509.6" cy="937.3" r="1.7"></circle>{" "}
                  <circle cx="533.6" cy="937.3" r="1.7"></circle>{" "}
                  <circle cx="557.6" cy="937.3" r="1.7"></circle>{" "}
                  <circle cx="581.6" cy="937.3" r="1.7"></circle>{" "}
                  <circle cx="605.6" cy="937.3" r="1.7"></circle>{" "}
                  <circle cx="629.6" cy="937.3" r="1.7"></circle>{" "}
                  <circle cx="653.6" cy="937.3" r="1.7"></circle>{" "}
                  <circle cx="677.6" cy="937.3" r="1.7"></circle>{" "}
                  <circle cx="701.6" cy="937.3" r="1.7"></circle>{" "}
                  <circle cx="437.6" cy="841.3" r="1.7"></circle>{" "}
                  <circle cx="461.6" cy="841.3" r="1.7"></circle>{" "}
                  <circle cx="485.6" cy="841.3" r="1.7"></circle>{" "}
                  <circle cx="437.6" cy="865.3" r="1.7"></circle>{" "}
                  <circle cx="461.6" cy="865.3" r="1.7"></circle>{" "}
                  <circle cx="485.6" cy="865.3" r="1.7"></circle>{" "}
                  <circle cx="437.6" cy="889.3" r="1.7"></circle>{" "}
                  <circle cx="461.6" cy="889.3" r="1.7"></circle>{" "}
                  <circle cx="485.6" cy="889.3" r="1.7"></circle>{" "}
                  <circle cx="437.6" cy="913.3" r="1.7"></circle>{" "}
                  <circle cx="461.6" cy="913.3" r="1.7"></circle>{" "}
                  <circle cx="485.6" cy="913.3" r="1.7"></circle>{" "}
                  <circle cx="437.6" cy="937.3" r="1.7"></circle>{" "}
                  <circle cx="461.6" cy="937.3" r="1.7"></circle>{" "}
                  <circle cx="485.6" cy="937.3" r="1.7"></circle>{" "}
                  <circle cx="509.6" cy="697.3" r="1.7"></circle>{" "}
                  <circle cx="533.6" cy="697.3" r="1.7"></circle>{" "}
                  <circle cx="557.6" cy="697.3" r="1.7"></circle>{" "}
                  <circle cx="581.6" cy="697.3" r="1.7"></circle>{" "}
                  <circle cx="605.6" cy="697.3" r="1.7"></circle>{" "}
                  <circle cx="629.6" cy="697.3" r="1.7"></circle>{" "}
                  <circle cx="653.6" cy="697.3" r="1.7"></circle>{" "}
                  <circle cx="677.6" cy="697.3" r="1.7"></circle>{" "}
                  <circle cx="701.6" cy="697.3" r="1.7"></circle>{" "}
                  <circle cx="509.6" cy="721.3" r="1.7"></circle>{" "}
                  <circle cx="533.6" cy="721.3" r="1.7"></circle>{" "}
                  <circle cx="557.6" cy="721.3" r="1.7"></circle>{" "}
                  <circle cx="581.6" cy="721.3" r="1.7"></circle>{" "}
                  <circle cx="605.6" cy="721.3" r="1.7"></circle>{" "}
                  <circle cx="629.6" cy="721.3" r="1.7"></circle>{" "}
                  <circle cx="653.6" cy="721.3" r="1.7"></circle>{" "}
                  <circle cx="677.6" cy="721.3" r="1.7"></circle>{" "}
                  <circle cx="701.6" cy="721.3" r="1.7"></circle>{" "}
                  <circle cx="437.6" cy="697.3" r="1.7"></circle>{" "}
                  <circle cx="461.6" cy="697.3" r="1.7"></circle>{" "}
                  <circle cx="485.6" cy="697.3" r="1.7"></circle>{" "}
                  <circle cx="437.6" cy="721.3" r="1.7"></circle>{" "}
                  <circle cx="461.6" cy="721.3" r="1.7"></circle>{" "}
                  <circle cx="485.6" cy="721.3" r="1.7"></circle>{" "}
                </g>{" "}
                <g className="floating-layer" filter="url(#shadow)">
                  {" "}
                  <rect
                    x="232"
                    y="121"
                    width="435"
                    height="757.59"
                    rx="8"
                    fill="#f6f8fb"
                  ></rect>{" "}
                  <path
                    d="M240,121H659a8,8,0,0,1,8,8v53H232V129A8,8,0,0,1,240,121Z"
                    fill="#4a5472"
                  ></path>{" "}
                  <rect
                    x="248"
                    y="206.5"
                    width="398.3"
                    height="346.81"
                    rx="5"
                    fill="#eff3f8"
                  ></rect>{" "}
                  <rect
                    x="248"
                    y="756.4"
                    width="243.3"
                    height="122.58"
                    rx="5"
                    fill="#eff3f8"
                  ></rect>{" "}
                  <rect
                    x="248"
                    y="577.8"
                    width="237.3"
                    height="156.19"
                    rx="5"
                    fill="#eff3f8"
                  ></rect>{" "}
                  <rect
                    x="505.8"
                    y="577.8"
                    width="140.5"
                    height="300.8"
                    rx="5"
                    fill="#eff3f8"
                  ></rect>{" "}
                  <text x="256" y="158.9" font-size="19" fill="#fff">
                    Text Messages
                  </text>{" "}
                </g>{" "}
                <g className="floating-layer font-book">
                  {" "}
                  <g filter="url(#shadow)">
                    {" "}
                    <g fill="#07c597" opacity="0.9">
                      {" "}
                      <rect
                        className="fst-msg-box"
                        rx="9"
                        x="275.3"
                        y="317"
                        width="429.5"
                        height="100"
                      ></rect>{" "}
                      <rect
                        x="690.1"
                        y="317"
                        width="14.7"
                        height="14.15"
                      ></rect>{" "}
                    </g>{" "}
                  </g>{" "}
                  <text
                    className="fst-msg-text"
                    x="295.8"
                    y="350"
                    font-size="18"
                    fill="#fff"
                  >
                    Happy birthday, Hank, from all of us at Beverly
                  </text>{" "}
                  <text
                    className="fst-msg-text"
                    x="295.8"
                    y="373"
                    font-size="18"
                    fill="#fff"
                  >
                    Hills Optometry! If there is anything you need,{" "}
                  </text>{" "}
                  <text
                    className="fst-msg-text"
                    x="295.8"
                    y="396"
                    font-size="18"
                    fill="#fff"
                  >
                    please feel free to reach out anytime!
                  </text>{" "}
                  <g>
                    {" "}
                    <image
                      x="721.6"
                      y="316"
                      width="50"
                      height="50"
                      href="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/avatars/dr-wells.png"
                    ></image>{" "}
                    <circle
                      cx="766.2"
                      cy="360.9"
                      r="5.7"
                      fill="#07c597"
                      stroke="#eef7fe"
                      stroke-width="2"
                    ></circle>{" "}
                  </g>{" "}
                </g>{" "}
                <g
                  className="floating-layer font-book scd-msg"
                  //style="opacity: 1;"
                >
                  {" "}
                  <g filter="url(#shadow)">
                    {" "}
                    <g clip-path="url(#modernize-messaging-clip)" opacity="0.9">
                      {" "}
                      <rect
                        className="scd-msg-box"
                        rx="9"
                        x="198.6"
                        y="455"
                        width="426.6"
                        height="120"
                        fill="#FFF"
                      ></rect>{" "}
                      <rect
                        x="198.6"
                        y="455"
                        width="25.8"
                        height="25.85"
                        fill="#FFF"
                      ></rect>{" "}
                      <rect
                        x="198.9"
                        y="574.5"
                        width="426.4"
                        height="25.33"
                        fill="#cdf3ea"
                      ></rect>{" "}
                      <text
                        className="font-bold"
                        x="245.5"
                        y="591"
                        font-size="10.2"
                        fill="#3b435b"
                      >
                        Appointment scheduled: Thu, Sep 23, 11AM
                      </text>{" "}
                      <text
                        className="font-bold"
                        x="460.2"
                        y="591"
                        font-size="10.2"
                        fill="#2c98f7"
                      >
                        View calendar
                      </text>{" "}
                      <g>
                        {" "}
                        <path
                          d="M233.4,592.2Zm-12.4,0Zm5.3-10.6v-.9a.9.9,0,0,0-.9.9Zm0,.8Zm1.8-.8h.9a.9.9,0,0,0-.9-.9Zm5.3.8Zm.9-.8a.9.9,0,0,0-1.8,0Zm-12.4,0a.9.9,0,0,0-1.8,0Zm-.9.8Zm0,1.8Zm3.5-3.5a.9.9,0,0,0-.8-.9.9.9,0,0,0-.9.9Zm-1.7.9a.9.9,0,0,0,.9.8.8.8,0,0,0,.8-.8Zm8.8-.9a.9.9,0,0,0-.9-.9.9.9,0,0,0-.8.9Zm-1.7.9a.9.9,0,0,0,.9.8.9.9,0,0,0,.8-.8Zm2.6,10.6h0V594h.9l.6-.6a1.7,1.7,0,0,0,.3-1Zm0,0H221.9V594h10.6Zm-10.6.9v-.9h-1.8a1.9,1.9,0,0,0,.3,1l.7.6h.8v-.9Zm3.5-11.5v.8h1.8v-.8Zm1.8,0v.8H229v-.8Zm0,.8a2.9,2.9,0,0,0,.4,1.6,3.9,3.9,0,0,0,1,.8l.8.3h.5v-1.8h-.5l-.3-.2a1.3,1.3,0,0,1-.1-.6Zm2.7,2.7h1.7v-1.8h-1.7Zm1.7-.9v.9h.5l.8-.3a3.9,3.9,0,0,0,1-.8,2.9,2.9,0,0,0,.4-1.6h-1.8a1.3,1.3,0,0,1-.1.6l-.3.2h-.5v.9Zm2.7-1.8v-.8h-1.8v.8Zm-6.2-1.7h-.9v1.7h.9Zm-.9,0h-.9v1.7h.9Zm7.1,11.5v-8h-1.8v8Zm0-8v-1.8h-1.8v1.8Zm-9.7.9h2.6v-1.8h-2.6Zm2.6,0h2.7v-1.8h-2.7Zm-7.1-3.5v.8h1.8v-.8Zm4.5,1.7h-1.8v1.8h1.8Zm-1.8.9v-.9h-.5l-.3-.2a1.3,1.3,0,0,1-.1-.6h-1.8a4.2,4.2,0,0,0,.4,1.6,3.9,3.9,0,0,0,1,.8l.9.3h.4v-.9Zm-.9,8v-8h-1.8v8Zm0-8v-1.8h-1.8v1.8Zm-.9.9h1.8v-1.8H221Zm10.6,0h1.8v-1.8h-1.8Zm-3.5-.9v-2.6h-1.8v2.6Zm-2.7-1.8a1.3,1.3,0,0,1-.1.6l-.3.2h-.4v1.8h.4l.8-.3a3.9,3.9,0,0,0,1-.8,2.9,2.9,0,0,0,.4-1.6Zm-2.6-1.7v.9h1.8v-.9Zm7.1,0v.9h1.7v-.9Z"
                          fill="#00b387"
                        ></path>{" "}
                        <path
                          d="M223.7,587.7h1.7v1.8h-1.7Z"
                          fill="#00b387"
                        ></path>{" "}
                        <path
                          d="M226.3,587.7h1.8v1.8h-1.8Z"
                          fill="#00b387"
                        ></path>{" "}
                        <path d="M229,587.7h1.8v1.8H229Z" fill="#00b387"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>{" "}
                  <text
                    className="scd-msg-text"
                    x="226.9"
                    y="498"
                    font-size="18"
                    fill="#3b435b"
                  >
                    Funny you should mention it, I was going to get{" "}
                  </text>{" "}
                  <text
                    className="scd-msg-text"
                    x="226.9"
                    y="521"
                    font-size="18"
                    fill="#3b435b"
                  >
                    in touch about an eye exam. Do you having an
                  </text>{" "}
                  <text
                    className="scd-msg-text"
                    x="226.9"
                    y="544"
                    font-size="18"
                    fill="#3b435b"
                  >
                    openin
                  </text>{" "}
                  <g>
                    {" "}
                    <path
                      d="M168,492.2a18,18,0,1,0-18-18,18.1,18.1,0,0,0,18,18Z"
                      fill="#c6cad8"
                    ></path>{" "}
                    <circle
                      cx="181.1"
                      cy="487.2"
                      r="6"
                      fill="#07c597"
                      stroke="#fff"
                      stroke-width="2"
                    ></circle>{" "}
                    <text x="162" y="481.2" font-size="18" fill="#fff">
                      H
                    </text>{" "}
                  </g>{" "}
                </g>{" "}
                <g
                  className="floating-layer font-book trd-msg"
                  // style="opacity: 0;"
                >
                  {" "}
                  <g filter="url(#shadow)">
                    {" "}
                    <g fill="#07c597" opacity="0.9">
                      {" "}
                      <rect
                        className="trd-msg-box"
                        rx="9"
                        x="345.3"
                        y="639.3"
                        width="359.5"
                        height="50"
                      ></rect>{" "}
                      <rect
                        x="677.6"
                        y="639.3"
                        width="27.2"
                        height="27.19"
                      ></rect>{" "}
                    </g>{" "}
                  </g>{" "}
                  <text
                    className="trd-msg-text"
                    x="365.8"
                    y="672.3"
                    font-size="18"
                    fill="#fff"
                  ></text>{" "}
                  <text
                    className="trd-msg-text"
                    x="365.8"
                    y="695.3"
                    font-size="18"
                    fill="#fff"
                  ></text>{" "}
                  <text
                    className="trd-msg-text"
                    x="365.8"
                    y="718.3"
                    font-size="18"
                    fill="#fff"
                  ></text>{" "}
                  <g>
                    {" "}
                    <image
                      x="721.6"
                      y="638.2"
                      width="50"
                      height="50"
                      href="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/avatars/dr-wells.png"
                    ></image>{" "}
                    <circle
                      cx="766.2"
                      cy="683.1"
                      r="5.7"
                      fill="#07c597"
                      stroke="#eef7fe"
                      stroke-width="2"
                    ></circle>{" "}
                  </g>{" "}
                </g>{" "}
                <g className="floating-layer">
                  {" "}
                  <circle
                    cx="593.7"
                    cy="879"
                    r="36"
                    fill="#2c98f7"
                  ></circle>{" "}
                  <path
                    d="M578.3,895.6l35.9-16.9-35.9-17,3,14,11,3-11,3Z"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                  ></path>{" "}
                </g>{" "}
              </svg>
            </div>
          </div>
          <div className="col-12 col-md-4 order-md-2 align-self-center">
            <div
              className="pillar-content wow fadeInUp"
              //   style="visibility: visible; animation-name: fadeInUp;"
            >
              <h3 className="display-4">
                Maximize the power of text messaging
              </h3>
              <p>
                Take advantage of today’s most dominant communication method.
                Offer patients multiple access points to text your practice.
              </p>
              <p></p>
              <ul>
                <li>From mobile phone: Two-way text messaging</li>
                <li>From your website: Text messaging window</li>
                <li>From any phone call: Automated option to send a text</li>
              </ul>
              <p></p>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row my-5 py-5 justify-content-center">
          <div className="col-12 col-md-11 text-center">
            <div
              className="wow fadeInUp"
              //     style="visibility: visible; animation-name: fadeInUp;"
            >
              <h2 className="display-4 heading--quote">
                63% of people would switch to a company offering text messaging
                as a communication option
              </h2>
              <p></p>
              <p className="fine-print">
                <a
                  target="_blank"
                  href="https://www.prnewswire.com/news-releases/study-shows-us-customers-prefer-texting-with-businesses-300974034.html"
                >
                  Avochato
                </a>
              </p>
              <p></p>
            </div>
          </div>
        </div>
        <div className="row my-4 my-md-5 pb-5">
          <div className="col-12 col-md-8 order-md-2">
            <div className="animation-container">
              {" "}
              <svg
                id="modernize-frustration"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 900 1000"
                //     style="opacity: 1;"
              >
                {" "}
                <defs>
                  {" "}
                  <clipPath id="frustration-clip">
                    {" "}
                    <path d="M575.3,757l-5.5-3-5.5,3c-.5.3-.9.1-.8-.6l1-6.4-4.4-4.5c-.4-.4-.3-.8.4-.9l6-1,2.8-5.8c.3-.6.7-.6,1,0l2.7,5.8,6.1,1c.6.1.8.5.3.9L575,750l1.1,6.4c.1.7-.3.9-.8.6"></path>{" "}
                    <path d="M601.4,757l-5.5-3-5.5,3c-.5.3-.9.1-.8-.6l1-6.4-4.4-4.5c-.4-.4-.3-.8.4-.9l6-1,2.8-5.8c.3-.6.7-.6,1,0l2.7,5.8,6.1,1c.6.1.8.5.3.9l-4.4,4.5,1.1,6.4c.1.7-.3.9-.8.6"></path>{" "}
                    <path d="M627.5,757l-5.5-3-5.5,3c-.5.3-.9.1-.8-.6l1-6.4-4.4-4.5c-.4-.4-.3-.8.3-.9l6.1-1,2.8-5.8c.3-.6.7-.6,1,0l2.7,5.8,6.1,1c.6.1.8.5.3.9l-4.4,4.5,1.1,6.4c.1.7-.3.9-.8.6"></path>{" "}
                    <path d="M653.6,757l-5.5-3-5.5,3c-.6.3-.9.1-.8-.6l1-6.4-4.4-4.5c-.4-.4-.3-.8.3-.9l6.1-1,2.8-5.8c.3-.6.7-.6,1,0l2.7,5.8,6.1,1c.6.1.8.5.3.9l-4.4,4.5,1.1,6.4c.1.7-.3.9-.8.6"></path>{" "}
                    <path d="M679.7,757l-5.5-3-5.5,3c-.6.3-.9.1-.8-.6l1-6.4-4.4-4.5c-.4-.4-.3-.8.3-.9l6.1-1,2.8-5.8c.3-.6.7-.6,1,0l2.7,5.8,6.1,1c.6.1.8.5.3.9l-4.4,4.5,1.1,6.4c.1.7-.3.9-.8.6"></path>{" "}
                  </clipPath>{" "}
                </defs>{" "}
                <path
                  d="M0,432.4H55.1c59,0,114.5-22.3,156.4-62.7s65.6-95.4,65.6-153.5S253.8,103.6,211.4,62.7,114.1,0,55.1,0H0Z"
                  fill="#2c98f7"
                  opacity="0.05"
                ></path>{" "}
                <path
                  d="M465.5.2V442.5H900V0Z"
                  fill="#2c98f7"
                  opacity="0.05"
                ></path>{" "}
                <path
                  d="M825.3,465.2,670.9,619.6l-89.7-89.7c-41.7-41.7-96.7-65.2-154.9-66.2s-113.8,21-154.9,62.1-63.2,96.1-62.1,155,24.5,113.1,66.2,154.8L439.9,1000,900,539.9Z"
                  fill="#2c98f7"
                  opacity="0.05"
                ></path>{" "}
                <g
                  className="floating-layer"
                  fill="#d9dbe6"
                  data-svg-origin="46.5 636.7000122070312"
                  transform="matrix(1,0,0,1,0.7467,3.8584)"
                  //     style="transform-origin: 0px 0px;"
                >
                  {" "}
                  <circle cx="48.2" cy="638.4" r="1.7"></circle>{" "}
                  <circle cx="72.2" cy="638.4" r="1.7"></circle>{" "}
                  <circle cx="96.2" cy="638.4" r="1.7"></circle>{" "}
                  <circle cx="120.2" cy="638.4" r="1.7"></circle>{" "}
                  <circle cx="144.2" cy="638.4" r="1.7"></circle>{" "}
                  <circle cx="168.2" cy="638.4" r="1.7"></circle>{" "}
                  <circle cx="192.2" cy="638.4" r="1.7"></circle>{" "}
                  <circle cx="216.2" cy="638.4" r="1.7"></circle>{" "}
                  <circle cx="240.2" cy="638.4" r="1.7"></circle>{" "}
                  <circle cx="48.2" cy="662.4" r="1.7"></circle>{" "}
                  <circle cx="72.2" cy="662.4" r="1.7"></circle>{" "}
                  <circle cx="96.2" cy="662.4" r="1.7"></circle>{" "}
                  <circle cx="120.2" cy="662.4" r="1.7"></circle>{" "}
                  <circle cx="144.2" cy="662.4" r="1.7"></circle>{" "}
                  <circle cx="168.2" cy="662.4" r="1.7"></circle>{" "}
                  <circle cx="192.2" cy="662.4" r="1.7"></circle>{" "}
                  <circle cx="216.2" cy="662.4" r="1.7"></circle>{" "}
                  <circle cx="240.2" cy="662.4" r="1.7"></circle>{" "}
                  <circle cx="48.2" cy="686.4" r="1.7"></circle>{" "}
                  <circle cx="72.2" cy="686.4" r="1.7"></circle>{" "}
                  <circle cx="96.2" cy="686.4" r="1.7"></circle>{" "}
                  <circle cx="120.2" cy="686.4" r="1.7"></circle>{" "}
                  <circle cx="144.2" cy="686.4" r="1.7"></circle>{" "}
                  <circle cx="168.2" cy="686.4" r="1.7"></circle>{" "}
                  <circle cx="192.2" cy="686.4" r="1.7"></circle>{" "}
                  <circle cx="216.2" cy="686.4" r="1.7"></circle>{" "}
                  <circle cx="240.2" cy="686.4" r="1.7"></circle>{" "}
                  <circle cx="48.2" cy="710.4" r="1.7"></circle>{" "}
                  <circle cx="72.2" cy="710.4" r="1.7"></circle>{" "}
                  <circle cx="96.2" cy="710.4" r="1.7"></circle>{" "}
                  <circle cx="120.2" cy="710.4" r="1.7"></circle>{" "}
                  <circle cx="144.2" cy="710.4" r="1.7"></circle>{" "}
                  <circle cx="168.2" cy="710.4" r="1.7"></circle>{" "}
                  <circle cx="192.2" cy="710.4" r="1.7"></circle>{" "}
                  <circle cx="216.2" cy="710.4" r="1.7"></circle>{" "}
                  <circle cx="240.2" cy="710.4" r="1.7"></circle>{" "}
                  <circle cx="48.2" cy="734.4" r="1.7"></circle>{" "}
                  <circle cx="72.2" cy="734.4" r="1.7"></circle>{" "}
                  <circle cx="96.2" cy="734.4" r="1.7"></circle>{" "}
                  <circle cx="120.2" cy="734.4" r="1.7"></circle>{" "}
                  <circle cx="144.2" cy="734.4" r="1.7"></circle>{" "}
                  <circle cx="168.2" cy="734.4" r="1.7"></circle>{" "}
                  <circle cx="192.2" cy="734.4" r="1.7"></circle>{" "}
                  <circle cx="216.2" cy="734.4" r="1.7"></circle>{" "}
                  <circle cx="240.2" cy="734.4" r="1.7"></circle>{" "}
                  <circle cx="48.2" cy="758.4" r="1.7"></circle>{" "}
                  <circle cx="72.2" cy="758.4" r="1.7"></circle>{" "}
                  <circle cx="96.2" cy="758.4" r="1.7"></circle>{" "}
                  <circle cx="120.2" cy="758.4" r="1.7"></circle>{" "}
                  <circle cx="144.2" cy="758.4" r="1.7"></circle>{" "}
                  <circle cx="168.2" cy="758.4" r="1.7"></circle>{" "}
                  <circle cx="192.2" cy="758.4" r="1.7"></circle>{" "}
                  <circle cx="216.2" cy="758.4" r="1.7"></circle>{" "}
                  <circle cx="240.2" cy="758.4" r="1.7"></circle>{" "}
                  <circle cx="48.2" cy="782.4" r="1.7"></circle>{" "}
                  <circle cx="72.2" cy="782.4" r="1.7"></circle>{" "}
                  <circle cx="96.2" cy="782.4" r="1.7"></circle>{" "}
                  <circle cx="120.2" cy="782.4" r="1.7"></circle>{" "}
                  <circle cx="144.2" cy="782.4" r="1.7"></circle>{" "}
                  <circle cx="168.2" cy="782.4" r="1.7"></circle>{" "}
                  <circle cx="192.2" cy="782.4" r="1.7"></circle>{" "}
                  <circle cx="216.2" cy="782.4" r="1.7"></circle>{" "}
                  <circle cx="240.2" cy="782.4" r="1.7"></circle>{" "}
                  <circle cx="48.2" cy="806.4" r="1.7"></circle>{" "}
                  <circle cx="72.2" cy="806.4" r="1.7"></circle>{" "}
                  <circle cx="96.2" cy="806.4" r="1.7"></circle>{" "}
                  <circle cx="120.2" cy="806.4" r="1.7"></circle>{" "}
                  <circle cx="144.2" cy="806.4" r="1.7"></circle>{" "}
                  <circle cx="168.2" cy="806.4" r="1.7"></circle>{" "}
                  <circle cx="192.2" cy="806.4" r="1.7"></circle>{" "}
                  <circle cx="216.2" cy="806.4" r="1.7"></circle>{" "}
                  <circle cx="240.2" cy="806.4" r="1.7"></circle>{" "}
                  <circle cx="48.2" cy="830.4" r="1.7"></circle>{" "}
                  <circle cx="72.2" cy="830.4" r="1.7"></circle>{" "}
                  <circle cx="96.2" cy="830.4" r="1.7"></circle>{" "}
                  <circle cx="120.2" cy="830.4" r="1.7"></circle>{" "}
                  <circle cx="144.2" cy="830.4" r="1.7"></circle>{" "}
                  <circle cx="168.2" cy="830.4" r="1.7"></circle>{" "}
                  <circle cx="192.2" cy="830.4" r="1.7"></circle>{" "}
                  <circle cx="216.2" cy="830.4" r="1.7"></circle>{" "}
                  <circle cx="240.2" cy="830.4" r="1.7"></circle>{" "}
                </g>{" "}
                <g
                  className="floating-layer"
                  filter="url(#shadow)"
                  data-svg-origin="80 161.8000030517578"
                  transform="matrix(1,0,0,1,-2.2401,-3.8584)"
                  //    style="transform-origin: 0px 0px;"
                >
                  {" "}
                  <rect
                    x="80"
                    y="161.8"
                    width="740"
                    height="564"
                    rx="8"
                    fill="#f6f8fb"
                  ></rect>{" "}
                  <path
                    d="M88,161.8H812a8,8,0,0,1,8,8v53H80v-53A8,8,0,0,1,88,161.8Z"
                    fill="#4a5472"
                  ></path>{" "}
                  <rect
                    x="104"
                    y="249"
                    width="237.3"
                    height="36.81"
                    rx="5"
                    fill="#eff3f8"
                  ></rect>{" "}
                  <rect
                    x="362"
                    y="249"
                    width="237.3"
                    height="36.81"
                    rx="5"
                    fill="#eff3f8"
                  ></rect>{" "}
                  <path
                    d="M620,254v26.8a5,5,0,0,0,5,5H793.2V249H625A5,5,0,0,0,620,254Z"
                    fill="#eff3f8"
                  ></path>{" "}
                  <rect
                    x="104"
                    y="306"
                    width="237.3"
                    height="36.81"
                    rx="5"
                    fill="#eff3f8"
                  ></rect>{" "}
                  <rect
                    x="362"
                    y="306"
                    width="237.3"
                    height="36.81"
                    rx="5"
                    fill="#eff3f8"
                  ></rect>{" "}
                  <path
                    d="M793.2,306H625a5,5,0,0,0-5,5v26.8a5,5,0,0,0,5,5H793.2Z"
                    fill="#eff3f8"
                  ></path>{" "}
                  <rect
                    x="104"
                    y="363"
                    width="237.3"
                    height="36.81"
                    rx="5"
                    fill="#eff3f8"
                  ></rect>{" "}
                  <rect
                    x="362"
                    y="363"
                    width="237.3"
                    height="36.81"
                    rx="5"
                    fill="#eff3f8"
                  ></rect>{" "}
                  <path
                    d="M793.2,363H625a5,5,0,0,0-5,5v26.8a5,5,0,0,0,5,5H793.2Z"
                    fill="#eff3f8"
                  ></path>{" "}
                  <rect
                    x="104"
                    y="420"
                    width="237.3"
                    height="36.81"
                    rx="5"
                    fill="#eff3f8"
                  ></rect>{" "}
                  <rect
                    x="362"
                    y="420"
                    width="237.3"
                    height="36.81"
                    rx="5"
                    fill="#eff3f8"
                  ></rect>{" "}
                  <rect
                    x="104"
                    y="477"
                    width="237.3"
                    height="36.81"
                    rx="5"
                    fill="#eff3f8"
                  ></rect>{" "}
                  <rect
                    x="362"
                    y="477"
                    width="237.3"
                    height="36.81"
                    rx="5"
                    fill="#eff3f8"
                  ></rect>{" "}
                  <rect
                    x="104"
                    y="534"
                    width="237.3"
                    height="36.81"
                    rx="5"
                    fill="#eff3f8"
                  ></rect>{" "}
                  <rect
                    x="362"
                    y="534"
                    width="237.3"
                    height="36.81"
                    rx="5"
                    fill="#eff3f8"
                  ></rect>{" "}
                  <path
                    d="M620,425v26.8a5,5,0,0,0,5,5H793.2V420H625A5,5,0,0,0,620,425Z"
                    fill="#eff3f8"
                  ></path>{" "}
                  <path
                    d="M793.2,534H625a5,5,0,0,0-5,5v26.8a5,5,0,0,0,5,5H793.2Z"
                    fill="#eff3f8"
                  ></path>{" "}
                  <path
                    d="M793.2,477H625a5,5,0,0,0-5,5v26.8a5,5,0,0,0,5,5H793.2Z"
                    fill="#eff3f8"
                  ></path>{" "}
                  <rect
                    x="104"
                    y="594.6"
                    width="689.3"
                    height="131.58"
                    rx="5"
                    fill="#eff3f8"
                  ></rect>{" "}
                  <text x="110.5" y="201" font-size="19" fill="#fff">
                    Payments
                  </text>{" "}
                </g>{" "}
                <g
                  className="floating-layer"
                  data-svg-origin="45.89999771118164 344"
                  transform="matrix(1,0,0,1,1.4934,2.5723)"
                  //    style="transform-origin: 0px 0px;"
                >
                  {" "}
                  <path
                    d="M45.9,349c0-2.8,1.5-5,3.4-5H256.9c1.9,0,3.4,2.2,3.4,5v61c0,2.8-1.5,5-3.4,5H49.3c-1.9,0-3.4-2.2-3.4-5Z"
                    fill="#248eeb"
                  ></path>{" "}
                  <text x="116.9" y="386" font-size="18" fill="#fff">
                    Create invoice
                  </text>{" "}
                  <circle cx="79.9" cy="379.6" r="18.6" fill="#fff"></circle>{" "}
                  <circle
                    cx="79.9"
                    cy="379.6"
                    r="5.6"
                    fill="#2e93eb"
                    opacity="0.3"
                  ></circle>{" "}
                  <path
                    d="M82.1,377.4a2.4,2.4,0,0,0-2.2-1.1m0,0c-1.1,0-2.2.5-2.2,1.7s2.2,1.6,2.2,1.6,2.2.5,2.2,1.7S81,383,79.9,383m0-6.7v-1.1m0,7.8a2.5,2.5,0,0,1-2.2-1.1m2.2,1.1v1.1m7.8-4.5a7.8,7.8,0,0,1-15.6,0,7.8,7.8,0,0,1,15.6,0Z"
                    fill="none"
                    stroke="#2e93eb"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>{" "}
                </g>{" "}
                <g
                  className="floating-layer font-book msg"
                  //    style="opacity: 0; transform-origin: 0px 0px;"
                  data-svg-origin="45.599998474121094 432.29998779296875"
                  transform="matrix(1,0,0,1,-1.4934,50)"
                >
                  {" "}
                  <g filter="url(#shadow)">
                    {" "}
                    <g fill="#07c597" opacity="0.9">
                      {" "}
                      <rect
                        className="msg-box"
                        rx="9"
                        x="117"
                        y="432.4"
                        width="307"
                        height="50"
                      ></rect>{" "}
                      <rect
                        x="117"
                        y="432.4"
                        width="17.3"
                        height="15.43"
                      ></rect>{" "}
                    </g>{" "}
                  </g>{" "}
                  <text
                    className="msg-text"
                    x="144"
                    y="466.4"
                    font-size="18"
                    fill="#fff"
                  ></text>{" "}
                  <text
                    className="msg-text"
                    x="144"
                    y="489.4"
                    font-size="18"
                    fill="#fff"
                  ></text>{" "}
                  <text
                    className="msg-text"
                    x="144"
                    y="512.4"
                    font-size="18"
                    fill="#fff"
                  ></text>{" "}
                  <image
                    x="45.6"
                    y="432.3"
                    width="50"
                    height="50"
                    href="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/avatars/dr-wells.png"
                  ></image>{" "}
                  <circle
                    cx="90.2"
                    cy="477.2"
                    r="5.7"
                    fill="#07c597"
                    stroke="#eef7fe"
                    stroke-width="2"
                  ></circle>{" "}
                </g>{" "}
                <g
                  className="floating-layer"
                  filter="url(#shadow)"
                  data-svg-origin="274.3999786376953 673.3399963378906"
                  transform="matrix(0.8,0,0,0.8,56.7468,131.4526)"
                  //      style="transform-origin: 0px 0px; opacity: 0;"
                >
                  {" "}
                  <rect
                    x="142.2"
                    y="557"
                    width="264.4"
                    height="232.68"
                    rx="4"
                    fill="#fff"
                    opacity="0.95"
                  ></rect>{" "}
                  <rect
                    className="invoice-btn"
                    x="168.2"
                    y="725.9"
                    width="213"
                    height="38"
                    rx="5"
                    fill="#eff3f8"
                  ></rect>{" "}
                  <text x="238.3" y="750.4" font-size="15" fill="#fff">
                    Pay invoice
                  </text>{" "}
                  <rect
                    className="money-input"
                    x="169.5"
                    y="675.9"
                    width="211"
                    height="35"
                    rx="4"
                    fill="none"
                    stroke="#2c98f7"
                    stroke-width="2"
                  ></rect>{" "}
                  <text
                    className="money-text"
                    x="178"
                    y="698.8"
                    font-size="16"
                    fill="#313b59"
                  ></text>{" "}
                  <text x="167.5" y="664.2" font-size="15" fill="#656e8b">
                    Pay amount
                  </text>{" "}
                  <text x="167.5" y="625.2" font-size="21" fill="#4a5472">
                    $459.50
                  </text>{" "}
                  <text x="167.5" y="597.2" font-size="15" fill="#656e8b">
                    Amount due
                  </text>{" "}
                  <rect
                    x="314.6"
                    y="581.9"
                    width="66"
                    height="23"
                    rx="5"
                    fill="#fff"
                  ></rect>{" "}
                  <rect
                    x="315.6"
                    y="582.9"
                    width="64"
                    height="21"
                    rx="4"
                    fill="none"
                    stroke="#fec635"
                    stroke-width="2"
                  ></rect>{" "}
                  <text x="319.6" y="598.9" font-size="15" fill="#fec635">
                    UNPAID
                  </text>{" "}
                </g>{" "}
                <g
                  className="floating-layer"
                  filter="url(#shadow)"
                  data-svg-origin="588.8999938964844 728.7750244140625"
                  transform="matrix(0.8,0,0,0.8,117.0333,150.8996)"
                  //     style="transform-origin: 0px 0px; opacity: 0;"
                >
                  {" "}
                  <rect
                    x="457.5"
                    y="656.9"
                    width="262.8"
                    height="143.75"
                    rx="4"
                    fill="#fff"
                  ></rect>{" "}
                  <text x="487.9" y="707.3" font-size="18" fill="#3b435b">
                    Google star rating
                  </text>{" "}
                  <rect
                    clip-path="url(#frustration-clip)"
                    x="557.2"
                    y="734.5"
                    width="122.3"
                    height="26.61"
                    fill="#DDDDDD"
                  ></rect>{" "}
                  <rect
                    className="stars-rate"
                    clip-path="url(#frustration-clip)"
                    x="557.2"
                    y="734.5"
                    width="5"
                    height="26.61"
                    fill="#fac444"
                  ></rect>{" "}
                  <text x="487.9" y="755.3" font-size="46" fill="#3b435b">
                    4.9
                  </text>{" "}
                </g>{" "}
                <g
                  className="floating-layer"
                  filter="url(#shadow)"
                  data-svg-origin="659.8999938964844 444.5650177001953"
                  transform="matrix(0.8,0,0,0.8,128.9932,87.6269)"
                  //    style="transform-origin: 0px 0px; opacity: 0;"
                >
                  {" "}
                  <rect
                    x="472.3"
                    y="266.1"
                    width="376"
                    height="356.93"
                    rx="4"
                    fill="#fff"
                    opacity="0.9"
                  ></rect>{" "}
                  <g>
                    {" "}
                    <path
                      d="M753.1,351.7h-.6"
                      fill="none"
                      stroke="#303b59"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>{" "}
                    <path
                      d="M822.4,351.7h-67"
                      fill="none"
                      stroke="#303b59"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>{" "}
                    <path
                      d="M809.5,292.5v58.3a1.9,1.9,0,0,1-1.8,1.9H763.3a1.8,1.8,0,0,1-1.8-1.9h0V292.5a1.8,1.8,0,0,1,1.8-1.8h44.4a1.7,1.7,0,0,1,1.8,1.8Z"
                      fill="#2c98f7"
                    ></path>{" "}
                    <path
                      d="M806.5,296v51.3a1.3,1.3,0,0,1-1.3,1.4H765.9a1.4,1.4,0,0,1-1.4-1.4h0V296a1.3,1.3,0,0,1,1.4-1.3h39.2a1.2,1.2,0,0,1,1.4,1.3Z"
                      fill="#fff"
                    ></path>{" "}
                    <path
                      d="M759.5,329.7V289.4a1.7,1.7,0,0,1,1.9-1.7h1.1"
                      fill="none"
                      stroke="#303b59"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>{" "}
                    <path
                      d="M798.8,287.7h8.9a1.7,1.7,0,0,1,1.8,1.7h0v60.4a1.9,1.9,0,0,1-1.8,1.8H761.3a1.8,1.8,0,0,1-1.8-1.8h0V339.6"
                      fill="none"
                      stroke="#303b59"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>{" "}
                    <path
                      d="M766,287.8h.1"
                      fill="none"
                      stroke="#303b59"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>{" "}
                    <path
                      d="M773.5,287.7h22a1.9,1.9,0,0,1,2,2h0a2,2,0,0,1-2,2h-22a2,2,0,0,1-2-2h0A1.9,1.9,0,0,1,773.5,287.7Z"
                      fill="#fcd230"
                    ></path>{" "}
                    <path
                      d="M774.2,291.6h-.7a3,3,0,0,1-3-3,2.7,2.7,0,0,1,.3-1.2,1.5,1.5,0,0,1,.6-.9,2.7,2.7,0,0,1,2.1-.9h6"
                      fill="none"
                      stroke="#303b59"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>{" "}
                    <path
                      d="M788.5,291.7h-11"
                      fill="none"
                      stroke="#303b59"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>{" "}
                    <path
                      d="M786.2,285.6h9.9a2.8,2.8,0,0,1,2.7,1.8,2.7,2.7,0,0,1,.3,1.2,2.9,2.9,0,0,1-.9,2.1,2.6,2.6,0,0,1-1.7.9"
                      fill="none"
                      stroke="#303b59"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>{" "}
                    <path
                      d="M784.4,283.7h.1a1.9,1.9,0,0,1,2,2,2,2,0,1,1-3.7-1.1"
                      fill="#fff"
                      stroke="#303b59"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>{" "}
                    <path
                      d="M795,303.7h5.5"
                      fill="none"
                      stroke="#2c98f7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>{" "}
                    <path
                      d="M782.5,303.7H791"
                      fill="none"
                      stroke="#303b59"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>{" "}
                    <path
                      d="M773.5,298.7a6,6,0,0,0-6,6,6,6,0,1,0,12,0h0A5.9,5.9,0,0,0,773.5,298.7Zm1.9,6c.1.1.1.2.2.2l1.1.7c.1.1.2.3.1.4l-.4.8c-.1.2-.2.3-.5.2l-1.1-.7c-.3-.1-.5,0-.5.2v1.4c0,.2-.1.3-.2.3H773c-.1.1-.3-.1-.3-.2h0v-1.4c0-.2-.2-.3-.5-.2l-1.1.7c-.1.1-.4,0-.5-.2l-.4-.8c-.2-.1,0-.3.1-.4l1.1-.7c.2-.1.2-.3.2-.5h-.2l-1.1-.7c-.1-.1-.3-.2-.1-.4l.4-.9a.4.4,0,0,1,.5-.1l1.1.7c.3.1.5,0,.5-.2v-1.4a.3.3,0,0,1,.3-.3h1c.1-.1.3.1.3.2h0v1.4c0,.2.2.3.5.2l1.1-.7c.1-.1.4,0,.5.1l.4.9c.2.1,0,.3-.1.4l-1.1.7A.4.4,0,0,0,775.4,304.7Z"
                      fill="#2c98f7"
                    ></path>{" "}
                    <path
                      d="M782.7,307.7h2.2"
                      fill="none"
                      stroke="#2c98f7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>{" "}
                    <path
                      d="M788.5,307.7h12"
                      fill="none"
                      stroke="#303b59"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>{" "}
                    <path
                      d="M795,314.7h5.5"
                      fill="none"
                      stroke="#2c98f7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>{" "}
                    <path
                      d="M778.8,314.7H791"
                      fill="none"
                      stroke="#303b59"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>{" "}
                    <path
                      d="M770.5,314.7h4"
                      fill="none"
                      stroke="#2c98f7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>{" "}
                    <path
                      d="M782.7,318.7h2.2"
                      fill="none"
                      stroke="#303b59"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>{" "}
                    <path
                      d="M770.5,318.7h7.4"
                      fill="none"
                      stroke="#2c98f7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>{" "}
                    <path
                      d="M778.8,324.7H791"
                      fill="none"
                      stroke="#2c98f7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>{" "}
                    <path
                      d="M770.5,324.7h4"
                      fill="none"
                      stroke="#303b59"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>{" "}
                    <path
                      d="M782.7,328.7h2.2"
                      fill="none"
                      stroke="#303b59"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>{" "}
                    <path
                      d="M770.5,328.7h7.4"
                      fill="none"
                      stroke="#2c98f7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>{" "}
                    <path
                      d="M785.5,333.7a1.9,1.9,0,0,1,2-2h24a1.9,1.9,0,0,1,2,2v17h-28Z"
                      fill="#2c98f7"
                      opacity="0.2"
                    ></path>{" "}
                    <path
                      d="M789.5,330.7a1,1,0,0,1,1-1h24a.9.9,0,0,1,1,1v21h-26Z"
                      fill="#fff"
                      stroke="#303b59"
                      stroke-width="2"
                    ></path>{" "}
                    <path
                      d="M795.5,326.7h0a1.9,1.9,0,0,1,2,2v2a2,2,0,0,1-2,2h0a2,2,0,0,1-2-2v-2A1.9,1.9,0,0,1,795.5,326.7Z"
                      fill="#fff"
                      stroke="#303b59"
                      stroke-width="2"
                    ></path>{" "}
                    <path
                      d="M809.5,326.7h0a1.9,1.9,0,0,1,2,2v2a2,2,0,0,1-2,2h0a2,2,0,0,1-2-2v-2A1.9,1.9,0,0,1,809.5,326.7Z"
                      fill="#fff"
                      stroke="#303b59"
                      stroke-width="2"
                    ></path>{" "}
                    <rect
                      x="793.5"
                      y="335.7"
                      width="3"
                      height="3"
                      rx="0.5"
                      fill="#303b59"
                    ></rect>{" "}
                    <rect
                      x="793.5"
                      y="340.7"
                      width="3"
                      height="3"
                      rx="0.5"
                      fill="#303b59"
                    ></rect>{" "}
                    <rect
                      x="793.5"
                      y="345.7"
                      width="3"
                      height="3"
                      rx="0.5"
                      fill="#fcd230"
                    ></rect>{" "}
                    <rect
                      x="803.5"
                      y="335.7"
                      width="3"
                      height="3"
                      rx="0.5"
                      fill="#303b59"
                    ></rect>{" "}
                    <rect
                      x="803.5"
                      y="340.7"
                      width="3"
                      height="3"
                      rx="0.5"
                      fill="#fcd230"
                    ></rect>{" "}
                    <rect
                      x="803.5"
                      y="345.7"
                      width="3"
                      height="3"
                      rx="0.5"
                      fill="#fcd230"
                    ></rect>{" "}
                    <rect
                      x="798.5"
                      y="335.7"
                      width="3"
                      height="3"
                      rx="0.5"
                      fill="#303b59"
                    ></rect>{" "}
                    <rect
                      x="798.5"
                      y="340.7"
                      width="3"
                      height="3"
                      rx="0.5"
                      fill="#303b59"
                    ></rect>{" "}
                    <rect
                      x="798.5"
                      y="345.7"
                      width="3"
                      height="3"
                      rx="0.5"
                      fill="#fcd230"
                    ></rect>{" "}
                    <rect
                      x="808.5"
                      y="335.7"
                      width="3"
                      height="3"
                      rx="0.5"
                      fill="#fcd230"
                    ></rect>{" "}
                    <rect
                      x="808.5"
                      y="340.7"
                      width="3"
                      height="3"
                      rx="0.5"
                      fill="#fcd230"
                    ></rect>{" "}
                    <rect
                      x="808.5"
                      y="345.7"
                      width="3"
                      height="3"
                      rx="0.5"
                      fill="#fcd230"
                    ></rect>{" "}
                  </g>{" "}
                  <text x="506.7" y="317.7" font-size="22" fill="#313b59">
                    Register online for
                  </text>{" "}
                  <text x="506.7" y="345.7" font-size="22" fill="#313b59">
                    your appointment
                  </text>{" "}
                  <rect
                    x="507.5"
                    y="452.3"
                    width="154"
                    height="37"
                    rx="5"
                    fill="#eff3f8"
                  ></rect>{" "}
                  <text
                    className="name-to-type"
                    x="517.7"
                    y="476.2"
                    font-size="16"
                    fill="#313b59"
                  ></text>{" "}
                  <text x="506.5" y="441.6" font-size="15" fill="#656e8b">
                    First name
                  </text>{" "}
                  <rect
                    x="676.9"
                    y="452.3"
                    width="154"
                    height="37"
                    rx="5"
                    fill="#eff3f8"
                  ></rect>{" "}
                  <text
                    className="name-to-type"
                    x="686.4"
                    y="476.2"
                    font-size="16"
                    fill="#313b59"
                  ></text>{" "}
                  <text x="675.9" y="441.6" font-size="15" fill="#656e8b">
                    Last name
                  </text>{" "}
                  <text x="506.7" y="411" font-size="18" fill="#313b59">
                    Patient information
                  </text>{" "}
                  <text x="506.7" y="536" font-size="18" fill="#050238">
                    Appointment information
                  </text>{" "}
                  <text x="537.5" y="574.6" font-size="15" fill="#656e8b">
                    Self
                  </text>{" "}
                  <circle cx="602" cy="569" r="11.5" fill="#eff3f8"></circle>{" "}
                  <text x="622.7" y="574.6" font-size="15" fill="#656e8b">
                    Someone else
                  </text>{" "}
                  <path d="M471.5,368.6H847.3v.7H471.5Z" fill="#e8ecf4"></path>{" "}
                  <g
                    className="self-radio-btn"
                    //  style="opacity: 0;"
                  >
                    {" "}
                    <circle
                      cx="518.7"
                      cy="569"
                      r="11"
                      fill="#fff"
                      stroke="#eaeaf0"
                    ></circle>{" "}
                    <circle cx="518.7" cy="569" r="4.5" fill="#2c98f7"></circle>{" "}
                  </g>{" "}
                </g>{" "}
              </svg>
            </div>
          </div>
          <div className="col-12 col-md-4 order-md-1 align-self-center">
            <div
              className="pillar-content wow fadeInUp"
              //  style="visibility: visible; animation-name: fadeInUp;"
            >
              <h3 className="display-4">Reduce patient frustration</h3>
              <p>
                Long waits. A pile of paper forms. Payment by check. Ditch the
                old, slow ways and give patients a better experience with every
                interaction.
              </p>
              <p></p>
              <ul>
                <li>
                  Digital registration and forms, available in advance of visits
                </li>
                <li>Online bill pay sent via text message or email</li>
                <li>
                  Automated patient surveys for instant feedback and questions
                </li>
                <p></p>
                <p></p>
              </ul>
              <p></p>
            </div>
          </div>
        </div>
      </section>
      <section className="container-xxl">
        <div className="row my-5 pb-5 justify-content-center">
          <div className="col-12 col-md-9">
            <h2
              className="display-1 wow fadeInUp"
              //     style="visibility: visible; animation-name: fadeInUp;"
            >
              Learn how PatientPop can modernize your patient experience
            </h2>
            <p
              className="wow fadeInUp"
              //      style="visibility: visible; animation-name: fadeInUp;"
            >
              Talk to an expert and get actionable and personalized
              recommendations on how you can modernize the patient experience in
              your practice.
            </p>{" "}
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#modalDemoRequestFooter"
            >
              {" "}
              Get a demo{" "}
            </button>
          </div>
        </div>
      </section>
      <ContainerFooter />
    </div>
  );
}

export default Homepage;

import React from "react";
import ContainerFooter from "../../components/containerFooter";
import ContainerNavbar from "../webclone/containernavbar";

function Index() {
  return (
    <div>
      <ContainerNavbar />
      <section className="row justify-content-center hero-section">
        <div className="col-12 col-md-8 text-center">
          <h3 className="heading--label">All-in-one platform</h3>
          <h1>
            Everything your practice needs to thrive.{" "}
            <strong>All in one</strong> place.
          </h1>
          <p>
            Successful practices know it takes more than a phone call or an
            email to engage patients. It requires ongoing connections with your
            practice — from securing that first visit to fostering a lifetime of
            care. One miss along the way could mean lost business. The only way
            to effectively manage each patient touchpoint is with a single,
            integrated solution.
          </p>{" "}
          <script
            src="https://fast.wistia.com/embed/medias/zvepu7j3ld.jsonp"
            async=""
          ></script>
          <script
            src="https://fast.wistia.com/assets/external/E-v1.js"
            async=""
          ></script>
          <span
            className="wistia_embed wistia_async_zvepu7j3ld popover=true popoverAnimateThumbnail=true popoverContent=link wistia_embed_initialized"
            //   style="display:inline;position:relative"
            id="wistia-zvepu7j3ld-1"
          >
            <div
              id="wistia_41.thumb_container"
              className="wistia_click_to_play"
              //  style="position: relative; display: inline;"
            >
              {" "}
              <a
                className="btn btn-primary wow fadeInUp text-nowrap"
                href="#"
                //  style="visibility: visible;"
              >
                Watch video
              </a>{" "}
            </div>
          </span>
        </div>
      </section>
      {/* <section className="row justify-content-between mb-5">
        <div className="col-12 image-container-col text-center">
          <div className="homepage-animation">
            {" "}
            <svg
              id="why-all-in-one"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 1920 1100.9"
            >
              {" "}
              <defs>
                {" "}
                <linearGradient
                  id="why-all-in-one--gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                  gradientUnits="userSpaceOnUse"
                >
                  {" "}
                  <stop offset="0" stop-color="#fff"></stop>{" "}
                  <stop offset="0.5" stop-color="#f3f4f9"></stop>{" "}
                  <stop offset="1" stop-color="#fff"></stop>{" "}
                </linearGradient>{" "}
                <clipPath id="why-all-in-one--clip-rate">
                  {" "}
                  <path d="M232,144.7H469a5,5,0,0,1,5,5v297a40,40,0,0,1-40,40H197a5,5,0,0,1-5-5v-297A40,40,0,0,1,232,144.7Z"></path>{" "}
                </clipPath>{" "}
                <clipPath id="why-all-in-one--clip-room">
                  {" "}
                  <path d="M741,200.9H978a5,5,0,0,1,5,5v117a40,40,0,0,1-40,40H706a5,5,0,0,1-5-5v-117A40,40,0,0,1,741,200.9Z"></path>{" "}
                </clipPath>{" "}
                <clipPath id="why-all-in-one--clip-amount">
                  {" "}
                  <path d="M1449,74.7h237a5,5,0,0,1,5,5v122a40,40,0,0,1-40,40H1414a5,5,0,0,1-5-5v-122A40,40,0,0,1,1449,74.7Z"></path>{" "}
                </clipPath>{" "}
                <clipPath id="why-all-in-one--clip-blank-left">
                  {" "}
                  <path d="M320,784.9H557a5,5,0,0,1,5,5v118a40,40,0,0,1-40,40H285a5,5,0,0,1-5-5v-118A40,40,0,0,1,320,784.9Z"></path>{" "}
                </clipPath>{" "}
                <clipPath id="why-all-in-one--clip-pediatritian">
                  {" "}
                  <path d="M524,541.9H761a40,40,0,0,1,40,40v118a5,5,0,0,1-5,5H524a5,5,0,0,1-5-5v-153A5,5,0,0,1,524,541.9Z"></path>{" "}
                </clipPath>{" "}
                <clipPath id="why-all-in-one--clip-blank-right">
                  {" "}
                  <path d="M1048,503.9h139a40,40,0,0,1,40,40v177a5,5,0,0,1-5,5H1048a5,5,0,0,1-5-5v-212A5,5,0,0,1,1048,503.9Z"></path>{" "}
                </clipPath>{" "}
                <clipPath id="why-all-in-one--clip-leads">
                  {" "}
                  <path d="M1389.3,549.9h240a5,5,0,0,1,5,5v292a40,40,0,0,1-40,40h-240a5,5,0,0,1-5-5v-292A40,40,0,0,1,1389.3,549.9Z"></path>{" "}
                </clipPath>{" "}
                <clipPath id="why-all-in-one--clip-stars">
                  {" "}
                  <path d="M266,482l-4.9-2.7-4.9,2.7c-.5.2-.8,0-.8-.5l1-5.7-4-3.9c-.4-.4-.3-.8.3-.9l5.5-.8,2.5-5.1c.2-.5.6-.5.8,0l2.5,5.1,5.5.8c.6.1.7.5.3.9l-4,3.9,1,5.7C266.9,482,266.5,482.2,266,482Z"></path>{" "}
                  <path d="M239.3,482l-4.9-2.7-5,2.7c-.5.2-.8,0-.7-.5l.9-5.7-3.9-3.9c-.4-.4-.3-.8.3-.9l5.4-.8,2.5-5.1c.3-.5.7-.5.9,0l2.5,5.1,5.5.8c.5.1.6.5.2.9l-3.9,3.9.9,5.7C240.1,482,239.8,482.2,239.3,482Z"></path>{" "}
                  <path d="M212.6,482l-5-2.7-4.9,2.7c-.5.2-.8,0-.7-.5l.9-5.7-4-3.9c-.4-.4-.2-.8.3-.9l5.5-.8,2.5-5.1c.2-.5.6-.5.9,0l2.4,5.1,5.5.8c.6.1.7.5.3.9l-4,3.9,1,5.7C213.4,482,213,482.2,212.6,482Z"></path>{" "}
                  <path d="M292.8,482l-5-2.7-4.9,2.7c-.5.2-.8,0-.7-.5l.9-5.7-3.9-3.9c-.4-.4-.3-.8.2-.9l5.5-.8,2.5-5.1c.2-.5.6-.5.9,0l2.5,5.1,5.4.8c.6.1.7.5.3.9l-3.9,3.9.9,5.7C293.6,482,293.3,482.2,292.8,482Z"></path>{" "}
                  <path d="M319.5,482l-4.9-2.7-5,2.7c-.4.2-.8,0-.7-.5l1-5.7-4-3.9c-.4-.4-.3-.8.3-.9l5.5-.8,2.4-5.1c.3-.5.7-.5.9,0l2.5,5.1,5.5.8c.5.1.7.5.3.9l-4,3.9.9,5.7C320.3,482,320,482.2,319.5,482Z"></path>{" "}
                </clipPath>{" "}
              </defs>{" "}
              <rect
                y="124.9"
                width="1920"
                height="976"
                fill="url(#why-all-in-one--gradient"
              ></rect>{" "}
              <g>
                {" "}
                <path
                  filter="url(#shadow)"
                  d="M642.5,859.4c-4.6,0-8.3-4.1-8.3-9V172.1c0-5,3.7-9,8.3-9h936c4.6,0,8.3,4,8.3,9V850.4c0,4.9-3.7,9-8.3,9Zm-299.8,0a9.3,9.3,0,0,1-9.5-9.2V61.6a9.3,9.3,0,0,1,9.5-9.1H611.9a9.3,9.3,0,0,1,9.5,9.1V850.2a9.3,9.3,0,0,1-9.5,9.2Zm299.8-709a8,8,0,0,1-8-8V60.5a8,8,0,0,1,8-8h936.3a8,8,0,0,1,8,8v81.9a8,8,0,0,1-8,8Z"
                  fill="#fff"
                ></path>{" "}
                <g fill="#f6f8fb">
                  {" "}
                  <path d="M382.9,131h0l-5.5-5.4L411,92.8l5.5,5.4Zm-11.8-10.7h0l-12.2-11.8a15.7,15.7,0,0,1-2-2.5,12,12,0,0,1-1.6-2.7,15.4,15.4,0,0,1,3.3-17.2,17.2,17.2,0,0,1,5.1-3.3,16.7,16.7,0,0,1,3-.8,16.3,16.3,0,0,1,3.1-.3h.3a16.5,16.5,0,0,1,11.5,4.7l2.7,2.7-5.5,5.4L376,91.8a8.6,8.6,0,0,0-6-2.5h-1.8l-1.5.5a8,8,0,0,0-2.6,1.6,8.1,8.1,0,0,0-2.3,5.7,8.9,8.9,0,0,0,2.6,5.9l6.7,6.5,28.6-27.8,5.5,5.4-34.1,33.1Z"></path>{" "}
                  <rect
                    x="354"
                    y="162.9"
                    width="202.1"
                    height="17.71"
                    rx="5"
                  ></rect>{" "}
                  <rect
                    x="385.3"
                    y="209.8"
                    width="189.6"
                    height="19.8"
                    rx="5"
                  ></rect>{" "}
                  <rect
                    x="354"
                    y="209.8"
                    width="20.8"
                    height="19.8"
                    rx="5"
                  ></rect>{" "}
                  <rect
                    x="385.3"
                    y="252.5"
                    width="189.6"
                    height="19.8"
                    rx="5"
                  ></rect>{" "}
                  <rect
                    x="354"
                    y="252.5"
                    width="20.8"
                    height="19.8"
                    rx="5"
                  ></rect>{" "}
                  <rect
                    x="385.3"
                    y="294.2"
                    width="189.6"
                    height="19.8"
                    rx="5"
                  ></rect>{" "}
                  <rect
                    x="354"
                    y="294.2"
                    width="20.8"
                    height="19.8"
                    rx="5"
                  ></rect>{" "}
                  <rect
                    x="385.3"
                    y="336.9"
                    width="189.6"
                    height="19.8"
                    rx="5"
                  ></rect>{" "}
                  <rect
                    x="354"
                    y="336.9"
                    width="20.8"
                    height="19.8"
                    rx="5"
                  ></rect>{" "}
                  <rect
                    x="385.3"
                    y="378.6"
                    width="189.6"
                    height="19.8"
                    rx="5"
                  ></rect>{" "}
                  <rect
                    x="354"
                    y="378.6"
                    width="20.8"
                    height="19.8"
                    rx="5"
                  ></rect>{" "}
                  <rect
                    x="385.3"
                    y="421.3"
                    width="189.6"
                    height="19.8"
                    rx="5"
                  ></rect>{" "}
                  <rect
                    x="354"
                    y="421.3"
                    width="20.8"
                    height="19.8"
                    rx="5"
                  ></rect>{" "}
                  <rect
                    x="385.3"
                    y="463"
                    width="189.6"
                    height="19.8"
                    rx="5"
                  ></rect>{" "}
                  <rect
                    x="354"
                    y="463"
                    width="20.8"
                    height="19.8"
                    rx="5"
                  ></rect>{" "}
                  <rect
                    x="385.3"
                    y="504.7"
                    width="189.6"
                    height="20.84"
                    rx="5"
                  ></rect>{" "}
                  <rect
                    x="354"
                    y="504.7"
                    width="20.8"
                    height="20.84"
                    rx="5"
                  ></rect>{" "}
                  <rect
                    x="385.3"
                    y="546.4"
                    width="189.6"
                    height="20.84"
                    rx="5"
                  ></rect>{" "}
                  <rect
                    x="354"
                    y="546.4"
                    width="20.8"
                    height="20.84"
                    rx="5"
                  ></rect>{" "}
                  <rect
                    x="385.3"
                    y="589.1"
                    width="189.6"
                    height="20.84"
                    rx="5"
                  ></rect>{" "}
                  <rect
                    x="354"
                    y="589.1"
                    width="20.8"
                    height="20.84"
                    rx="5"
                  ></rect>{" "}
                  <rect x="385.3" y="630.7" width="189.6" height="20.84"></rect>{" "}
                  <rect x="354" y="630.7" width="20.8" height="20.84"></rect>{" "}
                  <rect
                    x="646.1"
                    y="237.9"
                    width="410.5"
                    height="289.64"
                    rx="5"
                  ></rect>{" "}
                  <rect
                    x="679.1"
                    y="196.8"
                    width="132.3"
                    height="22.92"
                    rx="5"
                  ></rect>{" "}
                  <rect
                    x="1112.5"
                    y="235.9"
                    width="410.5"
                    height="289.64"
                    rx="5"
                  ></rect>{" "}
                  <rect
                    x="679.1"
                    y="570.3"
                    width="132.3"
                    height="23.96"
                    rx="5"
                  ></rect>{" "}
                  <rect
                    x="679.1"
                    y="615.1"
                    width="304.2"
                    height="200.04"
                    rx="5"
                  ></rect>{" "}
                  <rect
                    x="1011.4"
                    y="615.1"
                    width="304.2"
                    height="200.04"
                    rx="5"
                  ></rect>{" "}
                  <rect
                    x="679.1"
                    y="85.8"
                    width="221.9"
                    height="29.17"
                    rx="5"
                  ></rect>{" "}
                  <rect
                    x="920.8"
                    y="93.1"
                    width="250.1"
                    height="15.63"
                    rx="5"
                  ></rect>{" "}
                  <rect
                    x="1190.6"
                    y="93.1"
                    width="250.1"
                    height="15.63"
                    rx="5"
                  ></rect>{" "}
                  <rect
                    x="354"
                    y="815.2"
                    width="24"
                    height="22.92"
                    rx="5"
                  ></rect>{" "}
                </g>{" "}
              </g>{" "}
              <g>
                {" "}
                <g
                  className="masked-photo-wrapper"
                  clip-path="url(#why-all-in-one--clip-amount)"
                  style="transform-origin: 0px 0px;"
                  data-svg-origin="0 0"
                  transform="matrix(1,0,0,1,0,0)"
                >
                  {" "}
                  <image
                    className="masked-photo"
                    x="1409"
                    y="74"
                    width="282"
                    href="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/why-all-in-one/amount.jpg"
                    data-svg-origin="1550 157.4868392944336"
                    transform="matrix(1,0,0,1,0,0)"
                    style="transform-origin: 0px 0px;"
                  ></image>{" "}
                </g>{" "}
                <g
                  className="masked-photo-wrapper"
                  clip-path="url(#why-all-in-one--clip-rate)"
                  style="transform-origin: 0px 0px;"
                  data-svg-origin="0 0"
                  transform="matrix(1,0,0,1,0,0)"
                >
                  {" "}
                  <image
                    className="masked-photo"
                    x="193"
                    y="145"
                    width="282"
                    href="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/why-all-in-one/rate.jpg"
                    data-svg-origin="334 315.6842041015625"
                    transform="matrix(1,0,0,1,0,0)"
                    style="transform-origin: 0px 0px;"
                  ></image>{" "}
                </g>{" "}
                <g
                  className="masked-photo-wrapper"
                  clip-path="url(#why-all-in-one--clip-room)"
                  style="transform-origin: 0px 0px;"
                  data-svg-origin="0 0"
                  transform="matrix(1,0,0,1,0,0)"
                >
                  {" "}
                  <image
                    className="masked-photo"
                    x="700"
                    y="201"
                    width="282"
                    href="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/why-all-in-one/room.jpg"
                    data-svg-origin="841 281.8894729614258"
                    transform="matrix(1,0,0,1,0,0)"
                    style="transform-origin: 0px 0px;"
                  ></image>{" "}
                </g>{" "}
                <g
                  className="masked-photo-wrapper"
                  clip-path="url(#why-all-in-one--clip-leads)"
                  style="transform-origin: 0px 0px;"
                  data-svg-origin="0 0"
                  transform="matrix(1,0,0,1,0,0)"
                >
                  {" "}
                  <image
                    className="masked-photo"
                    x="1349"
                    y="544"
                    width="286"
                    href="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/why-all-in-one/leads.jpg"
                    data-svg-origin="1492 717.1052703857422"
                    transform="matrix(1,0,0,1,0,0)"
                    style="transform-origin: 0px 0px;"
                  ></image>{" "}
                </g>{" "}
                <g
                  className="masked-photo-wrapper"
                  clip-path="url(#why-all-in-one--clip-pediatritian)"
                  style="transform-origin: 0px 0px;"
                  data-svg-origin="0 0"
                  transform="matrix(1,0,0,1,0,0)"
                >
                  {" "}
                  <image
                    className="masked-photo"
                    x="519"
                    y="542"
                    width="282"
                    href="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/why-all-in-one/pediatritian.jpg"
                    data-svg-origin="660 623.2605285644531"
                    transform="matrix(1,0,0,1,0,0)"
                    style="transform-origin: 0px 0px;"
                  ></image>{" "}
                </g>{" "}
                <g
                  className="masked-photo-wrapper"
                  clip-path="url(#why-all-in-one--clip-blank-right)"
                  style="transform-origin: 0px 0px;"
                  data-svg-origin="0 0"
                  transform="matrix(1,0,0,1,0,0)"
                >
                  {" "}
                  <image
                    className="masked-photo"
                    x="1042"
                    y="503"
                    width="185"
                    href="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/why-all-in-one/blank-right.jpg"
                    data-svg-origin="1134.5 614.9736862182617"
                    transform="matrix(1,0,0,1,0,0)"
                    style="transform-origin: 0px 0px;"
                  ></image>{" "}
                </g>{" "}
                <g
                  className="masked-photo-wrapper"
                  clip-path="url(#why-all-in-one--clip-blank-left)"
                  style="transform-origin: 0px 0px;"
                  data-svg-origin="0 0"
                  transform="matrix(1,0,0,1,0,0)"
                >
                  {" "}
                  <image
                    className="masked-photo"
                    x="280"
                    y="785"
                    width="282"
                    href="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/why-all-in-one/blank-left.jpg"
                    data-svg-origin="421 866.2605285644531"
                    transform="matrix(1,0,0,1,0,0)"
                    style="transform-origin: 0px 0px;"
                  ></image>{" "}
                </g>{" "}
                <g
                  className="leads-block"
                  data-svg-origin="1553.800048828125 747.9000244140625"
                  transform="matrix(1,0,0,1,0,0)"
                  style="transform-origin: 0px 0px;"
                >
                  {" "}
                  <rect
                    filter="url(#shadow)"
                    x="1553.8"
                    y="747.9"
                    width="226.1"
                    height="209.92"
                    rx="4"
                    fill="#fff"
                    opacity="0.98"
                  ></rect>{" "}
                  <text
                    className="leads-number"
                    x="1579.5"
                    y="821.8"
                    font-size="29"
                    fill="#2f2e50"
                  >
                    420
                  </text>{" "}
                  <text x="1578.6" y="787.6" font-size="15" fill="#2f2e50">
                    Patient Leads
                  </text>{" "}
                  <g className="bars">
                    {" "}
                    <path
                      d="M1585,883.8h4.7a2,2,0,0,1,2,2h0v11H1583v-11A2,2,0,0,1,1585,883.8Z"
                      fill="#07c597"
                      data-svg-origin="1587.3499755859375 896.7999877929688"
                      transform="matrix(1,0,0,1,0,0)"
                      style="transform-origin: 0px 0px;"
                    ></path>{" "}
                    <path
                      d="M1611,868.1h4.7a2,2,0,0,1,2,2h0v16.3H1609V870.1A2,2,0,0,1,1611,868.1Z"
                      fill="#07c597"
                      data-svg-origin="1613.3499755859375 886.3999633789062"
                      transform="matrix(1,0,0,1,0,0)"
                      style="transform-origin: 0px 0px;"
                    ></path>{" "}
                    <path
                      d="M1637.1,861.2h4.7a2,2,0,0,1,2,2h0v15.4h-8.7V863.2A2,2,0,0,1,1637.1,861.2Z"
                      fill="#07c597"
                      data-svg-origin="1639.449951171875 878.6000366210938"
                      transform="matrix(1,0,0,1,0,0)"
                      style="transform-origin: 0px 0px;"
                    ></path>{" "}
                    <path
                      d="M1663.1,850.8h4.7a2,2,0,0,1,2,2h0v24h-8.7v-24A2,2,0,0,1,1663.1,850.8Z"
                      fill="#07c597"
                      data-svg-origin="1665.449951171875 876.7999877929688"
                      transform="matrix(1,0,0,1,0,0)"
                      style="transform-origin: 0px 0px;"
                    ></path>{" "}
                    <path
                      d="M1689.2,836.9h4.7a2,2,0,0,1,2,2h0v24.9h-8.7V838.9A2,2,0,0,1,1689.2,836.9Z"
                      fill="#07c597"
                      data-svg-origin="1691.5499267578125 863.800048828125"
                      transform="matrix(1,0,0,1,0,0)"
                      style="transform-origin: 0px 0px;"
                    ></path>{" "}
                    <path
                      d="M1715.2,829.1h4.7a2,2,0,0,1,2,2h0v28.4h-8.7V831.1A2,2,0,0,1,1715.2,829.1Z"
                      fill="#07c597"
                      data-svg-origin="1717.5499267578125 859.5"
                      transform="matrix(1,0,0,1,0,0)"
                      style="transform-origin: 0px 0px;"
                    ></path>{" "}
                    <path
                      d="M1741.3,814.3h4.7a2,2,0,0,1,2,2h0v36.2h-8.7V816.3A2,2,0,0,1,1741.3,814.3Z"
                      fill="#07c597"
                      data-svg-origin="1743.6500244140625 852.5"
                      transform="matrix(1,0,0,1,0,0)"
                      style="transform-origin: 0px 0px;"
                    ></path>{" "}
                  </g>{" "}
                  <g>
                    {" "}
                    <path
                      d="M1583,898.5h8.7v11.9a2,2,0,0,1-2,2H1585a2,2,0,0,1-2-2V898.5Z"
                      fill="#9ce8d5"
                    ></path>{" "}
                    <path
                      d="M1609,888.1h8.7v22.3a2,2,0,0,1-2,2H1611a2,2,0,0,1-2-2V888.1Z"
                      fill="#9ce8d5"
                    ></path>{" "}
                    <path
                      d="M1635.1,880.2h8.7v30.9c0,.7-.8,1.3-1.8,1.3h-5.2c-1,0-1.7-.6-1.7-1.3Z"
                      fill="#9ce8d5"
                    ></path>{" "}
                    <path
                      d="M1661.1,878.6h8.7v32.6c0,.7-.8,1.2-1.7,1.2h-5.2c-1,0-1.8-.5-1.8-1.2Z"
                      fill="#9ce8d5"
                    ></path>{" "}
                    <path
                      d="M1687.2,865.5h8.7v44.9a2,2,0,0,1-2,2h-4.7a2,2,0,0,1-2-2V865.5Z"
                      fill="#9ce8d5"
                    ></path>{" "}
                    <path
                      d="M1713.2,861.2h8.7v49.2a2,2,0,0,1-2,2h-4.7a2,2,0,0,1-2-2V861.2Z"
                      fill="#9ce8d5"
                    ></path>{" "}
                    <path
                      d="M1739.3,854.3h8.7v56.1a2,2,0,0,1-2,2h-4.7a2,2,0,0,1-2-2V854.3Z"
                      fill="#9ce8d5"
                    ></path>{" "}
                  </g>{" "}
                  <g className="badge" style="opacity: 1;">
                    {" "}
                    <rect
                      x="1711.2"
                      y="776.5"
                      width="40.6"
                      height="17.17"
                      rx="4"
                      fill="#cdf3ea"
                    ></rect>{" "}
                    <text x="1718" y="788.8" font-size="11" fill="#019d78">
                      +10%
                    </text>{" "}
                  </g>{" "}
                  <text x="1596.5" y="934" font-size="10" fill="#2f2e50">
                    New
                  </text>{" "}
                  <circle
                    cx="1586.7"
                    cy="930.5"
                    r="4.6"
                    fill="#1fc597"
                  ></circle>{" "}
                  <circle cx="1655.7" cy="931" r="4.6" fill="#9ce8d5"></circle>{" "}
                  <text x="1665.5" y="934" font-size="10" fill="#2f2e50">
                    Returning
                  </text>{" "}
                </g>{" "}
                <g
                  className="search-block"
                  data-svg-origin="698 656"
                  transform="matrix(1,0,0,1,0,0)"
                  style="transform-origin: 0px 0px;"
                >
                  {" "}
                  <rect
                    filter="url(#shadow)"
                    x="698"
                    y="656"
                    width="233.3"
                    height="195.79"
                    rx="4"
                    fill="#fff"
                    opacity="0.9"
                  ></rect>{" "}
                  <rect
                    x="701.6"
                    y="660.3"
                    width="226.1"
                    height="41.6"
                    rx="4"
                    fill="#f6f8fb"
                  ></rect>{" "}
                  <text
                    style="opacity: 1;"
                    className="pediatrician-location-text"
                    x="715.5"
                    y="731.1"
                    font-size="15"
                    fill="#99a1b8"
                  >
                    Santa Monica{" "}
                  </text>{" "}
                  <text
                    className="pediatrician-text"
                    x="715.5"
                    y="731.1"
                    font-size="15"
                    fill="#2f2e50"
                    data-svg-origin="715.5 717.306396484375"
                    transform="matrix(1,0,0,1,100,0)"
                    style="transform-origin: 0px 0px;"
                  >
                    Pediatrician
                  </text>{" "}
                  <line
                    x1="931.3"
                    y1="751.1"
                    x2="698.8"
                    y2="751.1"
                    fill="none"
                    stroke="#f6f8fb"
                    stroke-width="2"
                  ></line>{" "}
                  <line
                    x1="931.3"
                    y1="800.9"
                    x2="698.8"
                    y2="800.9"
                    fill="none"
                    stroke="#f6f8fb"
                    stroke-width="2"
                  ></line>{" "}
                  <text
                    style="opacity: 1;"
                    className="pediatrician-location-text"
                    x="715.5"
                    y="780.9"
                    font-size="15"
                    fill="#99a1b8"
                  >
                    Los Angeles
                  </text>{" "}
                  <text
                    className="pediatrician-text"
                    x="715.5"
                    y="780.9"
                    font-size="15"
                    fill="#2f2e50"
                    data-svg-origin="715.5 767.1064453125"
                    transform="matrix(1,0,0,1,90,0)"
                    style="transform-origin: 0px 0px;"
                  >
                    Pediatrician
                  </text>{" "}
                  <text
                    className="pediatrician-text"
                    x="715.5"
                    y="830.7"
                    font-size="15"
                    fill="#99a1b8"
                  >
                    Pediatrician
                  </text>{" "}
                  <text
                    className="pediatrician-near-text"
                    x="717.6"
                    y="686.6"
                    font-size="15"
                    fill="#2f2e50"
                  >
                    Pediatrician near me
                  </text>{" "}
                  <rect
                    className="cursor"
                    x="716"
                    y="671.6"
                    width="1.4"
                    height="20.08"
                    fill="#07c597"
                    style="opacity: 0; transform-origin: 0px 0px;"
                    data-svg-origin="716 671.5999755859375"
                    transform="matrix(1,0,0,1,137.8063,0)"
                  ></rect>{" "}
                </g>{" "}
                <g
                  className="rate-block"
                  data-svg-origin="119.69999694824219 391.70001220703125"
                  transform="matrix(1,0,0,1,0,0)"
                  style="transform-origin: 0px 0px;"
                >
                  {" "}
                  <rect
                    filter="url(#shadow)"
                    x="119.7"
                    y="391.7"
                    width="227.3"
                    height="112.16"
                    rx="4"
                    fill="#fff"
                    opacity="0.95"
                  ></rect>{" "}
                  <rect
                    clip-path="url(#why-all-in-one--clip-stars)"
                    x="197.1"
                    y="463.1"
                    width="129"
                    height="22"
                    fill="#e1e1ea"
                  ></rect>{" "}
                  <g clip-path="url(#why-all-in-one--clip-stars)">
                    {" "}
                    <rect
                      className="stars-filling"
                      x="197.1"
                      y="463.1"
                      width="77"
                      height="23"
                      fill="#fac444"
                      data-svg-origin="197.10000610351562 474.6000061035156"
                      transform="matrix(1,0,0,1,0,0)"
                      style="transform-origin: 0px 0px;"
                    ></rect>{" "}
                  </g>{" "}
                  <text x="137" y="419.4" font-size="14" fill="#2f2e50">
                    Rate your experience
                  </text>{" "}
                  <text x="201.1" y="456.2" font-size="11" fill="#2f2e50">
                    Dr. Katherine Wells, MD
                  </text>{" "}
                  <image
                    x="136"
                    y="436.7"
                    width="50"
                    height="50"
                    href="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/avatars/dr-wells.png"
                  ></image>{" "}
                </g>{" "}
                <g
                  className="payment-block"
                  data-svg-origin="1321.9000244140625 143.60000610351562"
                  transform="matrix(1,0,0,1,0,0)"
                  style="transform-origin: 0px 0px;"
                >
                  {" "}
                  <rect
                    filter="url(#shadow)"
                    x="1321.9"
                    y="143.6"
                    width="158.2"
                    height="117.41"
                    rx="4"
                    fill="#fff"
                    opacity="0.95"
                  ></rect>{" "}
                  <g
                    className="btn"
                    data-svg-origin="1342 212.10000610351562"
                    transform="matrix(1,0,0,1,0,0)"
                    style="transform-origin: 0px 0px;"
                  >
                    {" "}
                    <rect
                      className="btn-body"
                      x="1342"
                      y="212.1"
                      width="119.2"
                      height="29.42"
                      rx="5"
                      fill="#07c597"
                    ></rect>{" "}
                    <text x="1374" y="230.5" font-size="11" fill="#fff">
                      Pay invoice
                    </text>{" "}
                  </g>{" "}
                  <text x="1341.7" y="197.4" font-size="18" fill="#2f2e50">
                    $459.50
                  </text>{" "}
                  <text x="1341.7" y="173.3" font-size="11" fill="#2f2e50">
                    Amount due
                  </text>{" "}
                  <rect
                    x="1422.7"
                    y="186"
                    width="38.3"
                    height="12.71"
                    rx="4"
                    fill="#fff"
                    stroke="#fec635"
                    stroke-width="2"
                  ></rect>{" "}
                  <text
                    x="1426.7"
                    y="195.2"
                    font-size="8"
                    fill="#fec635"
                    font-weight="700"
                  >
                    UNPAID
                  </text>{" "}
                </g>{" "}
                <g
                  className="waiting-block"
                  data-svg-origin="904 304.8999938964844"
                  transform="matrix(1,0,0,1,0,0)"
                  style="transform-origin: 0px 0px;"
                >
                  {" "}
                  <rect
                    filter="url(#shadow)"
                    x="904"
                    y="304.9"
                    width="243"
                    height="98"
                    rx="10"
                    fill="#fff"
                    opacity="0.95"
                  ></rect>{" "}
                  <image
                    x="921"
                    y="347.9"
                    width="35"
                    height="35"
                    href="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/avatars/dr-wells.png"
                  ></image>{" "}
                  <path
                    d="M1119.4,362.5l4.6-2.3v10.4l-4.6-2.4v1.1a1.6,1.6,0,0,1-1.6,1.6h-9.3a1.6,1.6,0,0,1-1.5-1.6h0v-7.9a1.5,1.5,0,0,1,1.5-1.5h9.3a1.6,1.6,0,0,1,1.6,1.5h0Zm0,1.8v2.1l3.1,1.6v-5.3Z"
                    fill="#2c98f7"
                  ></path>{" "}
                  <text x="923" y="331.9" font-size="13" fill="#3b435b">
                    Waiting Room
                  </text>{" "}
                  <text
                    x="962.5"
                    y="361.7"
                    font-size="14"
                    fill="#313b59"
                    font-weight="700"
                  >
                    Amondi Nyong’o
                  </text>{" "}
                  <text x="962.5" y="377.7" font-size="12" fill="#9ba1b7">
                    9:30 - 10am
                  </text>{" "}
                </g>{" "}
              </g>{" "}
            </svg>{" "}
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
                  <feFlood flood-opacity="0.1"></feFlood>{" "}
                  <feComposite operator="in" in2="d"></feComposite>{" "}
                  <feComposite in="SourceGraphic"></feComposite>{" "}
                </filter>{" "}
              </defs>{" "}
            </svg>
          </div>
        </div>
      </section> */}
      <section className="row justify-content-center quote-section my-5 pb-5">
        <div className="col-12 col-md-10 text-center">
          <div
            className="wow fadeInUp line-bottom"
            // style="visibility: visible; animation-name: fadeInUp;"
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
      {/* <section className="row justify-content-center awards-section pb-5"><div className="col-12 col-md-10 text-center"> <a href="https://www.g2.com/products/patientpop/reviews?utm_source=review-widget" title="Read reviews of PatientPop on G2" rel="nofollow"><noscript><img className="full-width" style="max-width: 200px" alt="Read PatientPop reviews on G2" src="https://www.g2.com/products/patientpop/widgets/stars?color=white&amp;type=read" /></noscript><img className="full-width lazyloaded" style="max-width: 200px" alt="Read PatientPop reviews on G2" src="https://www.g2.com/products/patientpop/widgets/stars?color=white&amp;type=read" data-src="https://www.g2.com/products/patientpop/widgets/stars?color=white&amp;type=read"/></a><script>(function(a,b,c,d){window.fetch("https://www.g2.com/products/patientpop/rating_schema.json").then(e=>e.json()).then(f=>{c=a.createElement(b);c.type="application/ld+json";c.text=JSON.stringify(f);d=a.getElementsByTagName(b)[0];d.parentNode.insertBefore(c,d);});})(document,"script");</script> <a title="PatientPop is a leader in Patient Engagement on G2" href="https://www.g2.com/products/patientpop/reviews?utm_source=rewards-badge" rel="nofollow"><noscript><img style="width: 125px;" alt="PatientPop is a leader in Patient Engagement on G2" src="https://images.g2crowd.com/uploads/report_medal/image/2863/medal.svg" /></noscript><img className=" lazyloaded" style="width: 125px;" alt="PatientPop is a leader in Patient Engagement on G2" src="https://images.g2crowd.com/uploads/report_medal/image/2863/medal.svg" data-src="https://images.g2crowd.com/uploads/report_medal/image/2863/medal.svg"/></a><script>(function(a,b,c,d){window.fetch("https://www.g2.com/products/patientpop/rating_schema.json").then(e=>e.json()).then(f=>{c=a.createElement(b);c.type="application/ld+json";c.text=JSON.stringify(f);d=a.getElementsByTagName(b)[0];d.parentNode.insertBefore(c,d);});})(document,"script");</script> </div></section> */}
      <section className="row justify-content-center my-5 py-5">
        <div className="col-12 col-md-9 text-center">
          <div
            className="wow fadeInUp"
            //   style="visibility: visible; animation-name: fadeInUp;"
          >
            <h3 className="display-1 line-center">
              From first impression to lasting <strong>relationships</strong>
            </h3>
            <p>
              You no longer need multiple, disconnected tools. We make the
              entire patient journey easier and more accessible — for you and
              your patients. We begin from patients’ first step: looking online
              for a doctor. Our medical marketing expertise attracts more
              patients to your website and practice. We then make it easy to
              book an appointment with you and keep returning to your practice.
            </p>
          </div>
        </div>
      </section>
      <section className="row justify-content-evenly">
        <div className="col-12 col-md-5 mb-5">
          <div className="image-container mb-4">
            <noscript>
              <img
                className="full-width"
                src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/why-pages/why-all-in-one-01.png"
              />
            </noscript>
            <img
              className="full-width lazyloaded"
              src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/why-pages/why-all-in-one-01.png"
              data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/why-pages/why-all-in-one-01.png"
            />
          </div>
          <h5>Every aspect of patient connection in one place</h5>
        </div>
        <div className="col-12 col-md-5 mb-5">
          <div className="image-container mb-4">
            <noscript>
              <img
                className="full-width"
                src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/why-pages/why-all-in-one-02.png"
              />
            </noscript>
            <img
              className="full-width lazyloaded"
              src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/why-pages/why-all-in-one-02.png"
              data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/why-pages/why-all-in-one-02.png"
            />
          </div>
          <h5>Making it easier to run a thriving practice</h5>
        </div>
        <div className="col-12 col-md-5 mb-5">
          <div className="image-container mb-4">
            <noscript>
              <img
                className="full-width"
                src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/why-pages/why-all-in-one-03.png"
              />
            </noscript>
            <img
              className="full-width lazyloaded"
              src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/why-pages/why-all-in-one-03.png"
              data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/why-pages/why-all-in-one-03.png"
            />
          </div>
          <h5>No more disconnected tools</h5>
        </div>
        <div className="col-12 col-md-5 mb-5">
          <div className="image-container mb-4">
            {" "}
            <noscript>
              <img
                className="full-width"
                src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/why-pages/why-all-in-one-04.png"
              />
            </noscript>
            <img
              className="full-width lazyloaded"
              src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/why-pages/why-all-in-one-04.png"
              data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/why-pages/why-all-in-one-04.png"
            />
          </div>
          <h5>Improved practice operations</h5>
        </div>
        <div className="col-12 col-md-5 mb-5">
          <div className="image-container mb-4">
            {" "}
            <noscript>
              <img
                className="full-width"
                src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/why-pages/why-all-in-one-05.png"
              />
            </noscript>
            <img
              className="full-width lazyloaded"
              src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/why-pages/why-all-in-one-05.png"
              data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/why-pages/why-all-in-one-05.png"
            />
          </div>
          <h5>A seamless patient experience</h5>
        </div>
        <div className="col-12 col-md-5 mb-5">
          <div className="image-container mb-4">
            {" "}
            <noscript>
              <img
                className="full-width"
                src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/why-pages/why-all-in-one-06.png"
              />
            </noscript>
            <img
              className="full-width lazyloaded"
              src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/why-pages/why-all-in-one-06.png"
              data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/why-pages/why-all-in-one-06.png"
            />
          </div>
          <h5>Better business outcomes for practices</h5>
        </div>
      </section>
      <section className="row justify-content-center my-5 py-5">
        <div className="col-12 col-md-6 col-lg-7">
          {" "}
          <noscript>
            <img
              className="full-width"
              src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/01-It-all-starts-with-a-power-practice-site.jpg"
            />
          </noscript>
          <img
            className="full-width lazyloaded"
            src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/01-It-all-starts-with-a-power-practice-site.jpg"
            data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/uploads/01-It-all-starts-with-a-power-practice-site.jpg"
          />
        </div>
        <div className="col-12 col-md-6 col-lg-5 align-self-center justify-content-right">
          <div
            className="wow fadeInUp"
            //  style="visibility: visible; animation-name: fadeInUp;"
          >
            <h2 className="display-5">Power up your website</h2>
            <p>
              Elevate your practice in local search results and grow your
              business with a custom healthcare website from PatientPop. Your
              new website will look great on all devices, feature essential
              information about services and provider bios, plus utilize tools
              such as <a href="">digital patient intake forms</a> and{" "}
              <a href="">web-to-text</a> to convert site visitors into patients.
            </p>{" "}
            <a
              href="/why-your-website-is-important"
              className="btn btn-link btn-next"
            >
              Why your website is so important
            </a>
          </div>
        </div>
      </section>
      <section className="container-xxl my-5 py-5">
        <div className="row pt-5 mt-5 pb-5 mb-5 justify-content-center">
          <div className="col-12 col-md-9 text-center">
            <h2
              className="display-1 wow fadeInUp"
              //  style="visibility: visible; animation-name: fadeInUp;"
            >
              Get the platform you need and{" "}
              <strong>deliver the experience</strong> your patients deserve
            </h2>{" "}
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#modalDemoRequestBody"
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

export default Index;

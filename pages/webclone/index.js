import ContainerFooter from "../../components/containerFooter";
import ContainerPage4 from "../../components/containerpage4";
import ContainerPage from "../../components/containerpages";
import ContainerPages2 from "../../components/containerpages2";
import ContainerPages3 from "../../components/containerpages3";
import ContainerNavbar from "./containernavbar";

function WebClone() {
  return (
    <div>
      <ContainerNavbar />
      <div className="container-fluid homepage-hero">
        <div className="container mt-5 pt-5 mt-md-4 pt-md-4">
          <div className="row justify-content-around">
            <div className="col-12 col-lg-6 align-self-center">
              <div className="row">
                <div className="col-12 text-start">
                  <h1
                    className="display-1 wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    Enable caregivers to engage with Patients{" "}
                    <strong>better</strong>
                  </h1>
                  <p
                    className="line-left wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    The all-in-one healthcare marketing and medical practice
                    management solution that enhances every patient touchpoint.
                  </p>
                </div>
                <div className="col-12 mt-3 d-flex align-self-center justify-content-between flex-wrap justify-content-md-start">
                  {" "}
                  <a
                    className="btn btn-primary wow fadeInUp text-nowrap"
                    href="/how-it-works"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    {" "}
                    How it works{" "}
                  </a>{" "}
                  {/* <a
                    className="btn btn-link wow fadeInUp text-nowrap"
                    data-bs-toggle="modal"
                    data-bs-target="#modalScanner"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    {" "}
                    Compare your practice{" "}
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 align-self-center homepage-animation-col">
              <div className="homepage-animation homepage-animation-hero">
                {" "}
                <svg
                  className="hero-image"
                  id="homepage-hero-animation"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1200 1200"
                  style={{ opacity: "1" }}
                >
                  {" "}
                  <defs>
                    {" "}
                    <clipPath id="homepage-hero-animation-rate-clip">
                      {" "}
                      <path d="M254.8,479.9l-4.9-2.7-5,2.7c-.5.3-.8,0-.8-.5l1-5.9-4-4c-.4-.5-.3-.9.3-.9l5.5-.9,2.5-5.3c.3-.5.7-.5.9,0l2.5,5.3,5.5.9c.6,0,.7.4.3.9l-4,4,1,5.9c.1.5-.3.8-.8.5"></path>{" "}
                      <path d="M278.6,479.9l-5-2.7-5,2.7c-.5.3-.8,0-.7-.5l.9-5.9-4-4c-.4-.5-.3-.9.3-.9l5.5-.9,2.5-5.3c.3-.5.7-.5.9,0l2.5,5.3,5.5.9c.6,0,.7.4.3.9l-4,4,1,5.9c.1.5-.3.8-.8.5"></path>{" "}
                      <path d="M302.3,479.9l-5-2.7-5,2.7c-.5.3-.8,0-.7-.5l.9-5.9-4-4c-.4-.5-.3-.9.3-.9l5.5-.9,2.5-5.3c.3-.5.7-.5.9,0l2.5,5.3,5.6.9c.5,0,.6.4.2.9l-4,4,1,5.9c.1.5-.2.8-.7.5"></path>{" "}
                      <path d="M326,479.9l-5-2.7-5,2.7c-.5.3-.8,0-.7-.5l.9-5.9-4-4c-.4-.5-.3-.9.3-.9l5.5-.9,2.5-5.3c.3-.5.7-.5.9,0l2.5,5.3,5.6.9c.5,0,.6.4.2.9l-4,4,1,5.9c.1.5-.2.8-.7.5"></path>{" "}
                      <path d="M349.7,479.9l-5-2.7-5,2.7c-.5.3-.8,0-.7-.5l.9-5.9-4-4c-.4-.5-.2-.9.3-.9l5.5-.9,2.5-5.3c.3-.5.7-.5.9,0l2.5,5.3,5.6.9c.5,0,.7.4.3.9l-4.1,4,1,5.9c.1.5-.2.8-.7.5"></path>{" "}
                    </clipPath>{" "}
                    <clipPath id="homepage-hero-animation-image-clip">
                      {" "}
                      <path
                        className="homepage-animation-image-crop"
                        d="M264, 202 a50 50 1 0 1 50 -50 h612 a10 10 1 0 1 10 10 v836 a50 50 1 0 1 -50 50 h-612 a10 10 1 0 1 -10 -10z"
                      ></path>{" "}
                    </clipPath>{" "}
                    <clipPath id="homepage-hero-animation-shortcut-crop">
                      {" "}
                      <rect
                        className="shortcut-crop"
                        x="730"
                        y="675"
                        width="265"
                        height="275"
                        data-svg-origin="730 675"
                        transform="matrix(1,0,0,1,0,0)"
                        style={{ transformOrigin: " 0px 0px" }}
                      ></rect>{" "}
                    </clipPath>{" "}
                  </defs>{" "}
                  <g className="slide">
                    {" "}
                    <image
                      clip-path="url(#homepage-hero-animation-image-clip)"
                      x="120"
                      y="100"
                      width="900"
                      href="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/homepage/hero-01.jpg"
                      data-svg-origin="570 609.25"
                      transform="matrix(1,0,0,1,0,0)"
                      style={{ transformOrigin: " 0px 0px", opacity: "1" }}
                    ></image>{" "}
                    <g
                      className="layer"
                      filter="url(#shadow)"
                      data-svg-origin="600 600"
                      transform="matrix(1,0,0,1,0,0)"
                      style={{ transformOrigin: " 0px 0px", opacity: "1" }}
                    >
                      {" "}
                      <rect
                        x="303.2"
                        y="885"
                        width="260.3"
                        height="241.76"
                        rx="4"
                        fill="#fff"
                      ></rect>{" "}
                      <text
                        className="leads-number"
                        x="332.8"
                        y="972.8"
                        font-size="36"
                        fill="#2f2e50"
                      >
                        9,235
                      </text>{" "}
                      <text x="331.8" y="933.5" font-size="20" fill="#2f2e50">
                        Patient Leads
                      </text>{" "}
                      <g
                        className="bar"
                        data-svg-origin="341.798583984375 1074.502685546875"
                        transform="matrix(1,0,0,1,0,0)"
                        style={{ transformOrigin: "0px 0px" }}
                      >
                        {" "}
                        <path
                          d="M338.8,1041.5h6a2,2,0,0,1,2,2v13h-10v-13A1.9,1.9,0,0,1,338.8,1041.5Z"
                          fill="#07c597"
                        ></path>{" "}
                        <path
                          d="M336.8,1058.5h10v14a2,2,0,0,1-2,2h-6a1.9,1.9,0,0,1-2-2v-14Z"
                          fill="#9ce8d5"
                        ></path>{" "}
                      </g>{" "}
                      <g
                        className="bar"
                        data-svg-origin="371.798583984375 1074.502685546875"
                        transform="matrix(1,0,0,1,0,0)"
                        style={{ transformOrigin: "0px 0px" }}
                      >
                        {" "}
                        <path
                          d="M368.8,1023.5h6a2,2,0,0,1,2,2v19h-10v-19A1.9,1.9,0,0,1,368.8,1023.5Z"
                          fill="#07c597"
                        ></path>{" "}
                        <path
                          d="M366.8,1046.5h10v26a2,2,0,0,1-2,2h-6a1.9,1.9,0,0,1-2-2v-26Z"
                          fill="#9ce8d5"
                        ></path>{" "}
                      </g>{" "}
                      <g
                        className="bar"
                        data-svg-origin="401.798583984375 1074.4000244140625"
                        transform="matrix(1,0,0,1,0,0)"
                        style={{ transformOrigin: "0px 0px" }}
                      >
                        {" "}
                        <path
                          d="M398.8,1015.5h6a2,2,0,0,1,2,2v18h-10v-18A1.9,1.9,0,0,1,398.8,1015.5Z"
                          fill="#07c597"
                        ></path>{" "}
                        <path
                          d="M396.8,1037.4h10V1073c0,.8-.9,1.4-2,1.4h-6c-1.1,0-2-.6-2-1.4Z"
                          fill="#9ce8d5"
                        ></path>{" "}
                      </g>{" "}
                      <g
                        className="bar"
                        data-svg-origin="431.79859924316406 1074.5"
                        transform="matrix(1,0,0,1,0,0)"
                        style={{ transformOrigin: " 0px 0px;" }}
                      >
                        {" "}
                        <path
                          d="M428.8,1003.5h6a2,2,0,0,1,2,2v28h-10v-28A1.9,1.9,0,0,1,428.8,1003.5Z"
                          fill="#07c597"
                        ></path>{" "}
                        <path
                          d="M426.8,1035.5h10v37.6c0,.8-.9,1.4-2,1.4h-6c-1.1,0-2-.6-2-1.4Z"
                          fill="#9ce8d5"
                        ></path>{" "}
                      </g>{" "}
                      <g
                        className="bar"
                        data-svg-origin="461.79859924316406 1074.5028076171875"
                        transform="matrix(1,0,0,1,0,0)"
                        style={{ transformOrigin: "0px 0px" }}
                      >
                        {" "}
                        <path
                          d="M458.8,987.5h6a2,2,0,0,1,2,2v29h-10v-29A1.9,1.9,0,0,1,458.8,987.5Z"
                          fill="#07c597"
                        ></path>{" "}
                        <path
                          d="M456.8,1020.5h10v52a2,2,0,0,1-2,2h-6a1.9,1.9,0,0,1-2-2v-52Z"
                          fill="#9ce8d5"
                        ></path>{" "}
                      </g>{" "}
                      <g
                        className="bar"
                        data-svg-origin="491.79859924316406 1074.5028076171875"
                        transform="matrix(1,0,0,1,0,0)"
                        style={{ transformOrigin: "0px 0px" }}
                      >
                        {" "}
                        <path
                          d="M488.8,978.5h6a2,2,0,0,1,2,2v33h-10v-33A1.9,1.9,0,0,1,488.8,978.5Z"
                          fill="#07c597"
                        ></path>{" "}
                        <path
                          d="M486.8,1015.5h10v57a2,2,0,0,1-2,2h-6a1.9,1.9,0,0,1-2-2v-57Z"
                          fill="#9ce8d5"
                        ></path>{" "}
                      </g>{" "}
                      <g
                        className="bar"
                        data-svg-origin="521.798583984375 1074.502685546875"
                        transform="matrix(1,0,0,1,0,0)"
                        style={{ transformOrigin: "0px 0px" }}
                      >
                        {" "}
                        <path
                          d="M518.8,961.5h6a2,2,0,0,1,2,2v42h-10v-42A1.9,1.9,0,0,1,518.8,961.5Z"
                          fill="#07c597"
                        ></path>{" "}
                        <path
                          d="M516.8,1007.5h10v65a2,2,0,0,1-2,2h-6a1.9,1.9,0,0,1-2-2v-65Z"
                          fill="#9ce8d5"
                        ></path>{" "}
                      </g>{" "}
                      <rect
                        x="484.4"
                        y="918"
                        width="46.7"
                        height="19.77"
                        rx="4"
                        fill="#cdf3ea"
                      ></rect>{" "}
                      <text x="491" y="932.8" font-size="15" fill="#019d78">
                        +10%
                      </text>{" "}
                      <text x="352.3" y="1100.9" font-size="14" fill="#2f2e50">
                        New
                      </text>{" "}
                      <circle
                        cx="341.2"
                        cy="1095.5"
                        r="5.5"
                        fill="#1fc597"
                      ></circle>{" "}
                      <circle
                        cx="420.7"
                        cy="1096"
                        r="5.5"
                        fill="#9ce8d5"
                      ></circle>{" "}
                      <text x="431.8" y="1100.9" font-size="14" fill="#2f2e50">
                        Returning
                      </text>{" "}
                    </g>{" "}
                    <g
                      className="layer font-book"
                      data-svg-origin="600 600"
                      transform="matrix(1,0,0,1,0,0)"
                      style={{ transformOrigin: "0px 0px", opacity: "1" }}
                    >
                      {" "}
                      <g fill="#07c597" filter="url(#shadow)">
                        {" "}
                        <rect
                          className="fst-msg-box"
                          rx="8"
                          x="159.6"
                          y="326.6"
                          width="266.9"
                          height="125"
                        ></rect>{" "}
                        <rect
                          x="159.6"
                          y="326.6"
                          width="31.3"
                          height="31.32"
                        ></rect>{" "}
                      </g>{" "}
                      <text
                        className="fst-msg-text"
                        x="187.6"
                        y="371.1"
                        font-size="18"
                        fill="#fff"
                      >
                        Thanks for booking your
                      </text>{" "}
                      <text
                        className="fst-msg-text"
                        x="187.6"
                        y="394.1"
                        font-size="18"
                        fill="#fff"
                      >
                        appointment! Please
                      </text>{" "}
                      <text
                        className="fst-msg-text"
                        x="187.6"
                        y="417.1"
                        font-size="18"
                        fill="#fff"
                      >
                        confirm at the link below?
                      </text>{" "}
                      <image
                        x="95"
                        y="311"
                        width="50"
                        height="50"
                        href="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/avatars/doctor-01.png"
                      ></image>{" "}
                      <circle
                        cx="139.5"
                        cy="356"
                        r="5.7"
                        fill="#07c597"
                        stroke="#eef7fe"
                        stroke-width="2"
                      ></circle>{" "}
                    </g>{" "}
                    <g
                      className="layer font-book"
                      data-svg-origin="600 600"
                      transform="matrix(1,0,0,1,0,0)"
                      style={{ transformOrigin: "0px 0px", opacity: "1" }}
                    >
                      {" "}
                      <g fill="#fff" filter="url(#shadow)">
                        {" "}
                        <rect
                          className="scd-msg-box"
                          rx="8"
                          x="156.7"
                          y="472.4"
                          width="199"
                          height="92"
                        ></rect>{" "}
                        <rect
                          className="scd-msg-box-angle"
                          x="334.1"
                          y="520"
                          width="21.7"
                          height="21.68"
                          data-svg-origin="334.1000061035156 520"
                          transform="matrix(1,0,0,1,0,25)"
                          style={{ transformOrigin: "0px 0px" }}
                        ></rect>{" "}
                      </g>{" "}
                      <text
                        className="scd-msg-text"
                        x="180"
                        y="512.5"
                        font-size="18"
                        fill="#2f2e50"
                      >
                        Done! I’m looking{" "}
                      </text>{" "}
                      <text
                        className="scd-msg-text"
                        x="180"
                        y="535.5"
                        font-size="18"
                        fill="#2f2e50"
                      >
                        forward to my visit.
                      </text>{" "}
                      <image
                        x="370"
                        y="472"
                        width="50"
                        height="50"
                        href="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/avatars/john.png"
                      ></image>{" "}
                      <circle
                        cx="415.6"
                        cy="517.2"
                        r="5.7"
                        fill="#07c597"
                        stroke="#eef7fe"
                        stroke-width="2"
                      ></circle>{" "}
                    </g>{" "}
                    <g
                      className="layer font-book"
                      filter="url(#shadow)"
                      data-svg-origin="600 600"
                      transform="matrix(0.9031,0,0,0.903117,58.14,58.1298)"
                      //        style="transform-origin: 0px 0px; opacity: 0.5156;"
                      style={{ transformOrigin: "0px 0px", opacity: "0.5156" }}
                    >
                      {" "}
                      <g fill="#07c597" opacity="0.9">
                        {" "}
                        <rect
                          rx="8"
                          x="664.2"
                          y="542.3"
                          width="328.7"
                          height="110.2"
                        ></rect>{" "}
                        <rect
                          x="664.2"
                          y="542.3"
                          width="28.9"
                          height="28.94"
                        ></rect>{" "}
                      </g>{" "}
                      <text x="687.2" y="577.3" font-size="20" fill="#fff">
                        You have received an invoice
                      </text>{" "}
                      <text x="687.2" y="602.3" font-size="20" fill="#fff">
                        from Dr. Maxwell. Thanks for
                      </text>{" "}
                      <text x="687.2" y="627.3" font-size="20" fill="#fff">
                        the opportunity to serve you.
                      </text>{" "}
                    </g>{" "}
                    <g
                      className="layer"
                      filter="url(#shadow)"
                      data-svg-origin="600 600"
                      transform="matrix(1,0,0,1,0,0)"
                      style={{ transformOrigin: "0px 0px", opacity: "1" }}
                    >
                      {" "}
                      <rect
                        x="788.6"
                        y="675.3"
                        width="204"
                        height="151"
                        rx="4"
                        fill="#fff"
                        opacity="0.95"
                      ></rect>{" "}
                      <g
                        className="invoice-btn"
                        data-svg-origin="814.5999755859375 762.7999877929688"
                        transform="matrix(1,0,0,1,0,0)"
                        style={{ transformOrigin: "0px 0px" }}
                      >
                        {" "}
                        <rect
                          className="invoice-btn-body"
                          x="814.6"
                          y="762.8"
                          width="154"
                          height="38"
                          rx="5"
                          fill="#b0b0b0"
                        ></rect>{" "}
                        <text
                          className="font-book"
                          x="847.8"
                          y="787.3"
                          font-size="18"
                          fill="#fff"
                        >
                          Pay invoice
                        </text>{" "}
                      </g>{" "}
                      <text x="814.2" y="744.5" font-size="24" fill="#2f2e50">
                        $459.50
                      </text>{" "}
                      <text
                        className="font-book"
                        x="814.2"
                        y="713.5"
                        font-size="15"
                        fill="#2f2e50"
                      >
                        Amount due
                      </text>{" "}
                      <g className="unpaid-badge" style={{ opacity: "1" }}>
                        {" "}
                        <rect
                          x="918.6"
                          y="728.8"
                          width="50"
                          height="16"
                          rx="4"
                          fill="none"
                          stroke="#fec635"
                          stroke-width="2"
                        ></rect>{" "}
                        <text x="923.4" y="740.4" font-size="11" fill="#fec635">
                          UNPAID
                        </text>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g className="slide">
                    {" "}
                    <image
                      clip-path="url(#homepage-hero-animation-image-clip)"
                      x="170"
                      y="155"
                      width="810"
                      href="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/homepage/hero-02.jpg"
                      data-svg-origin="575 616.0249938964844"
                      transform="matrix(1.05,0,0,1.05,-28.75,-30.80125)"
                      style={{ transformOrigin: "0px 0px", opacity: "0" }}
                    ></image>{" "}
                    <g
                      className="layer"
                      filter="url(#shadow)"
                      data-svg-origin="600 600"
                      transform="matrix(1.1,0,0,1.1,-60,-60)"
                      style={{ transformOrigin: "0px 0px", opacity: "0" }}
                    >
                      {" "}
                      <rect
                        x="152.8"
                        y="394"
                        width="226"
                        height="115"
                        rx="4"
                        fill="#fff"
                        opacity="0.98"
                      ></rect>{" "}
                      <text x="175.4" y="434.3" font-size="16" fill="#2f2e50">
                        Google star rating
                      </text>{" "}
                      <rect
                        clip-path="url(#homepage-hero-animation-rate-clip)"
                        x="237.8"
                        y="459.9"
                        width="118.1"
                        height="23.27"
                        fill="#e1e1ea"
                      ></rect>{" "}
                      <rect
                        className="rate"
                        clip-path="url(#homepage-hero-animation-rate-clip)"
                        x="237.8"
                        y="459.9"
                        width="110"
                        height="23.27"
                        fill="#ffc13b"
                      ></rect>{" "}
                      <text
                        className="rate-number"
                        x="175.4"
                        y="477.5"
                        font-size="41"
                        fill="#3b435b"
                      >
                        4.9
                      </text>{" "}
                    </g>{" "}
                    <g
                      className="layer"
                      font-size="16.3"
                      filter="url(#shadow)"
                      data-svg-origin="600 600"
                      transform="matrix(1.1,0,0,1.1,-60,-60)"
                      style={{ transformOrigin: "0px 0px", opacity: "0" }}
                    >
                      {" "}
                      <rect
                        x="724.8"
                        y="119.2"
                        width="267.6"
                        height="234.4"
                        rx="4"
                        fill="#fff"
                        opacity="0.9"
                      ></rect>{" "}
                      <rect
                        x="728.9"
                        y="123.3"
                        width="259.4"
                        height="47.37"
                        rx="4"
                        fill="#f6f8fb"
                      ></rect>{" "}
                      <text x="744.7" y="212" fill="#99a1b8">
                        Santa Monica{" "}
                      </text>{" "}
                      <text
                        className="short-text"
                        x="851"
                        y="212"
                        fill="#3b435b"
                      >
                        Primary care
                      </text>{" "}
                      <line
                        x1="991.9"
                        y1="236.8"
                        x2="725.6"
                        y2="236.8"
                        fill="none"
                        stroke="#f6f8fb"
                        stroke-width="2"
                      ></line>{" "}
                      <line
                        x1="991.9"
                        y1="295.6"
                        x2="725.6"
                        y2="295.6"
                        fill="none"
                        stroke="#f6f8fb"
                        stroke-width="2"
                      ></line>{" "}
                      <text x="744.7" y="270.3" fill="#99a1b8">
                        Los Angeles
                      </text>{" "}
                      <text
                        className="short-text"
                        x="840"
                        y="270.3"
                        fill="#3b435b"
                      >
                        Primary care
                      </text>{" "}
                      <text
                        className="full-text"
                        x="744.7"
                        y="328.7"
                        fill="#99a1b8"
                      >
                        Primary care near me
                      </text>{" "}
                      <text
                        className="full-text"
                        x="747.1"
                        y="153.2"
                        fill="#3b435b"
                      >
                        Primary care near me
                      </text>{" "}
                      <rect
                        className="cursor"
                        x="748"
                        y="136.2"
                        width="1.6"
                        height="22.87"
                        fill="#07c597"
                        style={{ transformOrigin: "0px 0px", opacity: "0" }}
                        data-svg-origin="748 136.1999969482422"
                        transform="matrix(1,0,0,1,160.5299,0)"
                      ></rect>{" "}
                    </g>{" "}
                    <g
                      className="layer font-book"
                      filter="url(#shadow)"
                      data-svg-origin="600 600"
                      transform="matrix(1.1,0,0,1.1,-60,-60)"
                      style={{ transformOrigin: "0px 0px", opacity: "0" }}
                    >
                      {" "}
                      <g fill="#fff" opacity="0.9">
                        {" "}
                        <rect
                          className="fst-msg-box"
                          rx="8"
                          x="648.9"
                          y="672.3"
                          width="381.5"
                          height="97"
                        ></rect>{" "}
                        <rect
                          className="fst-msg-box-angle"
                          x="1005.2"
                          y="744.3"
                          width="25.1"
                          height="25.15"
                          data-svg-origin="1005.2000122070312 744.2999877929688"
                          transform="matrix(1,0,0,1,0,0)"
                          style={{ transformOrigin: "0px 0px" }}
                        ></rect>{" "}
                      </g>{" "}
                      <text
                        className="fst-msg-text"
                        x="676.9"
                        y="718"
                        font-size="20"
                        fill="#3b435b"
                      >
                        Hi Dr. Shakti, do you have an opening
                      </text>{" "}
                      <text
                        className="fst-msg-text"
                        x="676.9"
                        y="743"
                        font-size="20"
                        fill="#3b435b"
                      >
                        for next Thursday at 11 AM?
                      </text>{" "}
                    </g>{" "}
                    <g
                      className="layer font-book"
                      data-svg-origin="600 600"
                      transform="matrix(1.1,0,0,1.1,-60,-60)"
                      style={{ transformOrigin: "0px 0px", opacity: "0" }}
                    >
                      {" "}
                      <g fill="#07c597" opacity="0.9" filter="url(#shadow)">
                        {" "}
                        <rect
                          className="scd-msg-box"
                          rx="8"
                          x="648.9"
                          y="792.4"
                          width="307.2"
                          height="100"
                        ></rect>{" "}
                        <rect
                          className="scd-msg-box-angle"
                          x="648.9"
                          y="866"
                          width="27.5"
                          height="27.5"
                          data-svg-origin="648.9000244140625 866"
                          transform="matrix(1,0,0,1,0,0)"
                          style={{ transformOrigin: "0px 0px" }}
                        ></rect>{" "}
                      </g>{" "}
                      <text
                        className="scd-msg-text"
                        x="675.9"
                        y="826.5"
                        font-size="18"
                        fill="#fff"
                      >
                        Appointment scheduled.{" "}
                      </text>{" "}
                      <text
                        className="scd-msg-text"
                        x="675.9"
                        y="849.5"
                        font-size="18"
                        fill="#fff"
                      >
                        Link below to your confirmation{" "}
                      </text>{" "}
                      <text
                        className="scd-msg-text"
                        x="675.9"
                        y="872.5"
                        font-size="18"
                        fill="#fff"
                      >
                        for next Thursday at 11 AM:
                      </text>{" "}
                      <image
                        x="970"
                        y="792"
                        width="50"
                        height="50"
                        href="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/avatars/doctor-02.png"
                      ></image>{" "}
                      <circle
                        cx="1014.9"
                        cy="837"
                        r="5.7"
                        fill="#07c597"
                        stroke="#eef7fe"
                        stroke-width="2"
                      ></circle>{" "}
                    </g>{" "}
                    <g
                      className="layer"
                      filter="url(#shadow)"
                      data-svg-origin="600 600"
                      transform="matrix(1.1,0,0,1.1,-60,-60)"
                      style={{ transformOrigin: "0px 0px", opacity: "0" }}
                    >
                      {" "}
                      <rect
                        x="291.7"
                        y="927.7"
                        width="254"
                        height="160"
                        rx="4"
                        fill="#fff"
                        opacity="0.9"
                      ></rect>{" "}
                      <text x="314.7" y="967.2" font-size="18" fill="#2f2e50">
                        Appointments
                      </text>{" "}
                      <text
                        className="appointment-number"
                        x="314.6"
                        y="1010.3"
                        font-size="46"
                        fill="#2f2e50"
                      >
                        120
                      </text>{" "}
                      <path
                        d="M316.7,1033.7h130v8h-130a4,4,0,0,1-4-4h0A4,4,0,0,1,316.7,1033.7Z"
                        fill="#07c597"
                      ></path>{" "}
                      <path
                        d="M449.7,1033.7h54a4,4,0,0,1,4,4h0a4,4,0,0,1-4,4h-54v-8Z"
                        fill="#fac444"
                      ></path>{" "}
                      <text x="329.2" y="1065.9" font-size="14" fill="#2f2e50">
                        Online
                      </text>{" "}
                      <circle
                        cx="318.2"
                        cy="1060.5"
                        r="5.5"
                        fill="#07c597"
                      ></circle>{" "}
                      <circle
                        cx="397.7"
                        cy="1061.1"
                        r="5.5"
                        fill="#fac444"
                      ></circle>{" "}
                      <text x="408.7" y="1065.9" font-size="14" fill="#2f2e50">
                        Phone
                      </text>{" "}
                      <g stroke-linecap="round" stroke-linejoin="round">
                        {" "}
                        <path
                          d="M510.4,1009.4c4.9-2,7.1-9.5,9.5-16.3s5-13.1,5.6-20.1-.6-15-5.3-19.2-12.8-4.9-19.5-4-11.9,3.6-18.2,4.5-13.8.3-19.7,3.2-10.4,9.2-12.2,16.4-1.1,15.4,3.9,19.6,14.2,4.7,20.8,5.9,10.8,3.4,16.7,6.1S505.5,1011.5,510.4,1009.4Z"
                          fill="#07c597"
                          opacity="0.17"
                        ></path>{" "}
                        <path
                          d="M511.5,953.3l-.9,2.5c-.1.2-.2.3-.4.2a.2.2,0,0,1-.2-.2l-.9-2.5a.9.9,0,0,0-.6-.7l-2.6-.9c-.2,0-.3-.2-.2-.4l.2-.2,2.6-.9a.9.9,0,0,0,.6-.6l.9-2.6c0-.1.2-.2.4-.2s.2.1.2.2l.9,2.6a.9.9,0,0,0,.6.6l2.6.9a.4.4,0,0,1,.2.4.2.2,0,0,1-.2.2l-2.6.9A.9.9,0,0,0,511.5,953.3Z"
                          fill="#65dec1"
                        ></path>{" "}
                        <path
                          d="M520.6,961.1l-.5,1.7c-.1.1-.2.2-.3.1s-.1,0-.1-.1l-.6-1.7a.7.7,0,0,0-.5-.4l-1.7-.6a.4.4,0,0,1-.1-.3h.1l1.7-.6a.8.8,0,0,0,.5-.5l.6-1.7c0-.1.1-.1.2-.1h.2l.5,1.7a.8.8,0,0,0,.5.5l1.7.6c.1,0,.2.1.1.2s0,.1-.1.2l-1.7.6A.7.7,0,0,0,520.6,961.1Z"
                          fill="#303b59"
                        ></path>{" "}
                        <path
                          d="M519.4,946.6a1.4,1.4,0,0,0,1.4,1.4,1.4,1.4,0,1,0,0-2.8h0a1.4,1.4,0,0,0-1.4,1.4Z"
                          fill="#65dec1"
                        ></path>{" "}
                        <path
                          d="M497.3,949.6a1,1,0,0,0,1,1,1,1,0,1,0,0-2h0A1,1,0,0,0,497.3,949.6Z"
                          fill="#303b59"
                        ></path>{" "}
                        <path
                          d="M520.1,972a1,1,0,0,0,1.1,1,.9.9,0,0,0,1-1,1,1,0,0,0-1-1.1h0A1.1,1.1,0,0,0,520.1,972Z"
                          fill="#65dec1"
                        ></path>{" "}
                        <path
                          d="M456,1009.2h-1"
                          fill="none"
                          stroke="#303b59"
                          stroke-width="2"
                        ></path>{" "}
                        <path
                          d="M522.7,1009.2H460"
                          fill="none"
                          stroke="#303b59"
                          stroke-width="2"
                        ></path>{" "}
                        <path
                          d="M507.3,1009.2h-42a2.4,2.4,0,0,1-2.1-2.5V968.2a2.4,2.4,0,0,1,2.1-2.5h42a2.3,2.3,0,0,1,2.1,2.5v38.5a2.3,2.3,0,0,1-2.1,2.5Z"
                          fill="#fff"
                        ></path>{" "}
                        <path
                          d="M510,969.8v5.4H465v-5.4a2.3,2.3,0,0,1,2-2.6h40.9A2.4,2.4,0,0,1,510,969.8Z"
                          fill="#07c597"
                        ></path>{" "}
                        <path
                          d="M508.3,1005.2v.7c0,1.6-.9,2.9-2,2.9H466c-1.1,0-2-1.3-2-2.9v-.7Z"
                          fill="#f2f2fd"
                        ></path>{" "}
                        <path
                          d="M484.5,965.2h23.4a2.3,2.3,0,0,1,2.1,2.5v39a2.3,2.3,0,0,1-2.1,2.5H466.1a2.3,2.3,0,0,1-2.1-2.5v-39a2.3,2.3,0,0,1,2.1-2.5H480"
                          fill="none"
                          stroke="#303b59"
                          stroke-width="2"
                        ></path>{" "}
                        <path
                          d="M471.2,974.2H464"
                          fill="none"
                          stroke="#303b59"
                          stroke-width="2"
                        ></path>{" "}
                        <path
                          d="M476.8,974.2H475"
                          fill="none"
                          stroke="#303b59"
                          stroke-width="2"
                        ></path>{" "}
                        <path
                          d="M510,974.2H480"
                          fill="none"
                          stroke="#303b59"
                          stroke-width="2"
                        ></path>{" "}
                        <path
                          d="M473.5,961.2a2.5,2.5,0,0,0-2.5,2.5v3a2.5,2.5,0,0,0,2.5,2.5,2.5,2.5,0,0,0,2.5-2.5v-3A2.5,2.5,0,0,0,473.5,961.2Z"
                          fill="#fcd230"
                          stroke="#303b59"
                          stroke-width="2"
                        ></path>{" "}
                        <path
                          d="M500.5,961.2a2.5,2.5,0,0,0-2.5,2.5v3a2.5,2.5,0,0,0,2.5,2.5,2.5,2.5,0,0,0,2.5-2.5v-3A2.5,2.5,0,0,0,500.5,961.2Z"
                          fill="#fcd230"
                          stroke="#303b59"
                          stroke-width="2"
                        ></path>{" "}
                        <path
                          d="M475.3,985.2h-3.6a.7.7,0,0,1-.7-.7v-3.6a.7.7,0,0,1,.7-.7h3.6a.8.8,0,0,1,.7.7v3.6A.8.8,0,0,1,475.3,985.2Z"
                          fill="#07c597"
                        ></path>{" "}
                        <path
                          d="M475.3,994.3h-3.6a.7.7,0,0,1-.7-.7V990a.7.7,0,0,1,.7-.7h3.6a.8.8,0,0,1,.7.7v3.6A1.2,1.2,0,0,1,475.3,994.3Z"
                          fill="#07c597"
                        ></path>{" "}
                        <path
                          d="M475.3,1003.2h-3.6a.7.7,0,0,1-.7-.7v-3.6a.7.7,0,0,1,.7-.7h3.6a.8.8,0,0,1,.7.7v3.6A.8.8,0,0,1,475.3,1003.2Z"
                          fill="#303b59"
                        ></path>{" "}
                        <path
                          d="M484.3,985.2h-3.6a.7.7,0,0,1-.7-.7v-3.6a.7.7,0,0,1,.7-.7h3.6a.7.7,0,0,1,.7.7v3.6A.7.7,0,0,1,484.3,985.2Z"
                          fill="#07c597"
                        ></path>{" "}
                        <path
                          d="M484.3,994.3h-3.6a.7.7,0,0,1-.7-.7V990a.7.7,0,0,1,.7-.7h3.6a.7.7,0,0,1,.7.7v3.6A.8.8,0,0,1,484.3,994.3Z"
                          fill="#07c597"
                        ></path>{" "}
                        <path
                          d="M484.3,1003.2h-3.6a.7.7,0,0,1-.7-.7v-3.6a.7.7,0,0,1,.7-.7h3.6a.7.7,0,0,1,.7.7v3.6A.7.7,0,0,1,484.3,1003.2Z"
                          fill="#303b59"
                        ></path>{" "}
                        <path
                          d="M493.3,985.2h-3.6a.7.7,0,0,1-.7-.7v-3.6a.7.7,0,0,1,.7-.7h3.6a.8.8,0,0,1,.7.7v3.6A.8.8,0,0,1,493.3,985.2Z"
                          fill="#07c597"
                        ></path>{" "}
                        <path
                          d="M493.3,994.2h-3.6a.7.7,0,0,1-.7-.7v-3.6a.7.7,0,0,1,.7-.7h3.6a.8.8,0,0,1,.7.7v3.6A.8.8,0,0,1,493.3,994.2Z"
                          fill="#303b59"
                        ></path>{" "}
                        <path
                          d="M502.3,985.2h-3.6a.7.7,0,0,1-.7-.7v-3.6a.7.7,0,0,1,.7-.7h3.6a.8.8,0,0,1,.7.7v3.6A.8.8,0,0,1,502.3,985.2Z"
                          fill="#303b59"
                        ></path>{" "}
                        <path
                          d="M494.8,995.3a13.2,13.2,0,0,1,7.2-2.1c7-.1-4.3,17-4.3,17h-8.2a13.7,13.7,0,0,1,5.3-14.9Z"
                          fill="#65dec1"
                        ></path>{" "}
                        <path
                          d="M498.1,994a13.6,13.6,0,0,1,7.1-2,12.7,12.7,0,0,1-.4,25.3,12.7,12.7,0,0,1-6.7-23.3Z"
                          fill="#fff"
                        ></path>{" "}
                        <path
                          d="M499.2,995.4a11.9,11.9,0,0,1,6.4-1.8,11.5,11.5,0,1,1-11.7,11.4A11.6,11.6,0,0,1,499.2,995.4Z"
                          fill="#fcd230"
                        ></path>{" "}
                        <path
                          d="M501,992.8h.3a15,15,0,0,1,3.7-.5,13,13,0,0,1,7.6,2.5"
                          fill="none"
                          stroke="#303b59"
                          stroke-width="2"
                        ></path>{" "}
                        <path
                          d="M518,1002.8c0,.6.1,1.2.1,1.8a12.9,12.9,0,0,1-25.8,0,12.6,12.6,0,0,1,4.7-9.7"
                          fill="none"
                          stroke="#303b59"
                          stroke-width="2"
                        ></path>{" "}
                        <path
                          d="M515.8,997.4a2.1,2.1,0,0,1,.4.6"
                          fill="none"
                          stroke="#303b59"
                          stroke-width="2"
                        ></path>{" "}
                        <polyline
                          points="503.6 1000.3 503.6 1005.8 508.9 1008.6"
                          fill="none"
                          stroke="#303b59"
                          stroke-width="6"
                        ></polyline>{" "}
                        <polyline
                          points="503.6 1000.3 503.6 1005.8 508.9 1008.6"
                          fill="none"
                          stroke="#fff"
                          stroke-width="2"
                        ></polyline>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g className="slide">
                    {" "}
                    <image
                      clip-path="url(#homepage-hero-animation-image-clip)"
                      x="140"
                      y="20"
                      width="1000"
                      href="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/homepage/hero-03.jpg"
                      data-svg-origin="640 550"
                      transform="matrix(1.05,0,0,1.05,-32,-27.5)"
                      style={{ transformOrigin: "0px 0px", opacity: "0" }}
                    ></image>{" "}
                    <g
                      className="layer"
                      filter="url(#shadow)"
                      data-svg-origin="600 600"
                      transform="matrix(1.1,0,0,1.1,-60,-60)"
                      style={{ transformOrigin: "0px 0px", opacity: "0" }}
                    >
                      {" "}
                      <g
                        className="reminder"
                        data-svg-origin="266.65000915527344 519.9199829101562"
                        transform="matrix(1,0,0,1,0,0)"
                        style={{ transformOrigin: "0px 0px" }}
                      >
                        {" "}
                        <g fill="#07c597">
                          {" "}
                          <rect
                            rx="8"
                            x="111.8"
                            y="423.8"
                            width="309.7"
                            height="96.12"
                          ></rect>{" "}
                          <rect
                            x="111.8"
                            y="496.3"
                            width="23.6"
                            height="23.62"
                          ></rect>{" "}
                        </g>{" "}
                        <text x="139.8" y="468.4" font-size="18" fill="#fff">
                          REMINDER
                          <tspan className="font-book">
                            : appointment today
                          </tspan>
                        </text>{" "}
                        <text
                          className="font-book"
                          x="139.8"
                          y="491.4"
                          font-size="18"
                          fill="#fff"
                        >
                          at 11:30 AM with Dr. Shakti
                        </text>{" "}
                      </g>{" "}
                    </g>{" "}
                    <g
                      className="layer font-book"
                      data-svg-origin="600 600"
                      transform="matrix(1.1,0,0,1.1,-60,-60)"
                      style={{ transformOrigin: "0px 0px", opacity: "0" }}
                    >
                      {" "}
                      <g fill="#fff" filter="url(#shadow)">
                        {" "}
                        <rect
                          className="fst-msg-box"
                          rx="8"
                          x="174.3"
                          y="547.5"
                          width="297.3"
                          height="97"
                        ></rect>{" "}
                        <rect
                          className="fst-msg-box-angle"
                          x="450.9"
                          y="596.5"
                          width="20.6"
                          height="20.61"
                          data-svg-origin="450.8999938964844 596.5"
                          transform="matrix(1,0,0,1,0,27.5)"
                          style={{ transformOrigin: "0px 0px" }}
                        ></rect>{" "}
                      </g>{" "}
                      <text
                        className="fst-msg-text"
                        x="202.6"
                        y="592.6"
                        font-size="20"
                        fill="#3b435b"
                      >
                        Hi Dr. Shakti, Can you send
                      </text>{" "}
                      <text
                        className="fst-msg-text"
                        x="202.6"
                        y="617.6"
                        font-size="20"
                        fill="#3b435b"
                      >
                        me your address please?
                      </text>{" "}
                      <image
                        x="112"
                        y="547"
                        width="50"
                        height="50"
                        href="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/assets/images/avatars/patient-01.png"
                      ></image>{" "}
                      <circle
                        cx="156.9"
                        cy="592.2"
                        r="5.7"
                        fill="#07c597"
                        stroke="#eef7fe"
                        stroke-width="2"
                      ></circle>{" "}
                    </g>{" "}
                    <g
                      className="layer"
                      filter="url(#shadow)"
                      data-svg-origin="600 600"
                      transform="matrix(1.1,0,0,1.1,-60,-60)"
                      style={{ transformOrigin: "0px 0px", opacity: "0" }}
                    >
                      {" "}
                      <g clip-path="url(#homepage-hero-animation-shortcut-crop)">
                        {" "}
                        <rect
                          x="733.2"
                          y="679.9"
                          width="253.6"
                          height="266.14"
                          rx="4"
                          fill="#fff"
                          opacity="0.98"
                        ></rect>{" "}
                        <rect
                          x="741"
                          y="746.4"
                          width="237.2"
                          height="43.83"
                          rx="5"
                          fill="#fafbfc"
                        ></rect>{" "}
                        <text
                          className="font-book"
                          x="780.5"
                          y="774"
                          font-size="15"
                          fill="#2f2e50"
                        >
                          Request HIAA consent
                        </text>{" "}
                        <path
                          d="M761.6,758.9a1,1,0,0,0-1,1v3h-3a1,1,0,0,0-1,1v10a.9.9,0,0,0,1,1h14a1,1,0,0,0,1-1v-10a1.1,1.1,0,0,0-1-1h-3v-3a1.1,1.1,0,0,0-1-1Zm5,4v-2h-4v2Zm-8,10v-8h12v8Zm7-6a1.1,1.1,0,0,0-1-1,1,1,0,0,0-1,1v1h-1a1,1,0,0,0-1,1,.9.9,0,0,0,1,1h1v1a.9.9,0,0,0,1,1,1,1,0,0,0,1-1v-1h1a1,1,0,0,0,1-1,1.1,1.1,0,0,0-1-1h-1Z"
                          fill="#313b59"
                        ></path>{" "}
                        <rect
                          x="741"
                          y="795.7"
                          width="237.2"
                          height="43.83"
                          rx="5"
                          fill="#fafbfc"
                        ></rect>{" "}
                        <text
                          className="font-book"
                          x="780.5"
                          y="823"
                          font-size="15"
                          fill="#2f2e50"
                        >
                          Scheduling link
                        </text>{" "}
                        <path
                          d="M757,815.9v-3a.9.9,0,0,1,1-1h12a.9.9,0,0,1,1,.9h0v3m-14,0v8a1,1,0,0,0,1,1h12a1,1,0,0,0,1-1h0v-8m-14,0h14m-11-5v.5m8-.5v.5"
                          fill="none"
                          stroke="#313b59"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        ></path>{" "}
                        <rect
                          className="location-highlight"
                          stroke-dasharray="560"
                          stroke-dashoffset="0"
                          x="741"
                          y="845"
                          width="237.2"
                          height="43.83"
                          rx="5"
                          fill="none"
                          stroke="#07c597"
                          stroke-width="2"
                        ></rect>{" "}
                        <text
                          className="font-book"
                          x="780.4"
                          y="872.4"
                          font-size="15"
                          fill="#2f2e50"
                        >
                          Location info
                        </text>{" "}
                        <g>
                          {" "}
                          <path
                            d="M764,858.9a7,7,0,0,0-7,7c0,4.4,5.1,7.9,6.6,8.9a1.1,1.1,0,0,0,.8,0c1.6-1,6.6-4.6,6.6-8.9A7,7,0,0,0,764,858.9Zm0,13.6c-1.9-1.3-5-3.7-5-6.6a5.1,5.1,0,0,1,5-5,5,5,0,0,1,5,5C769,868.7,765.9,871.1,764,872.5Z"
                            fill="#313b59"
                          ></path>{" "}
                          <path
                            d="M764,867.9a2,2,0,1,0-2-2h0a2,2,0,0,0,2,2Z"
                            fill="#313b59"
                          ></path>{" "}
                        </g>{" "}
                        <rect
                          x="741"
                          y="894.3"
                          width="237.2"
                          height="43.83"
                          rx="5"
                          fill="#fafbfc"
                        ></rect>{" "}
                        <text
                          className="font-book"
                          x="780.5"
                          y="922"
                          font-size="15"
                          fill="#2f2e50"
                        >
                          Forms
                        </text>{" "}
                        <path
                          d="M763,922.9h-3a1.1,1.1,0,0,1-1-1h0v-12a.9.9,0,0,1,1-1h5m0,0,6,6h-5a1.1,1.1,0,0,1-1-1h0Zm6,14-2.5-2.5m0,0-1.5-1.5m1.5,1.5,1.5-1.5h-3m1.5,1.5-1.5,1.5v-3"
                          fill="none"
                          stroke="#313b59"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        ></path>{" "}
                        <path
                          d="M733.2,738.6H986.8v.8H733.2Z"
                          fill="#e8ecf4"
                        ></path>{" "}
                      </g>{" "}
                      <path
                        d="M769.3,708.7a.4.4,0,0,0-.1-.3h-3v-5.9a.2.2,0,0,0-.2-.2h-.1l-6,8.9a.4.4,0,0,0,.1.3h3v5.8a.2.2,0,0,0,.2.2h.2Z"
                        fill="none"
                        stroke="#313b59"
                        stroke-width="2"
                      ></path>{" "}
                      <text x="780.9" y="714.5" font-size="16" fill="#2f2e50">
                        Message shortcuts
                      </text>{" "}
                    </g>{" "}
                    <g
                      className="layer font-book scd-msg"
                      filter="url(#shadow)"
                      data-svg-origin="600 600"
                      transform="matrix(1.1,0,0,1.1,-60,-60)"
                      style={{ transformOrigin: "0px 0px", opacity: "0" }}
                    >
                      {" "}
                      <g fill="#07c597" opacity="0.9">
                        {" "}
                        <rect
                          className="scd-msg-box"
                          rx="8"
                          x="599.8"
                          y="974.5"
                          width="387.4"
                          height="125"
                        ></rect>{" "}
                        <rect
                          className="scd-msg-box-angle"
                          x="599.8"
                          y="1066.4"
                          width="32.5"
                          height="32.54"
                          data-svg-origin="599.7999877929688 1066.4000244140625"
                          transform="matrix(1,0,0,1,0,0)"
                          style={{ transformOrigin: "0px 0px" }}
                        ></rect>{" "}
                      </g>{" "}
                      <text
                        className="scd-msg-text"
                        x="628.1"
                        y="1020.2"
                        font-size="20"
                        fill="#fff"
                      >
                        Hi Amy, our office is at 522 Main. Park
                      </text>{" "}
                      <text
                        className="scd-msg-text"
                        x="628.1"
                        y="1045.2"
                        font-size="20"
                        fill="#fff"
                      >
                        in the public parking lot and bring us
                      </text>{" "}
                      <text
                        className="scd-msg-text"
                        x="628.1"
                        y="1070.2"
                        font-size="20"
                        fill="#fff"
                      >
                        your ticket as we validate!
                      </text>{" "}
                    </g>{" "}
                  </g>{" "}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd page */}

      <ContainerPage />
      <ContainerPages2 />
      <ContainerPages3 />
      <ContainerPage4 />
      <ContainerFooter />
    </div>
  );
}

export default WebClone;

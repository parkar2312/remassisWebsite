import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";

function ContainerNavbar() {
  return (
    <div class="fixed-top">
      <div class="navbar top-head">
        <div class="container-fluid">
          <div class="row justify-content-start">
            <div>
              See how PatientPop works -{" "}
              <a class="js-click-webinar" href="/for/weekly-webinar/">
                Join our webinar
              </a>
            </div>
          </div>

          <div>
            <div class="row justify-content-end font-normal">
              <div className="nav-item col">
                {" "}
                <Nav className="nav_new">
                  <NavDropdown
                    title="Company"
                    className="pr-4 font-normal"
                    id="collasible-nav-dropdown"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      {" "}
                      <Link href="/about-us/our-provider-promise">
                        Provider promise
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      <Link href="/about-us/leadership-team">
                        Leadership team
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      <Link href="/awards/">Awards</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      <Link href="/careers/">Careers</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      <Link href="/diversity-equity-and-inclusion">DEI</Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </div>

              <div className="nav-item col">
                {" "}
                <Nav className="nav_new">
                  <NavDropdown
                    title="Contact"
                    className="pr-4 font-normal"
                    id="collasible-nav-dropdown"
                  >
                    <NavDropdown.Item href="#action/3.3">
                      <a
                        href="#"
                        class="nav-link"
                        data-bs-toggle="modal"
                        data-bs-target="#modalContactSales"
                      >
                        Sales
                      </a>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      <a class="nav-link js-click-support" href="/support">
                        Support{" "}
                      </a>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      <a
                        class="nav-link js-click-help"
                        href="https://help.patientpop.com"
                      >
                        Help center
                      </a>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </div>
              <div class="nav-item col">
                <a class="nav-link" href="https://app.patientpop.com/">
                  Sign in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid mt-0">
          <div class="header-logo">
            {" "}
            <a href="/">
              <div class="l-header__logo mx-12"></div>
            </a>
          </div>
          <div class="button-list">
            {" "}
            <button
              type="button"
              class="btn btn-get-demo text-nowrap d-block d-lg-none"
              data-bs-toggle="modal"
              data-bs-target="#modalDemoRequestNav"
            >
              {" "}
              Get demo{" "}
            </button>{" "}
            <button
              class="navbar-toggler collapsed position-relative"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarExample1"
              aria-controls="navbarExample1"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {" "}
              <span> </span> <span> </span> <span> </span>{" "}
            </button>
          </div>
          <div class="collapse navbar-collapse" id="navbarExample1">
            <ul class="navbar-nav me-auto ps-lg-0">
              <li>
                <Dropdown>
                  <Dropdown.Toggle variant="light" style={{ border: "none" }}>
                    <a
                      class="nav-link "
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {" "}
                      Product{" "}
                    </a>
                  </Dropdown.Toggle>

                  <Dropdown.Menu style={{ width: "90rem", height: "25rem" }}>
                    <div class="container">
                      <div class="row my-md-4">
                        <div class="col-md-6 col-lg-8 mb-4 mb-lg-0 px-2 px-lg-4">
                          <p class="sub-title"> Features</p>
                          <div class="row">
                            <ul class="col-md-12 col-lg-6 pr-4 font-normal">
                              <li>
                                <a
                                  class="nav-link item"
                                  href="/attract-more-patients/website-seo/"
                                >
                                  Website &amp; SEO
                                </a>
                              </li>
                              <li>
                                <a
                                  class="nav-link item"
                                  href="/manage-your-reputation/"
                                >
                                  Reputation management
                                </a>
                              </li>
                              <li>
                                <a
                                  class="nav-link item"
                                  href="/automate-front-office/digital-registration/"
                                >
                                  Patient intake
                                </a>
                              </li>
                              <li>
                                <a
                                  class="nav-link item"
                                  href="/automate-front-office/practice-growth-dashboard/"
                                >
                                  Insights
                                </a>
                              </li>
                              <li>
                                <a
                                  class="nav-link item"
                                  href="/attract-more-patients/services"
                                >
                                  Practice marketing
                                </a>
                              </li>
                            </ul>
                            <ul class="col-md-12 col-lg-6 font-normal">
                              <li>
                                <a
                                  class="nav-link item"
                                  href="/modernize-patient-experience/telehealth/"
                                >
                                  Telehealth
                                </a>
                              </li>
                              <li>
                                <a
                                  class="nav-link item"
                                  href="/modernize-patient-experience/online-scheduling/"
                                >
                                  Appointment scheduling
                                </a>
                              </li>
                              <li>
                                <a
                                  class="nav-link item"
                                  href="/modernize-patient-experience/text-messaging"
                                >
                                  Text messaging
                                </a>
                              </li>
                              <li>
                                <a
                                  class="nav-link item"
                                  href="/automate-front-office/mobile-app"
                                >
                                  PatientPop mobile app
                                </a>
                              </li>
                              <li>
                                <a
                                  class="nav-link item"
                                  href="/modernize-patient-experience/payments"
                                >
                                  Patient payments
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-4 mb-lg-0 px-2 px-lg-4">
                          <p class="sub-title"> We help practices</p>
                          <div class="list-grouplist-group-flush">
                            <div>
                              {" "}
                              <a class="nav-link" href="/attract-more-patients">
                                {" "}
                                <span class="menu-title">
                                  {" "}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="nav-icon injected-svg svg-inject"
                                    id="nav-icon-grow"
                                    viewBox="-3 -3 26 26"
                                    data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/views/animations/megamenu/icon-grow.svg"
                                  >
                                    <defs>
                                      <clipPath id="nav-icon-grow-clip-0">
                                        <rect
                                          x="1.5"
                                          y="1"
                                          width="17"
                                          height="17"
                                          rx="1.8"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                    <rect
                                      x="1"
                                      y="1"
                                      width="18"
                                      height="18"
                                      rx="2"
                                      fill="#fff"
                                      stroke="#313b59"
                                      stroke-width="2"
                                    ></rect>
                                    <g clip-path="url(#nav-icon-grow-clip-0)">
                                      <g class="content">
                                        <path
                                          d="M2,28V13H3a.9.9,0,0,0,.7-.3L5,11.4l2.3,2.3A.9.9,0,0,0,8,14h.1a1.3,1.3,0,0,0,.7-.4l3.3-4.1,3.2,3.2a1,1,0,0,0,1.4,0L18,11V28Z"
                                          fill="#c7e8e5"
                                          fill-rule="evenodd"
                                        ></path>
                                        <path
                                          d="M3,13H2V11h.6L4.3,9.3a1,1,0,0,1,1.4,0l2.2,2.2,3.3-4.1a1,1,0,0,1,1.4-.2h.1L16,10.6l1.3-1.3A.9.9,0,0,1,18,9v2.4l-1.3,1.3a1,1,0,0,1-1.4,0L12.1,9.5,8.8,13.6a1.3,1.3,0,0,1-.7.4H8a.9.9,0,0,1-.7-.3L5,11.4,3.7,12.7A.9.9,0,0,1,3,13Z"
                                          fill="#0fa883"
                                        ></path>
                                      </g>
                                    </g>
                                  </svg>
                                  Grow
                                </span>{" "}
                              </a>
                              <p class="sub-menu-description">
                                Attract and retain more patients
                              </p>
                            </div>
                            <div>
                              {" "}
                              <a
                                class="nav-link"
                                href="/modernize-patient-experience"
                              >
                                {" "}
                                <span class="menu-title">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="nav-icon injected-svg svg-inject"
                                    id="nav-icon-modernize"
                                    viewBox="-5 -3 26 26"
                                    data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/views/animations/megamenu/icon-modernize.svg"
                                  >
                                    <defs>
                                      <clipPath id="nav-icon-modernize-clip-1">
                                        <rect
                                          x="2"
                                          y="0"
                                          width="20"
                                          height="20"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                    <rect
                                      x="1"
                                      y="1"
                                      width="14"
                                      height="13"
                                      fill="#c7e8e5"
                                    ></rect>
                                    <path
                                      d="M13,1H3A2,2,0,0,0,1,2.8V17.2A2,2,0,0,0,3,19H13a2,2,0,0,0,2-1.8V2.8A2,2,0,0,0,13,1Z"
                                      fill="none"
                                      stroke="#313b59"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                    ></path>
                                    <path
                                      d="M8,16H8"
                                      fill="none"
                                      stroke="#313b59"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                    ></path>
                                    <g clip-path="url(#nav-icon-modernize-clip-1)">
                                      <g class="message">
                                        <path
                                          d="M19,11a2,2,0,0,1-2,2H8V7a2,2,0,0,1,2-2h9Z"
                                          fill="#fff"
                                          stroke="#0fa883"
                                          stroke-width="2"
                                          fill-rule="evenodd"
                                        ></path>
                                        <rect
                                          x="11"
                                          y="8"
                                          width="5"
                                          height="2"
                                          fill="#0fa883"
                                        ></rect>
                                      </g>
                                    </g>
                                  </svg>
                                  Modernize
                                </span>{" "}
                              </a>
                              <p class="sub-menu-description">
                                Deliver an experience patients demand
                              </p>
                            </div>
                            <div>
                              {" "}
                              <a class="nav-link" href="/automate-front-office">
                                {" "}
                                <span class="menu-title">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="nav-icon injected-svg svg-inject"
                                    id="nav-icon-streamline"
                                    viewBox="-2 -2 26 26"
                                    data-src="https://24g7qf3sa1s81fsal41m8ud9-wpengine.netdna-ssl.com/wp-content/themes/patientpop/resources/views/animations/megamenu/icon-streamline.svg"
                                  >
                                    <path
                                      d="M20.2,17.1A11.2,11.2,0,0,1,4.9,20.2,11.2,11.2,0,0,1,1.8,4.9,11,11,0,0,1,11,0V11Z"
                                      fill="#fff"
                                    ></path>
                                    <path
                                      d="M11,18a7,7,0,1,0-7-7A7,7,0,0,0,11,18Z"
                                      fill="#c7e8e5"
                                      fill-rule="evenodd"
                                    ></path>
                                    <circle
                                      class="dot"
                                      cx="16"
                                      cy="2.4"
                                      r="1"
                                      fill="#0fa883"
                                    ></circle>
                                    <circle
                                      class="dot"
                                      cx="19.6"
                                      cy="5.9"
                                      r="1"
                                      fill="#0fa883"
                                    ></circle>
                                    <circle
                                      class="dot"
                                      cx="21"
                                      cy="11"
                                      r="1"
                                      fill="#0fa883"
                                    ></circle>
                                    <path
                                      d="M19.6,16.4a10.2,10.2,0,0,1-8.5,4.7A10.1,10.1,0,0,1,11.1.9"
                                      fill="none"
                                      stroke="#313b59"
                                      stroke-linecap="round"
                                      stroke-miterlimit="10"
                                      stroke-width="2"
                                    ></path>
                                    <line
                                      x1="11"
                                      y1="6"
                                      x2="11"
                                      y2="11"
                                      fill="none"
                                      stroke="#0fa883"
                                      stroke-miterlimit="10"
                                      stroke-width="2"
                                    ></line>
                                    <line
                                      class="arrow"
                                      x1="13.9"
                                      y1="14.1"
                                      x2="11"
                                      y2="11"
                                      fill="none"
                                      stroke="#0fa883"
                                      stroke-miterlimit="10"
                                      stroke-width="2"
                                    ></line>
                                    <circle
                                      cx="11"
                                      cy="11"
                                      r="1.1"
                                      fill="#0fa883"
                                    ></circle>
                                  </svg>
                                  Streamline
                                </span>{" "}
                              </a>
                              <p class="sub-menu-description">
                                Improve your front office workflow
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li>
                <Dropdown>
                  <Dropdown.Toggle variant="light" style={{ border: "none" }}>
                    <a
                      class="nav-link "
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {" "}
                      Specialties{" "}
                    </a>
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    style={{
                      width: "90rem",
                      height: "32rem",
                      marginLeft: "-5rem",
                    }}
                  >
                    <div class="container">
                      <div class="row my-md-4">
                        <div class="col-md-12 col-lg-9 mb-4 mb-lg-0 px-2 px-lg-4">
                          <p class="sub-title"> Specialties</p>
                          <div class="row">
                            <ul class="col-md-4 col-lg-4 pr-4 font-normal">
                              <li>
                                <a
                                  class="nav-link item"
                                  href="/for/cardiology-marketing-and-advertising/"
                                >
                                  Cardiology
                                </a>
                              </li>
                              <li>
                                <a
                                  class="nav-link item"
                                  href="/for/cosmetic-dentist-marketing-and-advertising/"
                                >
                                  Dentistry (cosmetic)
                                </a>
                              </li>
                              <li>
                                <a
                                  class="nav-link item"
                                  href="/for/dental-marketing-and-advertising/"
                                >
                                  Dentistry (general)
                                </a>
                              </li>
                              <li>
                                <a
                                  class="nav-link item"
                                  href="/for/dermatology-marketing-and-advertising/"
                                >
                                  Dermatology
                                </a>
                              </li>
                              <li>
                                <a
                                  class="nav-link item"
                                  href="/for/ent-marketing-and-advertising/"
                                >
                                  ENT
                                </a>
                              </li>
                              <li>
                                <a
                                  class="nav-link item"
                                  href="/for/gastroenterology-practice-marketing-and-advertising/"
                                >
                                  Gasteoenterology
                                </a>
                              </li>
                              <li>
                                <a
                                  class="nav-link item"
                                  href="/for/general-surgery-marketing-and-advertising/"
                                >
                                  General Surgery
                                </a>
                              </li>
                              <li>
                                <a
                                  class="nav-link item"
                                  href="/for/internal-medicine-marketing-and-advertising/"
                                >
                                  Internal Medicine
                                </a>
                              </li>
                            </ul>
                            <ul class="col-md-4 col-lg-4 font-normal">
                              <li>
                                <a
                                  class="nav-link item"
                                  href="/for/medical-spa-marketing-and-advertising/"
                                >
                                  Med Spa
                                </a>
                              </li>
                              <li>
                                <a
                                  class="nav-link item"
                                  href="/for/ob-gyn-marketing-and-advertising/"
                                >
                                  OBGYN
                                </a>
                              </li>
                              <li>
                                <a
                                  class="nav-link item"
                                  href="/for/ophthalmology-marketing-and-advertising/"
                                >
                                  Ophthalmology
                                </a>
                              </li>
                              <li>
                                <a
                                  class="nav-link item"
                                  href="/for/optometry-marketing-and-advertising/"
                                >
                                  Optometry
                                </a>
                              </li>
                              <li>
                                <a
                                  class="nav-link item"
                                  href="/for/orthopedic-marketing-and-advertising/"
                                >
                                  Orthopedic
                                </a>
                              </li>
                              <li>
                                <a
                                  class="nav-link item"
                                  href="/for/pain-management-marketing-and-advertising/"
                                >
                                  Pain Management
                                </a>
                              </li>
                              <li>
                                <a
                                  class="nav-link item"
                                  href="/for/pediatrics-marketing-and-advertising/"
                                >
                                  Pediatrics
                                </a>
                              </li>
                            </ul>
                            <ul class="col-md-4 col-lg-4 pr-4 font-normal">
                              <li>
                                <a
                                  class="nav-link item"
                                  href="/for/pediatric-dentistry-marketing-and-advertising/"
                                >
                                  Pediatric Dentistry
                                </a>
                              </li>
                              <li>
                                <a
                                  class="nav-link item"
                                  href="/for/grow-your-practice-with-plastic-surgery-marketing/"
                                >
                                  Plastic Surgery
                                </a>
                              </li>
                              <li>
                                <a
                                  class="nav-link item"
                                  href="/for/podiatry-practice-marketing-and-advertising/"
                                >
                                  Podiatry
                                </a>
                              </li>
                              <li>
                                <a
                                  class="nav-link item"
                                  href="/for/primary-care-marketing-and-advertising/"
                                >
                                  Primary Care
                                </a>
                              </li>
                              <li>
                                <a
                                  class="nav-link item"
                                  href="/for/psychiatry-practice-marketing-and-advertising/"
                                >
                                  Psychiatry
                                </a>
                              </li>
                              <li>
                                <a
                                  class="nav-link item"
                                  href="/for/urgent-care-marketing-and-advertising/"
                                >
                                  Urgent Care
                                </a>
                              </li>
                              <li>
                                <a
                                  class="nav-link item"
                                  href="/for/urology-marketing-and-advertising/"
                                >
                                  Urology
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-md-12 col-lg-3 mb-6 mb-lg-3 mb-lg-0 px-2 px-lg-4 d-none d-lg-block">
                          <p class="sub-title"> Your practice and PatientPop</p>
                          <div class="list-group list-group-flush menu-description">
                            <p class="description">
                              We support dozens of specialties. Contact us to
                              find out about yours.
                            </p>{" "}
                            <a
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#modalContactSales"
                            >
                              {" "}
                              <span class="menu-title">Contact sales</span>{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </li>

              <li
                class="nav-item dropdown position-static "
                style={{ marginTop: ".9rem" }}
              >
                {" "}
                <a
                  class="nav-link nav-link-top"
                  href="/how-it-works"
                  role="button"
                >
                  {" "}
                  How it works{" "}
                </a>
              </li>
              <li
                class="nav-item dropdown position-static"
                style={{ marginTop: ".9rem" }}
              >
                {" "}
                <a
                  class="nav-link nav-link-top"
                  href="../whyPatientsPop"
                  role="button"
                >
                  {" "}
                  Why PatientPop{" "}
                </a>
              </li>
              <li
                class="nav-item dropdown position-static"
                style={{ marginTop: ".9rem" }}
              >
                {" "}
                <a
                  class="nav-link nav-link-top"
                  href="/resource-hub"
                  role="button"
                >
                  {" "}
                  Resources{" "}
                </a>
              </li>
              <li class="nav-item dropdown position-static d-block d-lg-none mt-3">
                {" "}
                <a
                  class="nav-link nav-link-secondary dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {" "}
                  Company{" "}
                </a>
                <div
                  class="dropdown-menu w-100 mt-0"
                  aria-labelledby="navbarDropdown"
                >
                  <div class="container">
                    <div class="row">
                      <div class="col-md-6 col-lg-4 mb-4 mb-lg-0 px-lg-4 px-2 font-normal">
                        <ul class="list-group-item list-group-item-action">
                          <li>
                            <a class="nav-link item" href="/about-us/">
                              Overview
                            </a>
                          </li>
                          <li>
                            <a
                              class="nav-link item"
                              href="/about-us/our-provider-promise"
                            >
                              Provider promise
                            </a>
                          </li>
                          <li>
                            <a
                              class="nav-link item"
                              href="/about-us/leadership-team"
                            >
                              Leadership team{" "}
                            </a>
                          </li>
                          <li>
                            <a class="nav-link item" href="/newsroom/">
                              Company news
                            </a>
                          </li>
                          <li>
                            <a class="nav-link item" href="/awards/">
                              Awards
                            </a>
                          </li>
                          <li>
                            <a class="nav-link item" href="/careers/">
                              Careers
                            </a>
                          </li>
                          <li>
                            <a
                              class="nav-link item"
                              href="/diversity-equity-and-inclusion"
                            >
                              DEI
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item dropdown position-static d-block d-lg-none">
                {" "}
                <a
                  class="nav-link nav-link-secondary dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {" "}
                  Contact{" "}
                </a>
                <div
                  class="dropdown-menu w-100 mt-0"
                  aria-labelledby="navbarDropdown"
                >
                  <div class="container">
                    <div class="row">
                      <div class="col-md-6 col-lg-4 mb-4 mb-lg-0 px-lg-4 px-2 font-normal">
                        <ul class="list-group-item list-group-item-action">
                          <li>
                            <a
                              class="nav-link item"
                              data-bs-toggle="modal"
                              data-bs-target="#modalContactSales"
                            >
                              Sales
                            </a>
                          </li>
                          <li>
                            <a
                              class="nav-link item js-click-support"
                              href="/support"
                            >
                              Support{" "}
                            </a>
                          </li>
                          <li>
                            <a
                              class="nav-link item js-click-help"
                              href="https://help.patientpop.com"
                            >
                              Help center
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item dropdown position-static d-block d-lg-none">
                {" "}
                <a
                  class="nav-link nav-link-secondary"
                  href="https://app.patientpop.com/"
                  role="button"
                >
                  {" "}
                  Sign in{" "}
                </a>
              </li>
            </ul>{" "}
            <button
              type="button"
              class="btn btn-get-demo text-nowrap d-none d-lg-block"
              data-bs-toggle="modal"
              data-bs-target="#modalDemoRequestNav"
            >
              {" "}
              Get demo{" "}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default ContainerNavbar;

import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import GetDemoModal from "../../components/getdemomodal";

function ContainerNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="fixed-top">
      <div className="navbar top-head">
        <div className="container-fluid">
          <div className="row justify-content-start">
            <div>See how Remassis works </div>
          </div>

          <div>
            <div className="row justify-content-end font-normal">
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
                        className="nav-link"
                        data-bs-toggle="modal"
                        data-bs-target="#modalContactSales"
                      >
                        Sales
                      </a>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      <a className="nav-link js-click-support" href="/support">
                        Support{" "}
                      </a>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      <a
                        className="nav-link js-click-help"
                        href="https://help.patientpop.com"
                      >
                        Help center
                      </a>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </div>
              <div className="nav-item col">
                <a className="nav-link" href="https://app.patientpop.com/">
                  Sign in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid mt-0 ">
          <header className="headerx">
            <div className="header-logo">
              {" "}
              <a href="/webclone">
                <div className="l-header__logo mx-12"></div>
              </a>
            </div>
            <input className="menu-btnx" type="checkbox" id="menu-btn" />
            <label className="menu-iconx" for="menu-btn">
              <span className="naviconx"></span>
            </label>
            <ul className="menux">
              <li className="nav-item dropdown position-static ">
                {" "}
                <Dropdown>
                  <a
                    className="nav-link nav-link-top"
                    href="../how_it_works"
                    role="button"
                  >
                    {" "}
                    How it works{" "}
                  </a>
                </Dropdown>
              </li>
              <li className="nav-item dropdown position-static">
                {" "}
                <Dropdown>
                  <a
                    className="nav-link nav-link-top"
                    href="../whyPatientsPop"
                    role="button"
                  >
                    {" "}
                    Why Remassis{" "}
                  </a>
                </Dropdown>
              </li>
              <li className="nav-item dropdown position-static">
                {" "}
                <Dropdown>
                  <a
                    className="nav-link nav-link-top"
                    href="../whyPatientsPop"
                    role="button"
                  >
                    {" "}
                    Why Remassis{" "}
                  </a>
                </Dropdown>
              </li>
            </ul>
          </header>
          <div className="collapse navbar-collapse" id="navbarExample1">
            <ul className="navbar-nav me-auto ps-lg-0 menux ">
              <li
                className="nav-item dropdown position-static "
                style={{ marginTop: ".9rem" }}
              >
                {" "}
                <Dropdown>
                  <a
                    className="nav-link nav-link-top"
                    href="../how_it_works"
                    role="button"
                  >
                    {" "}
                    How it works{" "}
                  </a>
                </Dropdown>
              </li>
              <li
                className="nav-item dropdown position-static"
                style={{ marginTop: ".9rem" }}
              >
                {" "}
                <Dropdown>
                  <a
                    className="nav-link nav-link-top"
                    href="../whyPatientsPop"
                    role="button"
                  >
                    {" "}
                    Why Remassis{" "}
                  </a>
                </Dropdown>
              </li>
              <li
                className="nav-item dropdown position-static"
                style={{ marginTop: ".9rem" }}
              >
                {" "}
                <Dropdown>
                  <a
                    className="nav-link nav-link-top"
                    href="../resourcess"
                    role="button"
                  >
                    {" "}
                    Resources{" "}
                  </a>
                </Dropdown>
              </li>
            </ul>{" "}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default ContainerNavbar;

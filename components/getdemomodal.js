import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Modal from "react-bootstrap/Modal";

function GetDemoModal() {
  return (
    <div>
      <Form>
        <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
          <Form.Label>
            Please complete the form below so we can contact you with more
            information about how PatientPop can help grow your practice.
          </Form.Label>
        </Form.Group>
        <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
          <FloatingLabel
            controlId="floatingInput"
            label="Full Name"
            className="mb-2"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
          <FloatingLabel
            controlId="floatingInput"
            label="Practice Name"
            className="mb-2"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
          <FloatingLabel
            controlId="floatingInput"
            label="Email"
            className="mb-2"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
          <FloatingLabel
            controlId="floatingInput"
            label="Phone"
            className="mb-2"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
          <FloatingLabel
            controlId="floatingInput"
            label="Zip Code"
            className="mb-2"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
          <FloatingLabel
            controlId="floatingInput"
            label="# providers"
            className="mb-2"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
          <Form.Label>
            By submitting my email address above, I acknowledge that PatientPop
            may use my information as described in its Privacy Policy.
          </Form.Label>
        </Form.Group>
      </Form>
    </div>
  );
}

export default GetDemoModal;

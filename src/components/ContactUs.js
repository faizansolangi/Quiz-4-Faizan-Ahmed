import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export function ContactUs() {
  return (
    <Container>
      <h2>Contact Us</h2>
      <Form>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="fullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="e.g. Faizan Ahmed" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" placeholder="e.g. 0308 3372042" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="e.g. Sukkur, Rohri" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="e.g. faizansolangi576@gmail.com" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Enter your description" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col className="text-end">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default ContactUs;
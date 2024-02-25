//precisioncleaning/FRONTEND/Components/Forms/dwForm

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

export default function DwForm(props) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };



  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>Job Number</Form.Label>
            <Form.Control
              required
              type="text"
              name="jobNumber"
              placeholder="Enter Job Number"
            />
            <Form.Control.Feedback type="invalid">
              Please enter Job Number.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Date</Form.Label>
            <Form.Control
              required
              type="date"
              name="dailyWorksheetDate"
            />
            <Form.Control.Feedback type="invalid">
              Please enter the date.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Site</Form.Label>
            <Form.Control
              required
              type="text"
              name="site"
              placeholder="Enter Site"
            />
            <Form.Control.Feedback type="invalid">
              Please enter the site.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>Site Manager</Form.Label>
            <Form.Control
              required
              type="text"
              name="siteManager"
              placeholder="Enter Site Manager"
            />
            <Form.Control.Feedback type="invalid">
              Please enter the Site Manager.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Team Leader</Form.Label>
            <Form.Control
              required
              as="select"
              name="teamLeader"
            >
              <option value="">Select...</option>
              <option value="Eduardo Nogueira">Eduardo Nogueira</option>
              <option value="Bruna Fonseca">Bruna Fonseca</option>
              <option value="Daniel Tavares">Daniel Tavares</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Please select a Team Leader.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Contract Type</Form.Label>
            <Form.Control
              required
              as="select"
              name="contractType"
            >
              <option value="">Select...</option>
              <option value="contract hours">Contract Hours</option>
              <option value="variation of work">Variation of Work</option>
              <option value="charge up">Charge Up</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Please select a Contract Type.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="12">
            <Form.Label>Work Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              name="workDescription"
              placeholder="Enter Work Description"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="12">
            <Form.Label>Extra Products</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              name="extraProduct"
              placeholder="Enter Extra Products"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>PO Number</Form.Label>
            <Form.Control
              required
              type="text"
              name="poNumber"

              placeholder="Enter PO Number"
            />
            <Form.Control.Feedback type="invalid">
              Please enter PO Number.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type = "submit"> Register</Button>
        <br />
        <br />

    </Form>
  );
}


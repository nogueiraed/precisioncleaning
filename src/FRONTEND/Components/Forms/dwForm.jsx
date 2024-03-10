//precisioncleaning/FRONTEND/Components/Forms/dwForm
import { useState } from 'react';
import {Button, Form, Col, Row} from 'react-bootstrap'


export default function DwForm(props) {
  const [validated, setValidated] = useState(false);

  const getCurrentDate = () => {
    let date = new Date();
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = date.getFullYear();
    return `${year}-${month}-${day}`;
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
        setValidated(true);
    }
    else{
      setValidated(false);
      props.setDwList([...props.dwList, dailyWorkSheet]);
      props.setShowTable(true); 
    }
    
  };

  const [dailyWorkSheet, setDailyWorkSheet] = useState({
    jobNumber: "",
    dailyWorksheetDate: getCurrentDate(),
    site: "",
    siteManager: "",
    teamLeader: "",
    //cleaners: [{ name: "", timeIn: "", timeOut: "" }],
    contractType: "",
    workDescription: "",
    extraProduct: "",
    poNumber: "",
  });

  function handleChange(event) {
    const component = event.currentTarget
    setDailyWorkSheet({...dailyWorkSheet, [component.name]: component.value});
  }






  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>Job Number</Form.Label>
            <Form.Control
              required
              type="text"
              name="jobNumber"
              id="jobNumber"
              placeholder="Enter Job Number"
              value={dailyWorkSheet.jobNumber}
              onChange={handleChange}
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
              id="dailyWorksheetDate"
              value={dailyWorkSheet.dailyWorksheetDate}
              onChange={handleChange}
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
              id="site"
              placeholder="Enter Site"
              value={dailyWorkSheet.site}
              onChange={handleChange}
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
              id="siteManager"
              placeholder="Enter Site Manager"
              value={dailyWorkSheet.siteManager}
              onChange={handleChange}
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
              id="teamLeader"
              value={dailyWorkSheet.teamLeader}
              onChange={handleChange}
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
              id="contractType"
              value={dailyWorkSheet.contractType}
              onChange={handleChange}
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
              id="workDescription"
              placeholder="Enter Work Description"
              value={dailyWorkSheet.workDescription}
              onChange={handleChange}
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
              id="extraProduct"
              placeholder="Enter Extra Products"
              value={dailyWorkSheet.extraProduct}
              onChange={handleChange}
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
              id="poNumber"
              placeholder="Enter PO Number"
              value={dailyWorkSheet.poNumber}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please enter PO Number.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <div className="mb-3 d-flex align-items-center">
          <Button type = "submit" style={{ backgroundColor: "green", marginRight: "5px"  }}> Register</Button>
          <Button variant="primary" style={{ backgroundColor: "#003366" }} onClick={() => {
            props.setShowTable(true);
          }}>Back</Button>
        </div>
        <br />
        <br />
    </Form>
  );
}


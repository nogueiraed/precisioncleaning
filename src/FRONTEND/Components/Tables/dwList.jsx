import { Table, Button, Form } from "react-bootstrap";


export default function DwList(props) {
        return(
                <div>

                        <div className="mb-3 d-flex align-items-center">
                            <Form.Control
                                type="text"
                                placeholder="Search by Job Number"
                                style={{ maxWidth: "200px" }}
                            />
                            <div className="flex-grow-1"></div>
                            <Button variant="primary" style={{ backgroundColor: "#003366" }} onClick={() =>{
                                props.setShowTable(false);
                            }}>New DW</Button>
                        </div>
        
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Job Number</th>
                                    <th>Team Leader</th>
                                    <th>Contract Type</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    props.dwList?.map((dailyWorkSheet, index) => {
                                        return(
                                            <tr key={index}>
                                                <td>{dailyWorkSheet.jobNumber}</td>
                                                <td>{dailyWorkSheet.teamLeader}</td>
                                                <td>{dailyWorkSheet.contractType}</td>
                                                <td>
                                                    <Button variant="outline-primary" style={{ margin: '5px' }}>
                                                        Edit
                                                    </Button>
                                                    
                                                    <Button variant="outline-danger">
                                                        Delete
                                                    </Button>
                                                </td>
                                        </tr>
                                        )

                                    })
                                }
                            </tbody>
                        </Table>        
                </div>   
            )
}




    
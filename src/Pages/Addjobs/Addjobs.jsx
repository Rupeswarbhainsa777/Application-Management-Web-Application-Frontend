import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Addjobs.css';

const Addjobs = () => {
    return (
        <Container className="my-4">
            <Row className="justify-content-center">
                <Col md={4}>
                    <Card className="shadow-lg rounded-3 border-0">
                        <Card.Img
                            variant="top"
                            src="https://via.placeholder.com/300x180"
                            style={{ objectFit: 'cover', height: '180px' }}
                        />
                        <Card.Body>
                            <Card.Title className="fw-bold text-primary">Frontend Developer</Card.Title>
                            <Card.Text className="text-muted">
                                Build modern and responsive user interfaces using React and Bootstrap.
                            </Card.Text>
                            <Button variant="primary" className="w-100">
                                Apply Now
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col>
                    <h4 className="mb-3 text-center text-secondary">Applicant List</h4>
                    <Table striped bordered hover responsive className="shadow-sm rounded">
                        <thead className="table-primary">
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Rupeswar</td>
                            <td>Bhainsa</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default Addjobs;




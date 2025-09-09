import { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";

const Addjobs = () => {
    const [jobData, setJobData] = useState({
        companyName: "",
        jobType: "",
        date: "",
        companyType: "",
        status: "",
    });

    // Handle input change
    const handleChange = (e) => {
        setJobData({
            ...jobData,
            [e.target.name]: e.target.value,
        });
    };

    // Submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8089/job/add", jobData, {
                headers: { "Content-Type": "application/json" },
            });
            console.log("Job added successfully:", response.data);
            alert("Job added successfully!");
            setJobData({ companyName: "", jobType: "", date: "", companyType: "", status: "" });
        } catch (error) {
            console.error("Error adding job:", error);
            alert("Failed to add job. Check console for details.");
        }
    };

    return (
        <Container className="my-4">
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card className="shadow-lg rounded-3 p-4">
                        <h3 className="text-center mb-4 text-primary">Add New Job</h3>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Company Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="companyName"
                                    value={jobData.companyName}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Job Type</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="jobType"
                                    value={jobData.jobType}
                                    onChange={handleChange}
                                    placeholder="e.g. Full-Time, Part-Time"
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Date</Form.Label>
                                <Form.Control
                                    type="datetime-local"
                                    name="date"
                                    value={jobData.date}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Company Type</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="companyType"
                                    value={jobData.companyType}
                                    onChange={handleChange}
                                    placeholder="e.g. Tech, Finance"
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Status</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="status"
                                    value={jobData.status}
                                    onChange={handleChange}
                                    placeholder="e.g. Active, Closed"
                                    required
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="w-100">
                                Submit Job
                            </Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Addjobs;


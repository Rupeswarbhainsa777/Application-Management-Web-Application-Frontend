import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";

const Addjobs = () => {
    const [jobData, setJobData] = useState({
        companyName: "",
        jobType: "",
        date: "",
        companyType: "",
        status: "",
    });

    // Handle input
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
        <div className="addjobs-wrapper">
            <div className="addjobs-header">
                <h2>Add New Job</h2>
                <p style={{ color: 'var(--text-light)' }}>Create a new opportunity record</p>
            </div>

            <div className="addjobs-card">
                <Form onSubmit={handleSubmit}>
                    <Row className="mb-4">
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>🏢 Company Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="companyName"
                                    value={jobData.companyName}
                                    onChange={handleChange}
                                    placeholder="Enter company name"
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>💼 Job Type</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="jobType"
                                    value={jobData.jobType}
                                    onChange={handleChange}
                                    placeholder="e.g. Full-Time, Part-Time"
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mb-4">
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>📅 Date</Form.Label>
                                <Form.Control
                                    type="datetime-local"
                                    name="date"
                                    value={jobData.date}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>🏭 Company Type</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="companyType"
                                    value={jobData.companyType}
                                    onChange={handleChange}
                                    placeholder="e.g. Tech, Finance"
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mb-4">
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>📊 Status</Form.Label>
                                <Form.Select
                                    name="status"
                                    value={jobData.status}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">-- Select Status --</option>
                                    <option value="Active">Active</option>
                                    <option value="Closed">Closed</option>
                                    <option value="Interview Scheduled">Interview Scheduled</option>
                                    <option value="Offer Received">Offer Received</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Button
                        variant="primary"
                        type="submit"
                        className="btn-primary-custom"
                    >
                        Submit Job
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Addjobs;


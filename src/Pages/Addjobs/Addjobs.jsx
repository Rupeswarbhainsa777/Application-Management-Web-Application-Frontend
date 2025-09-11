import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
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
        <Container fluid className="p-5 bg-light min-vh-100">
            <h2 className="text-center mb-5 fw-bold text-primary">📝 Add New Job</h2>

            <Form onSubmit={handleSubmit}>
                {/* Company Name + Job Type in same row */}
                <Row className="mb-4">
                    <Col md={6}>
                        <div className="p-3 border rounded-3 bg-white shadow-sm h-100">
                            <Form.Label className="fw-semibold">🏢 Company Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="companyName"
                                value={jobData.companyName}
                                onChange={handleChange}
                                placeholder="Enter company name"
                                required
                            />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="p-3 border rounded-3 bg-white shadow-sm h-100">
                            <Form.Label className="fw-semibold">💼 Job Type</Form.Label>
                            <Form.Control
                                type="text"
                                name="jobType"
                                value={jobData.jobType}
                                onChange={handleChange}
                                placeholder="e.g. Full-Time, Part-Time"
                                required
                            />
                        </div>
                    </Col>
                </Row>

                {/* Date */}
                <Row className="mb-4">
                    <Col>
                        <div className="p-3 border rounded-3 bg-white shadow-sm">
                            <Form.Label className="fw-semibold">📅 Date</Form.Label>
                            <Form.Control
                                type="datetime-local"
                                name="date"
                                value={jobData.date}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </Col>
                </Row>

                {/* Company Type */}
                <Row className="mb-4">
                    <Col>
                        <div className="p-3 border rounded-3 bg-white shadow-sm">
                            <Form.Label className="fw-semibold">🏭 Company Type</Form.Label>
                            <Form.Control
                                type="text"
                                name="companyType"
                                value={jobData.companyType}
                                onChange={handleChange}
                                placeholder="e.g. Tech, Finance"
                                required
                            />
                        </div>
                    </Col>
                </Row>

                {/* Status */}
                <Row className="mb-4">
                    <Col>
                        <div className="p-3 border rounded-3 bg-white shadow-sm">
                            <Form.Label className="fw-semibold">📊 Status</Form.Label>
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
                        </div>
                    </Col>
                </Row>

                {/* Submit */}
                <Row>
                    <Col>
                        <Button
                            variant="primary"
                            type="submit"
                            className="w-100 fw-semibold py-3 shadow rounded-3"
                        >
                            ✅ Submit Job
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};

export default Addjobs;


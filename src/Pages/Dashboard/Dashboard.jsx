import React, { useEffect, useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch("http://localhost:8089/job/allJobs");
                if (!response.ok) {
                    throw new Error("Failed to fetch jobs");
                }
                const data = await response.json();
                setJobs(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    // Stats calculation
    const totalApplications = jobs.length;
    const interviews = jobs.filter(job => job.status?.toLowerCase() === "interview").length;
    const offers = jobs.filter(job => job.status?.toLowerCase() === "offer").length;
    const rejected = jobs.filter(job => job.status?.toLowerCase() === "rejected").length;

    if (loading) return <div className="dashboard"><h2>Loading...</h2></div>;
    if (error) return <div className="dashboard"><h2>Error: {error}</h2></div>;

    return (
        <div className="dashboard">
            <h1>Job Application Dashboard</h1>

            {/* Overview Section */}
            <div className="overview">
                <div className="card">Total Applications: {totalApplications}</div>
                <div className="card">Interviews: {interviews}</div>
                <div className="card">Offers: {offers}</div>
                <div className="card">Rejected: {rejected}</div>
            </div>

            {/* Application List */}
            <div className="applications">
                <h2>My Applications</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Company</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Date Applied</th>
                    </tr>
                    </thead>
                    <tbody>
                    {jobs.length > 0 ? (
                        jobs.map((job, index) => (
                            <tr key={index}>
                                <td>{job.companyName}</td>
                                <td>{job.jobType}</td>
                                <td>{job.status}</td>
                                <td>{job.date}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No job applications found</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;

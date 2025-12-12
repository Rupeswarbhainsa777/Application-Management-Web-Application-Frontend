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
    const interviews = jobs.filter(job => job.status?.toLowerCase().includes("interview")).length;
    const offers = jobs.filter(job => job.status?.toLowerCase().includes("offer")).length;
    const rejected = jobs.filter(job => job.status?.toLowerCase().includes("closed") || job.status?.toLowerCase().includes("rejected")).length;

    const getStatusClass = (status) => {
        if (!status) return "";
        const s = status.toLowerCase();
        if (s.includes("interview")) return "status-interview";
        if (s.includes("offer")) return "status-offer";
        if (s.includes("closed") || s.includes("rejected")) return "status-closed";
        if (s.includes("active")) return "status-active";
        return "status-active"; // default
    };

    if (loading) return (
        <div className="dashboard-wrapper">
            <h2 style={{ color: 'var(--text)' }}>Loading...</h2>
        </div>
    );
    
    if (error) return (
        <div className="dashboard-wrapper">
            <h2 style={{ color: 'var(--primary)' }}>Error: {error}</h2>
        </div>
    );

    return (
        <div className="dashboard-wrapper">
            <div className="dashboard-header">
                <h1>Job Application Dashboard</h1>
                <p style={{ color: 'var(--text-light)', marginTop: '10px' }}>Overview of your opportunities</p>
            </div>

            {/* Overview Section */}
            <div className="stats-container">
                <div className="stat-card">
                    <div className="stat-number">{totalApplications}</div>
                    <div className="stat-label">Total Applications</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">{interviews}</div>
                    <div className="stat-label">Interviews</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">{offers}</div>
                    <div className="stat-label">Offers</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">{rejected}</div>
                    <div className="stat-label">Closed/Rejected</div>
                </div>
            </div>

            {/* Application List */}
            <div className="applications-container">
                <h2>My Applications</h2>
                <div className="table-responsive">
                    <table className="dashboard-table">
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
                                    <td><strong>{job.companyName}</strong></td>
                                    <td>{job.jobType}</td>
                                    <td>
                                        <span className={`status-badge ${getStatusClass(job.status)}`}>
                                            {job.status}
                                        </span>
                                    </td>
                                    <td>{new Date(job.date).toLocaleDateString()}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" style={{ textAlign: 'center', padding: '30px' }}>No job applications found</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};


export default Dashboard;

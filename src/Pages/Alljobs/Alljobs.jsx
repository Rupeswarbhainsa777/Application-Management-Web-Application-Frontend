import React, { useEffect, useState } from 'react';
import './AllJobs.css';

const AllJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8089/job/allJobs')
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch jobs');
                return res.json();
            })
            .then((data) => {
                setJobs(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <div className="alljobs-page">
            <div className="alljobs-container">
                <h1 className="page-title">All Applied Jobs</h1>

                {loading && <p className="loading">Loading jobs...</p>}
                {error && <p className="error">Error: {error}</p>}

                {!loading && !error && jobs.length === 0 && (
                    <p className="no-jobs">No jobs available.</p>
                )}

                {!loading && !error && jobs.length > 0 && (
                    <ul className="jobs-grid">
                        {jobs.map((job) => (
                            <li key={job.id} className="job-card">
                                <div className="job-header">
                                    <h2 className="job-title">{job.companyName}</h2>
                                    <span
                                        className={`status-badge ${
                                            job.status === 'Open' ? 'open' : 'closed'
                                        }`}
                                    >
                    {job.status}
                  </span>
                                </div>

                                <div className="job-details">
                                    <p><span>Job Type:</span> {job.jobType}</p>
                                    <p><span>Date:</span> {new Date(job.date).toLocaleDateString()}</p>
                                    <p><span>Company Type:</span> {job.companyType}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default AllJobs;

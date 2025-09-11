import React, { useEffect, useState } from 'react';
import './AllJobs.css'; // Import the CSS file

const AllJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8089/job/allJobs')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch jobs');
                }
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

    if (loading) return <p className="loading">Loading jobs...</p>;
    if (error) return <p className="error">Error: {error}</p>;

    return (
        <div className="alljobs-page">
            <div className="alljobs-container">
                <h1 className="page-title">Available Job Listings</h1>

                {jobs.length === 0 ? (
                    <p className="no-jobs">No jobs available.</p>
                ) : (
                    <ul className="jobs-grid">
                        {jobs.map((job) => (
                            <li key={job.id} className="job-card">
                                <h2 className="job-title">{job.companyName}</h2>
                                <div className="job-details">
                                    <p><span>Job Type:</span> {job.jobType}</p>
                                    <p><span>Date:</span> {new Date(job.date).toLocaleDateString()}</p>
                                    <p><span>Company Type:</span> {job.companyType}</p>
                                    <p>
                                        <span>Status:</span>{' '}
                                        <span
                                            className={`status-badge ${
                                                job.status === 'Open' ? 'open' : 'closed'
                                            }`}
                                        >
                      {job.status}
                    </span>
                                    </p>
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


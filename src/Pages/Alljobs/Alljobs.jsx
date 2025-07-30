import React, { useEffect, useState } from 'react';

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

    if (loading) return <p className="text-center">Loading jobs...</p>;
    if (error) return <p className="text-center text-red-500">Error: {error}</p>;

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">All Jobs</h1>
            {jobs.length === 0 ? (
                <p>No jobs available.</p>
            ) : (
                <ul className="space-y-4">
                    {jobs.map((job) => (
                        <li key={job.id} className="border p-4 rounded shadow bg-white">
                            <h2 className="text-xl font-semibold">{job.companyName}</h2>
                            <p><strong>Job Type:</strong> {job.jobType}</p>
                            <p><strong>Date:</strong> {new Date(job.date).toLocaleDateString()}</p>
                            <p><strong>Company Type:</strong> {job.companyType}</p>
                            <p><strong>Status:</strong> {job.status}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AllJobs;

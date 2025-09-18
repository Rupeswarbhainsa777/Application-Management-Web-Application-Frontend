import React, { useEffect, useState } from 'react';
import './AllJobs.css';

const AllJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    // For update modal
    const [isEditing, setIsEditing] = useState(false);
    const [currentJob, setCurrentJob] = useState(null);

    // Fetch jobs
    const fetchJobs = () => {
        setLoading(true);
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
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    // Delete job by id
    const handleDelete = (id) => {
        if (!window.confirm('Are you sure you want to delete this job?')) return;

        fetch(`http://localhost:8089/job/delete/${id}`, {
            method: 'DELETE',
        })
            .then((res) => {
                if (!res.ok) throw new Error('Failed to delete job');
                setJobs(jobs.filter((job) => job.id !== id));
            })
            .catch((err) => {
                alert('Error: ' + err.message);
            });
    };

    // Open update modal
    const handleEdit = (job) => {
        setCurrentJob(job);
        setIsEditing(true);
    };

    // Handle update form submit
    const handleUpdateSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:8089/job/update/${currentJob.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(currentJob),
        })
            .then((res) => {
                if (!res.ok) throw new Error('Failed to update job');
                return res.json();
            })
            .then(() => {
                setJobs(jobs.map((j) => (j.id === currentJob.id ? currentJob : j)));
                setIsEditing(false);
                setCurrentJob(null);
            })
            .catch((err) => {
                alert('Error: ' + err.message);
            });
    };

    // Filter jobs based on search term
    const filteredJobs = jobs.filter((job) =>
        job.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.jobType.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.companyType.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.status.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="alljobs-page">
            <div className="alljobs-container">
                <h1 className="page-title">All Applied Jobs</h1>

                {/* 🔍 Search Bar */}
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search by company, type, or status..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                {loading && <p className="loading">Loading jobs...</p>}
                {error && <p className="error">Error: {error}</p>}

                {!loading && !error && filteredJobs.length === 0 && (
                    <p className="no-jobs">No jobs match your search.</p>
                )}

                {!loading && !error && filteredJobs.length > 0 && (
                    <ul className="jobs-grid">
                        {filteredJobs.map((job) => (
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

                                <div className="job-actions">
                                    <button
                                        className="edit-btn"
                                        onClick={() => handleEdit(job)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="delete-btn"
                                        onClick={() => handleDelete(job.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* 📝 Update Modal */}
            {isEditing && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Edit Job</h2>
                        <form onSubmit={handleUpdateSubmit} className="update-form">
                            <label>
                                Company Name:
                                <input
                                    type="text"
                                    value={currentJob.companyName}
                                    onChange={(e) =>
                                        setCurrentJob({ ...currentJob, companyName: e.target.value })
                                    }
                                    required
                                />
                            </label>

                            <label>
                                Job Type:
                                <input
                                    type="text"
                                    value={currentJob.jobType}
                                    onChange={(e) =>
                                        setCurrentJob({ ...currentJob, jobType: e.target.value })
                                    }
                                    required
                                />
                            </label>

                            <label>
                                Company Type:
                                <input
                                    type="text"
                                    value={currentJob.companyType}
                                    onChange={(e) =>
                                        setCurrentJob({ ...currentJob, companyType: e.target.value })
                                    }
                                    required
                                />
                            </label>

                            <label>
                                Status:
                                <select
                                    value={currentJob.status}
                                    onChange={(e) =>
                                        setCurrentJob({ ...currentJob, status: e.target.value })
                                    }
                                >
                                    <option value="Open">Open</option>
                                    <option value="Closed">Closed</option>
                                </select>
                            </label>

                            <div className="modal-actions">
                                <button type="submit" className="save-btn">Save</button>
                                <button
                                    type="button"
                                    className="cancel-btn"
                                    onClick={() => setIsEditing(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllJobs;

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-wrapper">
            <div className="home-container">
                <h1>🚀 Welcome to Job Application Manager</h1>
                <p>
                    Organize, track, and manage all your job applications in one place. <br />
                    Stay on top of your job search and never miss an opportunity!
                </p>
                <Link to="/add-job" className="btn">
                    + Add Your First Job
                </Link>
            </div>
        </div>
    );
};

export default Home;

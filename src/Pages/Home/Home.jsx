import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-wrapper">
            <div className="home-header">
                <h1>🚀 Welcome to Job Application Manager</h1>
                <p>
                    Organize, track, and manage all your job applications in one place. <br />
                    Stay on top of your job search and never miss an opportunity!
                </p>
            </div>

            <div className="home-sections">
                <div className="home-card">
                    <h2><span className="icon">📝</span> Add Job</h2>
                    <p>Add a new job application to your tracker easily.</p>
                    <Link to="/add-job" className="btn">Go to Add Job</Link>
                </div>

                <div className="home-card">
                    <h2><span className="icon">ℹ️</span> About</h2>
                    <p>Learn more about how this tool helps you manage your job search.</p>
                    <Link to="/about" className="btn">View About Page</Link>
                </div>

                <div className="home-card">
                    <h2><span className="icon">🤖</span> AI Assistant</h2>
                    <p>Get personalized job insights and resume suggestions with AI.</p>
                    <Link to="/aiSupport" className="btn">Try AI Assistant</Link>
                </div>

                <div className="home-card">
                    <h2><span className="icon">📋</span> All Jobs</h2>
                    <p>View all your saved job applications in one dashboard.</p>
                    <Link to="/all-jobs" className="btn">View All Jobs</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;

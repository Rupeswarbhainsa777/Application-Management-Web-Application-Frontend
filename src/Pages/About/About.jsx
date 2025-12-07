import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    return (
        <div className="about-wrapper">
            <div className="about-header">
                <h1>About This Application</h1>
            </div>
            
            <div className="about-content">
                <div className="about-card">
                    <h2><span className="icon">🚀</span> Our Mission</h2>
                    <p>
                        Welcome to the <strong>Job Application Manager</strong> — your personal assistant
                        for organizing and tracking your job search. This tool allows you to
                        <em> add, update, and monitor</em> all your job applications in one place,
                        helping you stay focused and never miss an opportunity.
                    </p>
                    <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
                        <Link to="/add-job" className="btn">Start Tracking Now</Link>
                    </div>
                </div>

                <div className="about-card">
                    <h2><span className="icon">✨</span> Key Features</h2>
                    <ul className="feature-list">
                        <li>🎯 Track application status effortlessly</li>
                        <li>📅 Organize deadlines and interviews</li>
                        <li>📊 Visual insights into your job search</li>
                        <li>🔒 Secure and private data management</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;

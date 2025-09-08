import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1>Job Application Dashboard</h1>

            {/* Overview Section */}
            <div className="overview">
                <div className="card">Total Applications: 12</div>
                <div className="card">Interviews: 3</div>
                <div className="card">Offers: 1</div>
                <div className="card">Rejected: 2</div>
            </div>

            {/* Application List */}
            <div className="applications">
                <h2>My Applications</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Company</th>
                        <th>Position</th>
                        <th>Status</th>
                        <th>Date Applied</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Google</td>
                        <td>Frontend Developer</td>
                        <td>Interview</td>
                        <td>2025-09-01</td>
                    </tr>
                    <tr>
                        <td>Amazon</td>
                        <td>Java Developer</td>
                        <td>Applied</td>
                        <td>2025-09-05</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;

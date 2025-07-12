import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Container className="mt-5 text-center">
            <h1>Welcome to the Job Management App</h1>
            <p>Manage all your job postings in one place.</p>
            <Button as={Link} to="/add-job" variant="primary">Add New Job</Button>
        </Container>
    );
};

export default Home;

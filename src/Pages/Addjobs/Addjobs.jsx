import React, { useState } from 'react';
import './Addjobs.css';

const Addjobs = () => {
  const [form, setForm] = useState({
    name: '',
    id: '',
    type: '',
    company: '',
    mode: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Job added!');
  };

  return (
    <div className="addjobs-container">
      <h1>Add a New Job</h1>
      <form className="addjobs-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label>
          ID
          <input type="text" name="id" value={form.id} onChange={handleChange} required />
        </label>
        <label>
          Type
          <input type="text" name="type" value={form.type} onChange={handleChange} required />
        </label>
        <label>
          Company Name
          <input type="text" name="company" value={form.company} onChange={handleChange} required />
        </label>
        <label>
          Mode
          <input type="text" name="mode" value={form.mode} onChange={handleChange} required />
        </label>
        <button type="submit">Add Job</button>
      </form>
    </div>
  );
};

export default Addjobs;
